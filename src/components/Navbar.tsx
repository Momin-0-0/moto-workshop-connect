import { Button } from "@/components/ui/button";
import { Bike } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Bike className="h-6 w-6 text-secondary" />
            <span className="text-xl font-bold">MotoService</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/find-workshop" className="text-muted-foreground hover:text-foreground">
              Find Workshops
            </Link>
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