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
        {/* Hero Section with Background Pattern */}
        <section className="py-24 bg-gradient-to-b from-secondary/10 via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
                Professional Motorcycle Services
              </h1>
              <p className="text-muted-foreground text-lg mb-8 animate-fade-in">
                Expert maintenance and repair services to keep your motorcycle running at its best
              </p>
              <Link to="/find-workshop">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 animate-fade-in">
                  Find a Workshop Near You
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Services Section */}
        <PopularServices />

        {/* Additional Services with Enhanced UI */}
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
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 group border-gray-100 animate-fade-in"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 rounded-xl bg-secondary/10 mb-6 group-hover:bg-secondary/20 transition-colors">
                        <service.icon className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <p className="text-2xl font-bold text-secondary mb-6">{service.price}</p>
                      <Link to="/find-workshop" className="w-full">
                        <Button 
                          variant="outline" 
                          className="w-full hover:bg-secondary hover:text-white transition-colors"
                        >
                          Book Now
                        </Button>
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