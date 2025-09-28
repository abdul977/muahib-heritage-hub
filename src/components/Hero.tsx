import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-african-cuisine.jpg";

const Hero = () => {
  const scrollToEvents = () => {
    const element = document.querySelector("#events");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Beautiful African cuisine showcasing cultural heritage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-brown/80 via-deep-green/70 to-terracotta/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Muahib Food
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-4 font-medium">
            Discovering African Culinary Heritage
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Celebrating food, culture, and creativity in the heart of Abuja. 
            Join us in exploring the rich traditions and flavors of African cuisine.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToEvents}
              className="group"
            >
              Explore Events
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="vendor" size="lg" onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              Become a Vendor
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>Next Event: March 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Abuja, Nigeria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-1 h-12 bg-primary-foreground/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;