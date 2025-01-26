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
          backgroundImage: "url('/lovable-uploads/3a7ad6dd-cbbc-46ad-b58e-e9fc2c2177b5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Darker overlay */}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-left text-white space-y-8 max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight">
            Find the Best <span className="text-accent">Motorcycle Workshop</span> Near You
          </h1>
          <p className="text-xl text-gray-200">
            Professional repairs, maintenance, and custom work for all motorcycle brands
          </p>
          
          <div className="flex gap-2 bg-white/10 backdrop-blur-md p-2 rounded-lg">
            <div className="flex-1 flex gap-2 items-center bg-white/10 rounded px-3">
              <MapPin className="text-gray-300" />
              <Input
                className="border-0 bg-transparent text-white placeholder:text-gray-300 focus-visible:ring-0"
                placeholder="Enter your location to find nearby workshops"
              />
            </div>
            <Button size="lg" className="bg-accent hover:bg-accent/90 min-w-[140px]">
              <Search className="mr-2 h-4 w-4" />
              Find Workshop
            </Button>
          </div>

          <div className="flex gap-12 pt-8">
            <div className="text-center">
              <div className="text-accent text-2xl font-bold">500+</div>
              <div className="text-gray-300 text-sm">Verified Workshops</div>
            </div>
            <div className="text-center">
              <div className="text-accent text-2xl font-bold">10k+</div>
              <div className="text-gray-300 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-accent text-2xl font-bold">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};