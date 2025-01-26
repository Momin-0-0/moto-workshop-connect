import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Oil Change",
    price: "From $50",
    description: "Complete oil and filter change service",
    time: "45 mins",
  },
  {
    title: "Tire Service",
    price: "From $80",
    description: "Tire replacement and balancing",
    time: "60 mins",
  },
  {
    title: "Full Service",
    price: "From $150",
    description: "Comprehensive motorcycle maintenance",
    time: "120 mins",
  },
];

export const PopularServices = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-secondary">{service.price}</p>
                  <p className="text-muted-foreground">{service.description}</p>
                  <p className="text-sm">Estimated time: {service.time}</p>
                  <Button className="w-full">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};