import { Star, Award, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { vendors } from "@/data/vendors";

const Vendors = () => {
  const navigate = useNavigate();

  return (
    <section id="vendors" className="py-section bg-cream">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold text-foreground mb-6">
            Our Vendors & Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the talented chefs, food vendors, and culinary artists who bring 
            authentic African flavors and traditions to life at our events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {vendors.map((vendor) => (
            <Card 
              key={vendor.id} 
              className={`${
                vendor.featured 
                  ? 'border-primary shadow-cultural bg-gradient-warm' 
                  : 'border-border shadow-soft bg-card'
              } hover:shadow-warm transition-all duration-300 hover:-translate-y-1`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {vendor.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-2">
                      {vendor.specialty}
                    </p>
                  </div>
                  {vendor.featured && (
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {vendor.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-terracotta text-terracotta" />
                    <span className="text-sm font-medium text-foreground">{vendor.rating}</span>
                    <span className="text-sm text-muted-foreground ml-1">Rating</span>
                  </div>
                  <Button variant="vendor" size="sm" onClick={() => navigate(`/vendors/${vendor.id}`)}>
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action for Vendors */}
        <div className="bg-gradient-cultural rounded-2xl p-8 md:p-12 text-center shadow-cultural">
          <div className="max-w-2xl mx-auto">
            <Utensils className="h-16 w-16 text-primary-foreground mx-auto mb-6 opacity-90" />
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Join Our Vendor Community
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
              Are you a chef or food vendor passionate about African cuisine? 
              Join our community and showcase your culinary creativity at our events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="vendor" size="lg" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Apply as Vendor
              </Button>
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Partnership Opportunities
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vendors;