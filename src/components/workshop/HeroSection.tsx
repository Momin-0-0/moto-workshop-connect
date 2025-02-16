
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
        Find Your Perfect Workshop
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Connect with expert mechanics and certified workshops in your area. 
        Compare services, read reviews, and book appointments instantly.
      </p>
    </div>
  );
};
