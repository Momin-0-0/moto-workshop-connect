import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    rating: 5,
    text: "Found a great workshop nearby. Quick service and professional staff!",
    date: "March 2024",
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "The booking process was seamless. Will definitely use again!",
    date: "February 2024",
  },
  {
    name: "Mike Brown",
    rating: 4,
    text: "Excellent platform for finding reliable motorcycle services.",
    date: "January 2024",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Read about experiences from our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-100">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent stroke-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-lg">{testimonial.text}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="font-semibold text-primary">{testimonial.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.date}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};