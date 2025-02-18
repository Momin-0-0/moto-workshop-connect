
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
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Star className="h-5 w-5 text-yellow-500" />
          <span>4.8/5 Average Rating</span>
        </div>
        <div className="h-4 w-px bg-muted-foreground/20" />
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="h-5 w-5 text-secondary" />
          <span>24/7 Support</span>
        </div>
        <div className="h-4 w-px bg-muted-foreground/20" />
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5 text-secondary" />
          <span>100+ Locations</span>
        </div>
      </div>
    </div>
  );
};
