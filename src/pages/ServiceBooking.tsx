import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookingForm } from "@/components/BookingForm";
import { PopularServices } from "@/components/PopularServices";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ServiceBooking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Book a Service</h1>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <PopularServices />
            </div>
            <div className="sticky top-8">
              <BookingForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceBooking;