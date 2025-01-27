import { Navbar } from "@/components/Navbar";
import { WorkshopMap } from "@/components/WorkshopMap";
import { WorkshopList } from "@/components/WorkshopList";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FindWorkshop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Find a Workshop</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search workshops..."
                className="pl-10"
              />
            </div>
            <Button className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Near Me
            </Button>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <WorkshopMap />
          <WorkshopList />
        </div>
      </main>
    </div>
  );
};

export default FindWorkshop;