import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MapPin, Phone, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Extended workshop data type
interface Workshop {
  id: number;
  name: string;
  rating: number;
  address: string;
  phone: string;
  specialties: string[];
  priceRange: [number, number];
  availability: string[];
  certifications: string[];
  latitude: number;
  longitude: number;
}

// Sample data - in a real app, this would come from your database
const workshops: Workshop[] = [
  {
    id: 1,
    name: "Pro Moto Service",
    rating: 4.8,
    address: "123 Main St, New York, NY",
    phone: "+1 234-567-8900",
    specialties: ["General Service", "Engine Repair", "Tire Service"],
    priceRange: [50, 500],
    availability: ["Mon-Fri: 9AM-6PM", "Sat: 10AM-4PM"],
    certifications: ["Honda Certified", "Yamaha Expert"],
    latitude: 40.7128,
    longitude: -74.0060,
  },
  {
    id: 2,
    name: "Elite Motorcycle Workshop",
    rating: 4.9,
    address: "456 Park Ave, New York, NY",
    phone: "+1 234-567-8901",
    specialties: ["Custom Builds", "Performance Tuning", "Diagnostics"],
    priceRange: [100, 1000],
    availability: ["Mon-Sat: 8AM-7PM"],
    certifications: ["BMW Certified", "Ducati Specialist"],
    latitude: 40.7589,
    longitude: -73.9851,
  },
];

interface WorkshopListProps {
  onWorkshopSelect?: (workshop: Workshop) => void;
}

export const WorkshopList = ({ onWorkshopSelect }: WorkshopListProps) => {
  const navigate = useNavigate();
  const [priceFilter, setPriceFilter] = useState<[number, number]>([0, 1000]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [serviceFilter, setServiceFilter] = useState<string>("");

  // Filter workshops based on criteria
  const filteredWorkshops = workshops.filter((workshop) => {
    const meetsPrice = workshop.priceRange[0] >= priceFilter[0] && workshop.priceRange[1] <= priceFilter[1];
    const meetsRating = workshop.rating >= ratingFilter;
    const meetsService = serviceFilter === "" || workshop.specialties.some(s => 
      s.toLowerCase().includes(serviceFilter.toLowerCase())
    );
    return meetsPrice && meetsRating && meetsService;
  });

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
        <h3 className="font-semibold text-lg mb-4">Filters</h3>
        
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">Price Range</label>
          <Slider
            defaultValue={[0, 1000]}
            max={1000}
            step={50}
            onValueChange={(value) => setPriceFilter(value as [number, number])}
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceFilter[0]}</span>
            <span>${priceFilter[1]}</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">Minimum Rating</label>
          <Slider
            defaultValue={[0]}
            max={5}
            step={0.5}
            onValueChange={(value) => setRatingFilter(value[0])}
          />
        </div>

        <input
          type="text"
          placeholder="Search by service..."
          className="w-full px-3 py-2 border rounded-md"
          onChange={(e) => setServiceFilter(e.target.value)}
        />
      </div>

      {/* Workshop Cards */}
      <div className="space-y-4">
        {filteredWorkshops.map((workshop) => (
          <Card 
            key={workshop.id} 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onWorkshopSelect?.(workshop)}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{workshop.name}</span>
                <div className="flex items-center text-yellow-500">
                  <Star className="fill-current h-5 w-5" />
                  <span className="ml-1">{workshop.rating}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {workshop.address}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  {workshop.phone}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  {workshop.availability[0]}
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {workshop.specialties.map((specialty) => (
                    <Badge
                      key={specialty}
                      variant="secondary"
                      className="text-sm"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {workshop.certifications.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <Award className="h-3 w-3 mr-1" />
                      {cert}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  Price Range: ${workshop.priceRange[0]} - ${workshop.priceRange[1]}
                </div>
                <Button
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/booking/${workshop.id}`);
                  }}
                >
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};