import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1740&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-secondary/90" /> {/* Gradient overlay */}
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-left text-white space-y-8 max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight">
            Find the Best <span className="text-accent">Motorcycle Workshop</span> Near You
          </h1>
          <p className="text-xl text-gray-100">
            Professional repairs, maintenance, and custom work for all motorcycle brands
          </p>
          
          <div className="flex gap-2 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-xl">
            <div className="flex-1 flex gap-2 items-center bg-white/5 rounded-md px-4">
              <MapPin className="text-gray-300" />
              <Input
                className="border-0 bg-transparent text-white placeholder:text-gray-300 focus-visible:ring-0"
                placeholder="Enter your location to find nearby workshops"
              />
            </div>
            <Button size="lg" className="bg-accent hover:bg-accent/90 min-w-[140px] shadow-lg">
              <Search className="mr-2 h-4 w-4" />
              Find Workshop
            </Button>
          </div>

          <div className="flex gap-12 pt-8">
            <div className="text-center bg-white/5 px-6 py-4 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-accent text-2xl font-bold">500+</div>
              <div className="text-gray-200 text-sm">Verified Workshops</div>
            </div>
            <div className="text-center bg-white/5 px-6 py-4 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-accent text-2xl font-bold">10k+</div>
              <div className="text-gray-200 text-sm">Happy Customers</div>
            </div>
            <div className="text-center bg-white/5 px-6 py-4 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-accent text-2xl font-bold">24/7</div>
              <div className="text-gray-200 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};