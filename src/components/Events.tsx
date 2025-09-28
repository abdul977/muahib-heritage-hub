import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { events } from "@/data/events";

const Events = () => {
  const navigate = useNavigate();

  return (
    <section id="events" className="py-section bg-background">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold text-foreground mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for unforgettable culinary experiences that celebrate 
            African food culture, tradition, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className={`${
                event.featured 
                  ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 border-primary shadow-cultural' 
                  : 'border-border shadow-soft'
              } hover:shadow-warm transition-all duration-300 hover:-translate-y-1`}
            >
              <CardHeader className="pb-4">
                {event.featured && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-hero text-primary-foreground text-sm font-medium mb-3 w-fit">
                    Featured Event
                  </div>
                )}
                <CardTitle className={`${event.featured ? 'text-2xl' : 'text-xl'} text-foreground`}>
                  {event.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    {event.capacity}
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    variant={event.featured ? "hero" : "cultural"} 
                    size="sm" 
                    className="w-full"
                    onClick={() => navigate(`/events/${event.id}`)}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;