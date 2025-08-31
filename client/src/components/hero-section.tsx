import { Button } from "@/components/ui/button";
import { Gem, Phone } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden" data-testid="hero-section">
      {/* Industrial mining background with heavy machinery */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern mining operation with heavy machinery" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="reveal-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-testid="hero-title">
              India's <span className="text-primary">Largest</span><br/>
              Quartz <span className="text-accent">Supplier</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed" data-testid="hero-description">
              Access to every possible mine across India. Premium quality quartz solutions 
              for industries that demand excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12" data-testid="hero-buttons">
              <Button 
                className="btn-primary px-8 py-4 rounded-lg text-primary-foreground font-semibold text-lg"
                onClick={() => scrollToSection('mines')}
                data-testid="button-explore-mines"
              >
                <Gem className="mr-2" />
                Explore Our Mines
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all"
                onClick={() => scrollToSection('contact')}
                data-testid="button-contact"
              >
                <Phone className="mr-2" />
                Contact Us
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-testid="hero-stats">
              <div className="text-center">
                <div className="stat-number text-3xl font-bold text-primary mb-2" data-testid="stat-mines">500+</div>
                <div className="text-muted-foreground">Mine Locations</div>
              </div>
              <div className="text-center">
                <div className="stat-number text-3xl font-bold text-primary mb-2" data-testid="stat-experience">25+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="stat-number text-3xl font-bold text-primary mb-2" data-testid="stat-clients">1000+</div>
                <div className="text-muted-foreground">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="stat-number text-3xl font-bold text-primary mb-2" data-testid="stat-leader">#1</div>
                <div className="text-muted-foreground">Market Leader</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
