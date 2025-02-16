
import { Clock, Star, MapPin, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterSectionProps {
  selectedServiceType: string;
  setSelectedServiceType: (value: string) => void;
  selectedPriceRange: string;
  setSelectedPriceRange: (value: string) => void;
  selectedRating: string;
  setSelectedRating: (value: string) => void;
  selectedDistance: string;
  setSelectedDistance: (value: string) => void;
  activeFilters: string[];
  toggleFilter: (filter: string) => void;
}

export const FilterSection = ({
  selectedServiceType,
  setSelectedServiceType,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedRating,
  setSelectedRating,
  selectedDistance,
  setSelectedDistance,
  activeFilters,
  toggleFilter,
}: FilterSectionProps) => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};

// Quick Filter Badge Component
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
      px-4 py-2 cursor-pointer transition-all duration-300 hover:scale-105
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
