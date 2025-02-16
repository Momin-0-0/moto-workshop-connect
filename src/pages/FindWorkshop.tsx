import { Navbar } from "@/components/Navbar";
import { WorkshopMap } from "@/components/WorkshopMap";
import { WorkshopList } from "@/components/WorkshopList";
import { 
  Search, MapPin, LayoutGrid, Map, Clock, Star, 
  Wrench, AlertTriangle, Filter, ArrowRight, SlidersHorizontal 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import type { Workshop } from "@/types/database.types";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
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
  const { toast } = useToast();

  // Calculate filtered workshops based on search and filter criteria
  const filteredWorkshops = workshops.filter(workshop => {
    let matches = true;

    // Search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      matches = matches && (
        workshop.name.toLowerCase().includes(query) ||
        workshop.description.toLowerCase().includes(query) ||
        workshop.address.toLowerCase().includes(query)
      );
    }

    // Service type filter
    if (selectedServiceType !== 'all') {
      matches = matches && workshop.specialties.some(
        specialty => specialty.toLowerCase().includes(selectedServiceType.toLowerCase())
      );
    }

    // Rating filter
    if (selectedRating !== 'all') {
      const minRating = parseFloat(selectedRating.replace('plus', ''));
      matches = matches && workshop.rating >= minRating;
    }

    // Distance filter
    if (selectedDistance !== 'all') {
      const maxDistance = parseInt(selectedDistance);
      // Note: Actual distance calculation would go here
      // For now, we'll just use a placeholder check
      matches = matches && true; // Placeholder
    }

    // Active quick filters
    if (activeFilters.includes('open')) {
      // Check if workshop is currently open
      // This would need actual business hour comparison logic
      matches = matches && true; // Placeholder
    }

    if (activeFilters.includes('rated')) {
      matches = matches && workshop.rating >= 4.5;
    }

    return matches;
  });

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

  const transformWorkshopForMap = (workshop: Workshop) => ({
    id: parseInt(workshop.id),
    name: workshop.name,
    latitude: workshop.latitude,
    longitude: workshop.longitude,
    rating: workshop.rating
  });

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  useEffect(() => {
    // This would typically be an API call
    // For now, we'll set some sample data
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
      // Add more sample workshops as needed
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Find Your Perfect Workshop
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with expert mechanics and certified workshops in your area. 
            Compare services, read reviews, and book appointments instantly.
          </p>
        </div>

        {/* Search and Quick Actions */}
        <Card className="border-secondary/20 shadow-lg animate-fade-in">
          <CardContent className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search workshops, services, or locations..."
                  className="pl-12 h-14 text-lg border-secondary/20 hover:border-secondary/40 transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                onClick={handleLocationAccess}
                className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 h-14 px-6 text-white font-medium transition-all duration-300 group"
              >
                <MapPin className="h-5 w-5" />
                Near Me
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Advanced Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Select value={selectedServiceType} onValueChange={setSelectedServiceType}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Service Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="repair">Repair</SelectItem>
                  <SelectItem value="customization">Customization</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="budget">Budget Friendly</SelectItem>
                  <SelectItem value="mid">Mid Range</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedRating} onValueChange={setSelectedRating}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="4plus">4+ Stars</SelectItem>
                  <SelectItem value="4.5plus">4.5+ Stars</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedDistance} onValueChange={setSelectedDistance}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Distance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Distance</SelectItem>
                  <SelectItem value="5">Within 5 km</SelectItem>
                  <SelectItem value="10">Within 10 km</SelectItem>
                  <SelectItem value="20">Within 20 km</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2">
              <QuickFilterBadge 
                icon={Clock} 
                active={activeFilters.includes('open')}
                onClick={() => toggleFilter('open')}
              >
                Open Now
              </QuickFilterBadge>
              <QuickFilterBadge 
                icon={Star}
                active={activeFilters.includes('rated')}
                onClick={() => toggleFilter('rated')}
              >
                Highly Rated
              </QuickFilterBadge>
              <QuickFilterBadge 
                icon={MapPin}
                active={activeFilters.includes('nearby')}
                onClick={() => toggleFilter('nearby')}
              >
                Within 5km
              </QuickFilterBadge>
              <QuickFilterBadge 
                icon={AlertTriangle}
                active={activeFilters.includes('emergency')}
                onClick={() => toggleFilter('emergency')}
              >
                Emergency Service
              </QuickFilterBadge>
            </div>
          </CardContent>
        </Card>

        {/* View Toggle */}
        <div className="flex justify-center">
          <Tabs defaultValue={showMap ? "map" : "list"} className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger 
                value="map"
                onClick={() => setShowMap(true)}
                className="data-[state=active]:bg-secondary data-[state=active]:text-white"
              >
                <Map className="h-4 w-4 mr-2" />
                Map View
              </TabsTrigger>
              <TabsTrigger 
                value="list"
                onClick={() => setShowMap(false)}
                className="data-[state=active]:bg-secondary data-[state=active]:text-white"
              >
                <LayoutGrid className="h-4 w-4 mr-2" />
                List View
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 space-y-8">
          {showMap && (
            <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-secondary/20 animate-fade-in h-[500px] mb-6">
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

          {/* Results Summary */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-muted/30 p-4 rounded-lg">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Available Workshops</h2>
              <p className="text-muted-foreground">
                Showing {filteredWorkshops?.length || 0} workshops in your area
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Select value={selectedDistance} onValueChange={setSelectedDistance}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by distance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nearest">Nearest first</SelectItem>
                  <SelectItem value="farthest">Farthest first</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Workshop Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <WorkshopList
              onWorkshopSelect={(workshop) => {
                const dbWorkshop: Workshop = {
                  id: workshop.id.toString(),
                  created_at: new Date().toISOString(),
                  name: workshop.name,
                  description: workshop.description,
                  address: workshop.address,
                  phone: workshop.phone,
                  email: workshop.email,
                  owner_id: workshop.owner_id,
                  latitude: workshop.latitude,
                  longitude: workshop.longitude,
                  rating: workshop.rating,
                  specialties: workshop.specialties,
                  price_range: {
                    min: workshop.price_range.min,
                    max: workshop.price_range.max
                  },
                  availability: {
                    days: workshop.availability.days,
                    hours: {
                      open: workshop.availability.hours.open,
                      close: workshop.availability.hours.close
                    }
                  },
                  certifications: workshop.certifications
                };
                setSelectedWorkshop(dbWorkshop);
              }}
            />
          </div>

          {/* Pagination or Load More */}
          <div className="flex justify-center mt-8">
            <Button 
              variant="outline" 
              className="w-full max-w-xs"
              onClick={() => {
                toast({
                  title: "Loading more workshops...",
                  description: "Fetching additional results for your area"
                });
              }}
            >
              Load More Workshops
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

// Enhanced Quick Filter Badge Component
const QuickFilterBadge = ({ 
  children, 
  icon: Icon,
  active = false,
  onClick
}: { 
  children: React.ReactNode; 
  icon: React.ComponentType<any>;
  active?: boolean;
  onClick?: () => void;
}) => (
  <Badge 
    variant={active ? "secondary" : "outline"}
    className={`
      px-4 py-2 cursor-pointer transition-all duration-300
      ${active 
        ? 'bg-secondary text-white hover:bg-secondary/90' 
        : 'hover:bg-secondary/10'
      }
    `}
    onClick={onClick}
  >
    <Icon className={`h-4 w-4 mr-2 ${active ? 'text-white' : 'text-secondary'}`} />
    {children}
  </Badge>
);

export default FindWorkshop;
