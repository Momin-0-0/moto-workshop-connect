
export interface Workshop {
  id: string;
  created_at: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  owner_id: string;
  latitude: number;
  longitude: number;
  rating: number;
  specialties: string[];
  price_range: {
    min: number;
    max: number;
  };
  availability: {
    days: string[];
    hours: {
      open: string;
      close: string;
    };
  };
  certifications: string[];
  distance?: string;
  hours?: string[];
}
