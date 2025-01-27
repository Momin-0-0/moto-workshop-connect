import { Navbar } from "@/components/Navbar";
import { WorkshopMap } from "@/components/WorkshopMap";
import { WorkshopList } from "@/components/WorkshopList";
import { Footer } from "@/components/Footer";

const WorkshopFinder = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Find a Workshop</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <WorkshopMap />
          <WorkshopList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkshopFinder;