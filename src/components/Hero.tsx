import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center text-white space-y-6">
          <h1 className="text-5xl font-bold mb-4">Find Expert Motorcycle Service Near You</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book trusted mechanics, track repairs, and get back on the road faster
          </p>
          <div className="max-w-xl mx-auto flex gap-2 bg-white p-2 rounded-lg">
            <div className="flex-1 flex gap-2 items-center bg-muted rounded px-3">
              <MapPin className="text-muted-foreground" />
              <Input
                className="border-0 bg-transparent focus-visible:ring-0"
                placeholder="Enter your location"
              />
            </div>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Search className="mr-2 h-4 w-4" />
              Find Workshops
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};