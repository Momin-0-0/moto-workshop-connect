export interface Booking {
  id: string;
  user_id: string;
  workshop_id: string;
  services: string[];
  booking_date: string;
  booking_time: string;
  needs_pickup: boolean;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  total_amount: number;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface BookingService {
  id: string;
  name: string;
  price: number;
  description: string;
  duration: number; // in minutes
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface WorkshopAvailability {
  date: string;
  slots: TimeSlot[];
}