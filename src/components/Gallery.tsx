import { Camera, Heart, Users } from "lucide-react";

const Gallery = () => {
  // Placeholder gallery items with descriptions
  const galleryItems = [
    {
      id: 1,
      title: "Traditional Cooking Methods",
      category: "Culture",
      icon: Users,
      gradient: "from-terracotta to-deep-green",
    },
    {
      id: 2,
      title: "Vibrant Food Markets",
      category: "Markets",
      icon: Camera,
      gradient: "from-golden-sand to-terracotta",
    },
    {
      id: 3,
      title: "Chef Demonstrations",
      category: "Events",
      icon: Heart,
      gradient: "from-deep-green to-warm-beige",
    },
    {
      id: 4,
      title: "Cultural Celebrations",
      category: "Heritage",
      icon: Users,
      gradient: "from-terracotta to-golden-sand",
    },
    {
      id: 5,
      title: "Local Ingredients",
      category: "Nature",
      icon: Camera,
      gradient: "from-warm-beige to-deep-green",
    },
    {
      id: 6,
      title: "Community Gatherings",
      category: "People",
      icon: Heart,
      gradient: "from-deep-green to-terracotta",
    },
  ];

  return (
    <section id="gallery" className="py-section bg-background">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold text-foreground mb-6">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing the beauty of African culinary traditions, cultural moments, 
            and the vibrant community that makes our events special.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`
                  relative aspect-[4/3] rounded-xl overflow-hidden shadow-soft hover:shadow-cultural
                  transition-all duration-300 hover:-translate-y-1 cursor-pointer group
                  bg-gradient-to-br ${item.gradient}
                  ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
                  ${index === 1 ? 'lg:row-span-2' : ''}
                `}
              >
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/80 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-primary-foreground w-full">
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="h-6 w-6" />
                      <span className="text-sm font-medium opacity-90">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-golden-sand transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Camera className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Want to see more moments from our events?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors duration-300"
            >
              <Camera className="h-5 w-5" />
              View Full Gallery
            </a>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors duration-300"
            >
              Follow @muahibfood
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;