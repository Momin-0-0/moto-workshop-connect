import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopularServices } from "@/components/PopularServices";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Settings, Wrench, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const additionalServices = [
  {
    title: "Diagnostics",
    description: "Complete electronic and mechanical diagnostics with detailed reports",
    icon: Settings,
    price: "From $60",
    rating: 4.8,
    timeEstimate: "45-60 mins"
  },
  {
    title: "Brake Service",
    description: "Professional brake pad replacement and system maintenance",
    icon: Shield,
    price: "From $90",
    rating: 4.9,
    timeEstimate: "60-90 mins"
  },
  {
    title: "Chain & Sprocket",
    description: "Expert chain adjustment, lubrication, or replacement service",
    icon: Wrench,
    price: "From $70",
    rating: 4.7,
    timeEstimate: "30-45 mins"
  },
  {
    title: "Performance Tuning",
    description: "Advanced engine tuning and performance optimization",
    icon: Clock,
    price: "From $200",
    rating: 4.9,
    timeEstimate: "120-180 mins"
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section with Animated Background */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-b from-secondary/10 via-background to-background">
          <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto space-y-6 animate-fade-in">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Expert Motorcycle Services
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Professional maintenance and repair services by certified technicians
              </p>
              <Link to="/find-workshop">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 transition-all duration-300 group"
                >
                  Find a Workshop Near You
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Services Section with Enhanced UI */}
        <PopularServices />

        {/* Additional Services with Improved Cards */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Specialized Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Advanced diagnostic and maintenance solutions for your motorcycle
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
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex items-center gap-1 mb-4">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{service.rating}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Clock className="h-4 w-4" />
                        <span>{service.timeEstimate}</span>
                      </div>
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