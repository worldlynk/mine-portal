import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Building, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      requirements: "",
    },
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted",
        description: "Thank you for your inquiry! Our team will contact you within 24 hours.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/inquiries"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    submitInquiry.mutate(data);
  };

  return (
    <section id="contact" className="py-20 gradient-overlay" data-testid="contact-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="contact-title">
              Ready to <span className="text-primary">Partner</span> with Us?
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="contact-description">
              Join India's leading industries that trust BlueHawk Group for their quartz requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="reveal-up">
              <Card className="bg-card border border-border rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6" data-testid="form-title">Request a Quote</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your company name" 
                                {...field}
                                data-testid="input-company-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="contactPerson"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Person</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Full name" 
                                {...field}
                                data-testid="input-contact-person"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="email@company.com" 
                                {...field}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="requirements"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Quartz Requirements</FormLabel>
                            <FormControl>
                              <Textarea 
                                rows={4} 
                                placeholder="Describe your specific requirements, volume, and timeline" 
                                {...field}
                                data-testid="textarea-requirements"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="btn-primary w-full py-4 rounded-lg text-primary-foreground font-semibold text-lg"
                        disabled={submitInquiry.isPending}
                        data-testid="button-submit-inquiry"
                      >
                        <Send className="mr-2" />
                        {submitInquiry.isPending ? "Submitting..." : "Submit Inquiry"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="reveal-up space-y-8">
              <Card className="bg-card border border-border rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6" data-testid="contact-info-title">Get in Touch</h3>
                  
                  <div className="space-y-6" data-testid="contact-info">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Headquarters</h4>
                        <p className="text-muted-foreground">BlueHawk Tower<br/>Mining District, Mumbai 400001</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-muted-foreground">+91 22 1234 5678</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-muted-foreground">info@bluehawkgroup.in</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Business Hours</h4>
                        <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-card border border-border rounded-2xl">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-4" data-testid="stats-title">By the Numbers</h4>
                  <div className="grid grid-cols-2 gap-4" data-testid="contact-stats">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Active Mines</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">28</div>
                      <div className="text-sm text-muted-foreground">Indian States</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Operations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">ISO</div>
                      <div className="text-sm text-muted-foreground">Certified</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
