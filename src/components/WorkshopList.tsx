
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MapPin, Phone, Clock, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

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
  imageUrl?: string;
  distance?: string;
}

// Sample data with more realistic workshop information
const sampleWorkshops: Workshop[] = [
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
    imageUrl: "/workshop1.jpg",
    distance: "2.3 km away"
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
    imageUrl: "/workshop2.jpg",
    distance: "3.1 km away"
  },
  {
    id: 3,
    name: "Quick Fix Motorcycles",
    rating: 4.7,
    address: "789 Broadway, New York, NY",
    phone: "+1 234-567-8902",
    specialties: ["Emergency Repairs", "Basic Maintenance", "Electrical Systems"],
    priceRange: [40, 400],
    availability: ["Mon-Sun: 8AM-8PM"],
    certifications: ["Kawasaki Certified"],
    latitude: 40.7549,
    longitude: -73.9840,
    imageUrl: "/workshop3.jpg",
    distance: "1.5 km away"
  }
];

interface WorkshopListProps {
  onWorkshopSelect?: (workshop: Workshop) => void;
}

export const WorkshopList = ({ onWorkshopSelect }: WorkshopListProps) => {
  const navigate = useNavigate();
  const [filteredWorkshops, setFilteredWorkshops] = useState(sampleWorkshops);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");

  return (
    <div className="space-y-4">
      {filteredWorkshops.map((workshop) => (
        <Card 
          key={workshop.id} 
          className="hover:shadow-lg transition-all duration-300 cursor-pointer group animate-fade-in"
          onClick={() => onWorkshopSelect?.(workshop)}
        >
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Workshop Info */}
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-secondary transition-colors">
                      {workshop.name}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{workshop.distance}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-500 bg-yellow-50 px-2 py-1 rounded">
                    <Star className="fill-current h-4 w-4" />
                    <span className="ml-1 font-medium">{workshop.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {workshop.specialties.map((specialty) => (
                    <Badge
                      key={specialty}
                      variant="outline"
                      className="bg-secondary/5 hover:bg-secondary/10"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {workshop.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {workshop.availability[0]}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {workshop.certifications.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <Award className="h-4 w-4 mr-1 text-secondary" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col justify-between gap-4 min-w-[200px]">
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Starting from</div>
                  <div className="text-2xl font-bold text-secondary">
                    ${workshop.priceRange[0]}
                  </div>
                </div>
                <Button
                  className="w-full group/button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/booking/${workshop.id}`);
                  }}
                >
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {filteredWorkshops.length === 0 && (
        <div className="text-center py-12 bg-secondary/5 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">No Workshops Found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters or search criteria
          </p>
        </div>
      )}
    </div>
  );
};
