import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1740&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-accent/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-left text-white space-y-8 max-w-2xl">
          <h1 className="text-6xl font-bold leading-tight">
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

          <div className="flex gap-6 pt-8">
            <div className="text-center bg-white/5 px-8 py-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-accent text-3xl font-bold mb-1">500+</div>
              <div className="text-gray-200">Verified Workshops</div>
            </div>
            <div className="text-center bg-white/5 px-8 py-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-accent text-3xl font-bold mb-1">10k+</div>
              <div className="text-gray-200">Happy Customers</div>
            </div>
            <div className="text-center bg-white/5 px-8 py-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-accent text-3xl font-bold mb-1">24/7</div>
              <div className="text-gray-200">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};