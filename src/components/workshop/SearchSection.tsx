
import { Search, MapPin, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

interface SearchSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const SearchSection = ({ searchQuery, onSearchChange }: SearchSectionProps) => {
  const handleLocationAccess = () => {
    if (navigator.geolocation) {
      toast({
        title: "Accessing location...",
        description: "Please wait while we find workshops near you",
      });
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          toast({
            title: "Location found",
            description: "Showing workshops in your area",
          });
        },
        () => {
          toast({
            title: "Location access denied",
            description: "Please enable location access to find nearby workshops",
            variant: "destructive",
          });
        }
      );
    }
  };

  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
      <Input
        placeholder="Search workshops, services, or locations..."
        className="pl-12 h-14 text-lg border-secondary/20 hover:border-secondary/40 transition-colors"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <Button 
        onClick={handleLocationAccess}
        className="mt-4 w-full sm:w-auto flex items-center gap-2 bg-secondary hover:bg-secondary/90 h-14 px-6 text-white font-medium transition-all duration-300 group"
      >
        <MapPin className="h-5 w-5" />
        Near Me
        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};
