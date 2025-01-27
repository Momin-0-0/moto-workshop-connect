import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export const BookingForm = () => {
  const { workshopId } = useParams();
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Confirmed",
      description: "Your service has been scheduled successfully.",
    });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="service">Service Type</Label>
            <select
              id="service"
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select a service</option>
              <option value="oil-change">Oil Change</option>
              <option value="tire-service">Tire Service</option>
              <option value="full-service">Full Service</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label>Select Date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Input
              id="notes"
              placeholder="Any specific requirements or concerns?"
            />
          </div>

          <Button type="submit" className="w-full">
            Confirm Booking
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};