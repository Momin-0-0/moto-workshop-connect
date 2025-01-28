import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopularServices } from "@/components/PopularServices";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Settings, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const additionalServices = [
  {
    title: "Diagnostics",
    description: "Complete electronic and mechanical diagnostics",
    icon: Settings,
    price: "From $60",
  },
  {
    title: "Brake Service",
    description: "Brake pad replacement and system maintenance",
    icon: Shield,
    price: "From $90",
  },
  {
    title: "Chain & Sprocket",
    description: "Chain adjustment, lubrication, or replacement",
    icon: Wrench,
    price: "From $70",
  },
  {
    title: "Performance Tuning",
    description: "Engine tuning and performance optimization",
    icon: Clock,
    price: "From $200",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">Professional Motorcycle Services</h1>
              <p className="text-muted-foreground text-lg mb-8">
                Expert maintenance and repair services to keep your motorcycle running at its best
              </p>
              <Link to="/find-workshop">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  Find a Workshop Near You
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Services Section */}
        <PopularServices />

        {/* Additional Services */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Additional Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Comprehensive care for all your motorcycle needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 rounded-xl bg-secondary/10 mb-4">
                        <service.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <p className="text-2xl font-bold text-secondary mb-4">{service.price}</p>
                      <Link to="/find-workshop">
                        <Button variant="outline" className="w-full">Book Now</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;