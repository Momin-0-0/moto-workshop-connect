import { Navbar } from "@/components/Navbar";
import { WorkshopMap } from "@/components/WorkshopMap";
import { WorkshopList } from "@/components/WorkshopList";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import type { Workshop } from "@/types/database.types";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Import new components
import { HeroSection } from "@/components/workshop/HeroSection";
import { SearchSection } from "@/components/workshop/SearchSection";
import { FilterSection } from "@/components/workshop/FilterSection";
import { ViewToggle } from "@/components/workshop/ViewToggle";
import { ResultsSummary } from "@/components/workshop/ResultsSummary";
import { 
  Search, MapPin, LayoutGrid, Map, Clock, Star, 
  Wrench, AlertTriangle, Filter, SlidersHorizontal 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FindWorkshop = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [showMap, setShowMap] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedServiceType, setSelectedServiceType] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [selectedDistance, setSelectedDistance] = useState("all");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const filteredWorkshops = workshops.filter(workshop => {
    let matches = true;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      matches = matches && (
        workshop.name.toLowerCase().includes(query) ||
        workshop.description.toLowerCase().includes(query) ||
        workshop.address.toLowerCase().includes(query)
      );
    }

    if (selectedServiceType !== 'all') {
      matches = matches && workshop.specialties.some(
        specialty => specialty.toLowerCase().includes(selectedServiceType.toLowerCase())
      );
    }

    if (selectedRating !== 'all') {
      const minRating = parseFloat(selectedRating.replace('plus', ''));
      matches = matches && workshop.rating >= minRating;
    }

    if (selectedDistance !== 'all') {
      const maxDistance = parseInt(selectedDistance);
      matches = matches && true; // Placeholder for distance calculation
    }

    if (activeFilters.includes('open')) {
      matches = matches && true; // Placeholder for business hours check
    }

    if (activeFilters.includes('rated')) {
      matches = matches && workshop.rating >= 4.5;
    }

    return matches;
  });

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const transformWorkshopForMap = (workshop: Workshop) => ({
    id: parseInt(workshop.id),
    name: workshop.name,
    latitude: workshop.latitude,
    longitude: workshop.longitude,
    rating: workshop.rating
  });

  useEffect(() => {
    const loadWorkshops = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setWorkshops([
          {
            id: "1",
            created_at: new Date().toISOString(),
            name: "Pro Auto Workshop",
            description: "Professional auto repair and maintenance services",
            address: "123 Main St",
            phone: "+1 234-567-8900",
            email: "contact@proauto.com",
            owner_id: "owner1",
            latitude: 40.7128,
            longitude: -74.0060,
            rating: 4.8,
            specialties: ["General Service", "Engine Repair"],
            price_range: { min: 50, max: 500 },
            availability: {
              days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
              hours: { open: "09:00", close: "18:00" }
            },
            certifications: ["ASE Certified"]
          },
        ]);
      } catch (error) {
        toast({
          title: "Error loading workshops",
          description: "Please try again later",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadWorkshops();
  }, [toast]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <HeroSection />

        <Card className="border-secondary/20 shadow-lg transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-6 space-y-6">
            <SearchSection 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            <FilterSection 
              selectedServiceType={selectedServiceType}
              setSelectedServiceType={setSelectedServiceType}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
              selectedDistance={selectedDistance}
              setSelectedDistance={setSelectedDistance}
              activeFilters={activeFilters}
              toggleFilter={toggleFilter}
            />
          </CardContent>
        </Card>

        <ViewToggle 
          showMap={showMap}
          onViewChange={setShowMap}
        />

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary">
              <div className="sr-only">Loading...</div>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            {showMap && (
              <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-secondary/20 h-[500px] mb-6 transition-all duration-300 hover:shadow-2xl">
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

            <ResultsSummary 
              count={filteredWorkshops?.length || 0}
              selectedDistance={selectedDistance}
              onDistanceChange={setSelectedDistance}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <WorkshopList
                onWorkshopSelect={(workshop) => {
                  const dbWorkshop: Workshop = {
                    id: workshop.id.toString(),
                    created_at: new Date().toISOString(),
                    name: workshop.name,
                    description: "Professional auto services",
                    address: workshop.address,
                    phone: workshop.phone,
                    email: `contact@${workshop.name.toLowerCase().replace(/\s+/g, '')}.com`,
                    owner_id: `owner_${workshop.id}`,
                    latitude: workshop.latitude,
                    longitude: workshop.longitude,
                    rating: workshop.rating,
                    specialties: workshop.specialties,
                    price_range: {
                      min: workshop.priceRange[0],
                      max: workshop.priceRange[1]
                    },
                    availability: {
                      days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                      hours: {
                        open: "09:00",
                        close: "18:00"
                      }
                    },
                    certifications: workshop.certifications
                  };
                  setSelectedWorkshop(dbWorkshop);
                }}
              />
            </div>

            {filteredWorkshops.length > 0 && (
              <div className="flex justify-center mt-8">
                <Button 
                  variant="outline" 
                  className="w-full max-w-xs group hover:bg-secondary hover:text-white transition-all duration-300"
                  onClick={() => {
                    toast({
                      title: "Loading more workshops...",
                      description: "Fetching additional results for your area"
                    });
                  }}
                >
                  Load More Workshops
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default FindWorkshop;
