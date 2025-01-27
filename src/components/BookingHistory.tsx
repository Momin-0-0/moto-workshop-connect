import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const bookings = [
  {
    id: 1,
    service: "Oil Change",
    workshop: "Pro Moto Service",
    date: "2024-03-15",
    time: "10:00 AM",
    status: "completed",
  },
  {
    id: 2,
    service: "Tire Service",
    workshop: "Elite Motorcycle Workshop",
    date: "2024-03-20",
    time: "2:30 PM",
    status: "upcoming",
  },
];

export const BookingHistory = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Booking History</h2>
      {bookings.map((booking) => (
        <Card key={booking.id}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{booking.service}</span>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  booking.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {booking.status}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                {booking.workshop}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                {booking.date}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                {booking.time}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};