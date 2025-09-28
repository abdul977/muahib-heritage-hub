import { Heart, Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-earth-brown text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-golden-sand to-warm-beige bg-clip-text text-transparent">
                Muahib Food
              </h3>
              <p className="text-primary-foreground/80 mt-2 text-lg">
                Discovering African Culinary Heritage
              </p>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-md">
              Celebrating the rich traditions, flavors, and cultural stories of African 
              cuisine through unforgettable events and community experiences in Abuja.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-terracotta fill-terracotta" />
              <span>in Abuja, Nigeria</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Events", href: "#events" },
                { name: "Vendors", href: "#vendors" },
                { name: "Gallery", href: "#gallery" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-primary-foreground/70 hover:text-golden-sand transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">
              Connect With Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-golden-sand" />
                <a 
                  href="mailto:hello@muahibfood.com" 
                  className="text-primary-foreground/70 hover:text-golden-sand transition-colors duration-300"
                >
                  hello@muahibfood.com
                </a>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-golden-sand/20 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5 text-primary-foreground/80" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-golden-sand/20 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5 text-primary-foreground/80" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-golden-sand/20 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-5 w-5 text-primary-foreground/80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Muahib Food. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-golden-sand transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-golden-sand transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;