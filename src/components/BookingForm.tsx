import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock, Truck } from "lucide-react";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

export const BookingForm = () => {
  const { workshopId } = useParams();
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [needsPickup, setNeedsPickup] = useState(false);

  const services = [
    { id: "oil-change", name: "Oil Change", price: 50 },
    { id: "tire-service", name: "Tire Service", price: 80 },
    { id: "full-service", name: "Full Service", price: 150 },
  ];

  const calculateTotal = () => {
    let total = selectedServices.reduce((sum, serviceId) => {
      const service = services.find((s) => s.id === serviceId);
      return sum + (service?.price || 0);
    }, 0);

    if (needsPickup) {
      total += 30; // Pickup/drop-off fee
    }

    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !selectedTime || selectedServices.length === 0) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Confirmed",
      description: "Your service has been scheduled successfully.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule Your Service</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Label>Select Services</Label>
            {services.map((service) => (
              <div key={service.id} className="flex items-center space-x-2">
                <Checkbox
                  id={service.id}
                  checked={selectedServices.includes(service.id)}
                  onCheckedChange={(checked) => {
                    setSelectedServices(
                      checked
                        ? [...selectedServices, service.id]
                        : selectedServices.filter((id) => id !== service.id)
                    );
                  }}
                />
                <Label htmlFor={service.id} className="flex-1">
                  {service.name}
                </Label>
                <span className="text-muted-foreground">${service.price}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <Label>Select Date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={(date) => date < new Date()}
            />
          </div>

          <div className="space-y-2">
            <Label>Select Time</Label>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  type="button"
                  variant={selectedTime === time ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setSelectedTime(time)}
                >
                  <Clock className="mr-2 h-4 w-4" />
                  {time}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="pickup"
              checked={needsPickup}
              onCheckedChange={(checked) => setNeedsPickup(checked as boolean)}
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="pickup" className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Home Pickup & Drop-off
              </Label>
              <p className="text-sm text-muted-foreground">
                Additional fee of $30
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Input
              id="notes"
              placeholder="Any specific requirements or concerns?"
            />
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total Estimated Cost:</span>
              <span className="text-xl font-bold">${calculateTotal()}</span>
            </div>
            <Button type="submit" className="w-full">
              Confirm Booking
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};