
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopularServices } from "@/components/PopularServices";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, Shield, Settings, Wrench, Star, 
  ArrowRight, Tool, Gauge, Battery, Zap 
} from "lucide-react";
import { Link } from "react-router-dom";

const additionalServices = [
  {
    title: "Advanced Diagnostics",
    description: "Complete electronic and mechanical diagnostics with detailed reports",
    icon: Gauge,
    price: "From $60",
    rating: 4.8,
    timeEstimate: "45-60 mins",
    features: ["Electronic System Check", "Performance Analysis", "Detailed Report"]
  },
  {
    title: "Brake Service",
    description: "Professional brake pad replacement and system maintenance",
    icon: Shield,
    price: "From $90",
    rating: 4.9,
    timeEstimate: "60-90 mins",
    features: ["Brake Pad Replacement", "Rotor Inspection", "System Testing"]
  },
  {
    title: "Chain & Sprocket",
    description: "Expert chain adjustment, lubrication, or replacement service",
    icon: Tool,
    price: "From $70",
    rating: 4.7,
    timeEstimate: "30-45 mins",
    features: ["Chain Tension Check", "Sprocket Inspection", "Lubrication Service"]
  },
  {
    title: "Performance Tuning",
    description: "Advanced engine tuning and performance optimization",
    icon: Zap,
    price: "From $200",
    rating: 4.9,
    timeEstimate: "120-180 mins",
    features: ["Power Optimization", "Fuel Efficiency", "Custom Mapping"]
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section with Enhanced Animation */}
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/find-workshop">
                  <Button 
                    size="lg" 
                    className="bg-secondary hover:bg-secondary/90 transition-all duration-300 group w-full sm:w-auto"
                  >
                    Find a Workshop
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/shop">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full sm:w-auto hover:bg-secondary/10"
                  >
                    Browse Parts Shop
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services Section */}
        <PopularServices />

        {/* Enhanced Additional Services Section */}
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
                  className="group hover:shadow-lg transition-all duration-300 border-gray-100 animate-fade-in"
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
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Clock className="h-4 w-4" />
                        <span>{service.timeEstimate}</span>
                      </div>
                      <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Wrench className="h-4 w-4 text-secondary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
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

        {/* Call to Action Section */}
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
              <p className="text-muted-foreground">
                Find the perfect workshop for your motorcycle service needs
              </p>
              <Link to="/find-workshop">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  Find a Workshop Near You
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
