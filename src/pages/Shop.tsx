import { Navbar } from "@/components/Navbar";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart } from "lucide-react";

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Motorcycle Parts Shop</h1>
          <p className="text-muted-foreground mb-6">
            Find high-quality parts and accessories for your motorcycle
          </p>
          <div className="flex gap-4 max-w-xl">
            <div className="flex-1">
              <Input placeholder="Search parts..." className="w-full" />
            </div>
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">Available Parts</h2>
            <p className="text-sm text-muted-foreground">
              Browse our selection of motorcycle parts
            </p>
          </div>
          <Button variant="outline">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart (0)
          </Button>
        </div>

        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;