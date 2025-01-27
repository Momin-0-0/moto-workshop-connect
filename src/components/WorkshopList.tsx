import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const workshops = [
  {
    id: 1,
    name: "Pro Moto Service",
    rating: 4.8,
    address: "123 Main St, New York, NY",
    phone: "+1 234-567-8900",
    specialties: ["General Service", "Engine Repair", "Tire Service"],
  },
  {
    id: 2,
    name: "Elite Motorcycle Workshop",
    rating: 4.9,
    address: "456 Park Ave, New York, NY",
    phone: "+1 234-567-8901",
    specialties: ["Custom Builds", "Performance Tuning", "Diagnostics"],
  },
];

export const WorkshopList = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {workshops.map((workshop) => (
        <Card key={workshop.id} className="hover:shadow-lg transition-shadow">
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
              <div className="flex flex-wrap gap-2">
                {workshop.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              <Button
                className="w-full"
                onClick={() => navigate(`/booking/${workshop.id}`)}
              >
                Book Now
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};