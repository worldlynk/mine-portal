import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from '../assets/l2.png'
export default function Navbar() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar?.classList.add('bg-background/95');
      } else {
        navbar?.classList.remove('bg-background/95');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-300"
      id="navbar"
      data-testid="navbar"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-3"
            data-testid="logo-section"
          >
            <img
              src={logo}
              alt="BlueHawk Group Logo"
              className="w-33 h-13"/* grow by height */
              data-testid="logo-image"
              />
            {/* <span className="text-xl font-bold text-foreground">
              BlueHawk Group
            </span> */}
          </div>

          <div
            className="hidden md:flex items-center space-x-8"
            data-testid="nav-links"
          >
            <button
              onClick={() => scrollToSection("home")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("mines")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-mines"
            >
              Our Mines
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>

          <Button
            className="btn-primary px-6 py-2 rounded-lg text-primary-foreground font-semibold"
            onClick={() => scrollToSection("contact")}
            data-testid="button-quote"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </nav>
  );
}
