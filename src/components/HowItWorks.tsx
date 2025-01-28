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
    <section className="py-24 bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Follow these simple steps to get your motorcycle serviced
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:translate-y-[-4px]">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};