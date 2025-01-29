import { Navbar } from "@/components/Navbar";
import { WorkshopMap } from "@/components/WorkshopMap";
import { WorkshopList } from "@/components/WorkshopList";
import { Search, MapPin, LayoutGrid, Map } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import type { Workshop } from "@/types/database.types";

const FindWorkshop = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [showMap, setShowMap] = useState(true);
  const { toast } = useToast();

  const handleLocationAccess = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          toast({
            title: "Location accessed",
            description: "Showing workshops near you",
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

  // Transform Workshop type for list component
  const transformWorkshopForList = (workshop: Workshop) => ({
    id: parseInt(workshop.id),
    name: workshop.name,
    rating: workshop.rating,
    address: workshop.address,
    phone: workshop.phone,
    specialties: workshop.specialties,
    priceRange: [workshop.price_range.min, workshop.price_range.max],
    availability: [`${workshop.availability.days.join(", ")}: ${workshop.availability.hours.open}-${workshop.availability.hours.close}`],
    certifications: workshop.certifications,
    latitude: workshop.latitude,
    longitude: workshop.longitude,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">Find a Workshop</h1>
          <p className="text-muted-foreground">
            Discover trusted motorcycle workshops in your area. Compare ratings, services, and book appointments instantly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by workshop name or service..."
              className="pl-10"
            />
          </div>
          <Button 
            onClick={handleLocationAccess}
            className="flex items-center gap-2"
          >
            <MapPin className="h-4 w-4" />
            Near Me
          </Button>
          <Button
            variant="outline"
            onClick={() => setShowMap(!showMap)}
            className="flex items-center gap-2"
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
            <div className="lg:order-2 rounded-lg overflow-hidden shadow-lg">
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
            <div className="bg-card rounded-lg p-4 shadow-sm border">
              <h2 className="font-semibold mb-2">Quick Filters</h2>
              <div className="flex flex-wrap gap-2">
                {["Open Now", "Highly Rated", "Special Offers", "Emergency Service"].map((filter) => (
                  <Button key={filter} variant="outline" size="sm">
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
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
      </main>
    </div>
  );
};

export default FindWorkshop;