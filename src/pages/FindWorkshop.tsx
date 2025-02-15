
import { Navbar } from "@/components/Navbar";
import { WorkshopMap } from "@/components/WorkshopMap";
import { WorkshopList } from "@/components/WorkshopList";
import { Search, MapPin, LayoutGrid, Map, Clock, Star, Wrench, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import type { Workshop } from "@/types/database.types";
import { Badge } from "@/components/ui/badge";

const FindWorkshop = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [showMap, setShowMap] = useState(true);
  const { toast } = useToast();

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

  // Transform Workshop type for map component
  const transformWorkshopForMap = (workshop: Workshop) => ({
    id: parseInt(workshop.id),
    name: workshop.name,
    latitude: workshop.latitude,
    longitude: workshop.longitude,
    rating: workshop.rating
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Find a Workshop
          </h1>
          <p className="text-muted-foreground">
            Discover trusted motorcycle workshops in your area. Compare ratings, services, and book appointments instantly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by workshop name or service..."
              className="pl-10 h-12"
            />
          </div>
          <Button 
            onClick={handleLocationAccess}
            className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 h-12"
          >
            <MapPin className="h-4 w-4" />
            Near Me
          </Button>
          <Button
            variant="outline"
            onClick={() => setShowMap(!showMap)}
            className="flex items-center gap-2 h-12 hover:bg-secondary/10"
          >
            {showMap ? (
              <>
                <LayoutGrid className="h-4 w-4" />
                List View
              </>
            ) : (
              <>
                <Map className="h-4 w-4" />
                Map View
              </>
            )}
          </Button>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {showMap && (
            <div className="lg:order-2 rounded-xl overflow-hidden shadow-lg border animate-fade-in">
              <WorkshopMap
                workshops={selectedWorkshop ? [transformWorkshopForMap(selectedWorkshop)] : []}
                selectedWorkshop={selectedWorkshop ? transformWorkshopForMap(selectedWorkshop) : null}
                onWorkshopSelect={(mapWorkshop) => {
                  if (selectedWorkshop) {
                    setSelectedWorkshop(selectedWorkshop);
                  }
                }}
              />
            </div>
          )}
          <div className={`${showMap ? "lg:order-1" : ""} space-y-6`}>
            <div className="bg-card rounded-xl p-6 shadow-sm border space-y-4 animate-fade-in">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <Wrench className="h-5 w-5 text-secondary" />
                Quick Filters
              </h2>
              <div className="flex flex-wrap gap-2">
                <QuickFilterBadge icon={Clock}>Open Now</QuickFilterBadge>
                <QuickFilterBadge icon={Star}>Highly Rated</QuickFilterBadge>
                <QuickFilterBadge icon={MapPin}>Within 5km</QuickFilterBadge>
                <QuickFilterBadge icon={AlertTriangle}>Emergency Service</QuickFilterBadge>
              </div>
            </div>
            <div className="animate-fade-in">
              <WorkshopList
                onWorkshopSelect={(workshop) => {
                  const dbWorkshop: Workshop = {
                    id: workshop.id.toString(),
                    created_at: new Date().toISOString(),
                    name: workshop.name,
                    description: "",
                    address: workshop.address,
                    phone: workshop.phone,
                    email: "",
                    owner_id: "",
                    latitude: workshop.latitude,
                    longitude: workshop.longitude,
                    rating: workshop.rating,
                    specialties: workshop.specialties,
                    price_range: {
                      min: workshop.priceRange[0],
                      max: workshop.priceRange[1]
                    },
                    availability: {
                      days: workshop.availability[0].split(":")[0].split(", "),
                      hours: {
                        open: workshop.availability[0].split(": ")[1].split("-")[0],
                        close: workshop.availability[0].split(": ")[1].split("-")[1]
                      }
                    },
                    certifications: workshop.certifications
                  };
                  setSelectedWorkshop(dbWorkshop);
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Quick Filter Badge Component
const QuickFilterBadge = ({ 
  children, 
  icon: Icon 
}: { 
  children: React.ReactNode; 
  icon: React.ComponentType<any>;
}) => (
  <Badge 
    variant="secondary" 
    className="px-4 py-2 hover:bg-secondary/20 cursor-pointer transition-colors"
  >
    <Icon className="h-4 w-4 mr-2" />
    {children}
  </Badge>
);

export default FindWorkshop;
