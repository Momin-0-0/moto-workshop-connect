import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { PopularServices } from "@/components/PopularServices";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <PopularServices />
      </main>
      <Footer />
    </div>
  );
};

export default Index;