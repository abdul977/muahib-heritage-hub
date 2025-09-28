import { Heart, Users, Utensils } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-section bg-gradient-warm">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Muahib Food is more than just a culinary event – we're a cultural movement 
            celebrating the rich heritage, traditions, and creativity of African cuisine 
            in the vibrant city of Abuja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-soft">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Cultural Heritage
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We showcase the deep-rooted culinary traditions that have been 
                  passed down through generations, celebrating the stories and 
                  cultural significance behind each dish.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shadow-soft">
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Community Connection
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bringing together local chefs, food vendors, and culinary 
                  enthusiasts to create a vibrant community centered around 
                  authentic African flavors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-terracotta rounded-lg flex items-center justify-center shadow-soft">
                <Utensils className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Culinary Innovation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Supporting creative chefs who blend traditional techniques 
                  with modern approaches, pushing the boundaries of African 
                  cuisine while respecting its roots.
                </p>
              </div>
            </div>
          </div>

          {/* Image Placeholder - we'll add this later */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-cultural rounded-2xl shadow-cultural flex items-center justify-center">
              <div className="text-center text-primary-foreground p-8">
                <Utensils className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">
                  Celebrating African<br />
                  Culinary Traditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;