import { Award, Globe, Shield } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 gradient-overlay" data-testid="about-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-up text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="about-title">
              Unmatched <span className="text-primary">Industry Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="about-description">
              BlueHawk Group stands as India's premier quartz mining conglomerate, 
              with exclusive access to the nation's finest mineral deposits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-up">
              <img 
                src="https://pixabay.com/get/geb04af8ee2de66fd166f3ddb546eb3dfa90f037ed1787c9a57479fd2993bb52aee52d2b8aca2bc3caff1692f6af57d1720a447725fae0c8cced44657ac5dd8af_1280.jpg" 
                alt="Beautiful quartz crystal formations" 
                className="rounded-2xl shadow-2xl w-full"
                data-testid="about-image"
              />
            </div>
            
            <div className="reveal-up space-y-6" data-testid="about-features">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-primary-foreground text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry Excellence</h3>
                  <p className="text-muted-foreground">Over two decades of mining expertise with cutting-edge extraction technologies.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="text-primary-foreground text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">National Coverage</h3>
                  <p className="text-muted-foreground">Strategic partnerships with mine owners across all major quartz-producing regions in India.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-primary-foreground text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                  <p className="text-muted-foreground">ISO certified processes ensuring the highest grade quartz for industrial applications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
