import { Button } from "@/components/ui/button";
import { Bike } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bike className="h-6 w-6 text-secondary" />
            <span className="text-xl font-bold">MotoService</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Find Workshops
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Services
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Parts Shop
            </a>
            <Button variant="outline" className="mr-2">
              Sign In
            </Button>
            <Button>Register</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};