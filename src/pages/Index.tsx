import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { PopularServices } from "@/components/PopularServices";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <PopularServices />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;