import { Bike, Calendar, MapPin, Wrench } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Find Nearby",
    description: "Locate trusted workshops in your area",
  },
  {
    icon: Wrench,
    title: "Choose Service",
    description: "Select from a range of repair services",
  },
  {
    icon: Calendar,
    title: "Book Instantly",
    description: "Schedule a convenient time slot",
  },
  {
    icon: Bike,
    title: "Get Riding",
    description: "Get your bike back in perfect condition",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};