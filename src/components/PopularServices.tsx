import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Settings, Wrench } from "lucide-react";

const services = [
  {
    title: "Oil Change",
    price: "From $50",
    description: "Complete oil and filter change service",
    time: "45 mins",
    icon: Settings,
  },
  {
    title: "Tire Service",
    price: "From $80",
    description: "Tire replacement and balancing",
    time: "60 mins",
    icon: Wrench,
  },
  {
    title: "Full Service",
    price: "From $150",
    description: "Comprehensive motorcycle maintenance",
    time: "120 mins",
    icon: Clock,
  },
];

export const PopularServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Popular Services</h2>
          <p className="text-muted-foreground text-lg">Choose from our most requested motorcycle services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-100">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-3xl font-bold text-secondary">{service.price}</p>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Estimated time: {service.time}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 transition-opacity">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};