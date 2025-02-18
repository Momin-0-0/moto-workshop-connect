
import { Star, MapPin, Phone, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface WorkshopCardProps {
  workshop: {
    id: string;
    name: string;
    distance: string;
    rating: number;
    specialties: string[];
    phone: string;
    hours: string[];
    address: string;
  };
  onSelect: (workshop: any) => void;
}

export const WorkshopCard = ({ workshop, onSelect }: WorkshopCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold line-clamp-1 hover:text-secondary transition-colors">
              {workshop.name}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{workshop.distance}</span>
            </div>
          </div>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 font-medium">{workshop.rating}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {workshop.specialties.map((specialty, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-secondary/10 hover:bg-secondary/20 text-secondary"
            >
              {specialty}
            </Badge>
          ))}
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            {workshop.phone}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {workshop.hours[0]}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {workshop.address}
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <Button
            onClick={() => navigate(`/booking/${workshop.id}`)}
            className="bg-secondary hover:bg-secondary/90"
          >
            Book Appointment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
