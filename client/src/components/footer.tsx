import { Mountain } from "lucide-react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from '../assets/l2.png'
export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary py-12" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div data-testid="footer-brand">
            <div className="flex items-center space-x-3 mb-4">
            
              <img
                src={logo}
                alt="BlueHawk Group Logo"
                className="w-60 h-15"
              />
            </div>
            <p className="text-muted-foreground">India's largest quartz supplier with access to premium mines nationwide.</p>
          </div>
          
          <div data-testid="footer-links">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="footer-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="footer-about"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('mines')}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="footer-mines"
              >
                Our Mines
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="footer-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div data-testid="footer-services">
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <div className="text-muted-foreground">Quartz Mining</div>
              <div className="text-muted-foreground">Processing & Refining</div>
              <div className="text-muted-foreground">Supply Chain Management</div>
              <div className="text-muted-foreground">Quality Assurance</div>
            </div>
          </div>
          
          <div data-testid="footer-social">
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                data-testid="social-linkedin"
              >
                <FaLinkedin className="text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                data-testid="social-twitter"
              >
                <FaTwitter className="text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                data-testid="social-instagram"
              >
                <FaInstagram className="text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center" data-testid="footer-copyright">
          <p className="text-muted-foreground">© 2024 BlueHawk Group. All rights reserved. | India's Premier Quartz Mining Solutions</p>
        </div>
      </div>
    </footer>
  );
}
