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
}

export interface Booking {
  id: string;
  created_at: string;
  user_id: string;
  workshop_id: string;
  service_type: string;
  booking_date: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  total_cost: number;
}

export interface SparePart {
  id: string;
  created_at: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  workshop_id: string;
  image_url?: string;
}

export interface Profile {
  id: string;
  created_at: string;
  user_id: string;
  full_name: string;
  avatar_url?: string;
  phone?: string;
  role: 'customer' | 'workshop_owner' | 'admin';
}