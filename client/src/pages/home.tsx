import { useState, useEffect } from "react";
import LoadingScreen from "@/components/loading-screen";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import MinesSection from "@/components/mines-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Start door opening after logo display
    const doorTimer = setTimeout(() => {
      const doorContainer = document.getElementById('doorContainer');
      if (doorContainer) {
        doorContainer.classList.add('open');
      }
    }, 2000);

    // Hide loading screen after door animation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(doorTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  useEffect(() => {
    // Scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-up').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <div className="overflow-x-hidden">
      {isLoading && <LoadingScreen />}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MinesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
