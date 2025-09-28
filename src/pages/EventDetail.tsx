import { useParams, useNavigate } from "react-router-dom";
import { Calendar, Clock, MapPin, Users, ArrowLeft, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { events } from "@/data/events";

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === Number(id));

  const goBack = () => navigate("/", { replace: false });

  const handleBuyTickets = () => {
    const text = `Hello Muahib Food!\nI would like to buy tickets for: ${event?.title}\nDate: ${event?.date}\nLocation: ${event?.location}`;
    const phone = "2349025794407"; // WhatsApp format
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  if (!event) {
    return (
      <main className="min-h-screen pt-24 px-4">
        <div className="max-w-container mx-auto">
          <Button variant="outline" size="sm" onClick={goBack}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <div className="mt-8 text-center">
            <h1 className="text-2xl font-semibold">Event not found</h1>
            <p className="text-muted-foreground mt-2">The event you're looking for doesn't exist.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 px-4">
      <div className="max-w-container mx-auto">
        <Button variant="outline" size="sm" onClick={goBack}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 shadow-cultural">
            <CardHeader>
              <CardTitle className="text-3xl">{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">{event.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" /> {event.date}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" /> {event.time}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" /> {event.location}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-5 w-5 text-primary" /> {event.capacity}
                </div>
              </div>
            </CardContent>
          </Card>

          <aside>
            <div className="bg-gradient-cultural rounded-2xl p-6 shadow-cultural">
              <h3 className="text-2xl font-semibold text-primary-foreground mb-2">Get Tickets</h3>
              <p className="text-primary-foreground/90 mb-6">Secure your spot at this event now.</p>
              <Button variant="vendor" size="lg" className="w-full" onClick={handleBuyTickets}>
                <Ticket className="mr-2 h-5 w-5" /> Buy via WhatsApp
              </Button>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
};

export default EventDetail;
