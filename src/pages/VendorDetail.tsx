import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Award, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { vendors } from "@/data/vendors";

const VendorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const vendor = vendors.find((v) => v.id === Number(id));

  const goBack = () => navigate("/", { replace: false });

  const handleContactVendor = () => {
    const text = `Hello Muahib Food!\nI would like to connect with vendor: ${vendor?.name}\nSpecialty: ${vendor?.specialty}`;
    const phone = "2349025794407";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  if (!vendor) {
    return (
      <main className="min-h-screen pt-24 px-4">
        <div className="max-w-container mx-auto">
          <Button variant="outline" size="sm" onClick={goBack}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <div className="mt-8 text-center">
            <h1 className="text-2xl font-semibold">Vendor not found</h1>
            <p className="text-muted-foreground mt-2">The vendor you're looking for doesn't exist.</p>
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
              <CardTitle className="text-3xl">{vendor.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-primary font-medium">{vendor.specialty}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{vendor.description}</p>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-terracotta text-terracotta" />
                <span className="font-medium">{vendor.rating}</span>
                <span className="text-muted-foreground">/ 5.0</span>
                {vendor.featured && (
                  <span className="ml-4 inline-flex items-center px-2 py-1 rounded-full bg-terracotta text-primary-foreground text-xs font-medium">
                    <Award className="h-3 w-3 mr-1" /> Featured
                  </span>
                )}
              </div>
            </CardContent>
          </Card>

          <aside>
            <div className="bg-gradient-cultural rounded-2xl p-6 shadow-cultural">
              <h3 className="text-2xl font-semibold text-primary-foreground mb-2">Work With This Vendor</h3>
              <p className="text-primary-foreground/90 mb-6">Reach out to plan a collaboration or booking.</p>
              <Button variant="vendor" size="lg" className="w-full" onClick={handleContactVendor}>
                <MessageCircle className="mr-2 h-5 w-5" /> Contact via WhatsApp
              </Button>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
};

export default VendorDetail;
