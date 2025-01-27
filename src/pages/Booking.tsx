import { Navbar } from "@/components/Navbar";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";

const Booking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Book a Service</h1>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
};

export default Booking;