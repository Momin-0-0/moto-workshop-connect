
import { Navbar } from "@/components/Navbar";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, SlidersHorizontal, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink,
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";

const Shop = () => {
  const [category, setCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [availability, setAvailability] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popular");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Enhanced Breadcrumb Navigation */}
        <Breadcrumb className="mb-6">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop" className="font-semibold">Shop</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Motorcycle Parts Shop
          </h1>
          <p className="text-muted-foreground mb-8">
            Find high-quality parts and accessories for your motorcycle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search parts..." className="pl-10 w-full" />
            </div>
            <Button className="bg-secondary hover:bg-secondary/90">
              Search
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Enhanced Filter Section */}
          <div className="space-y-6 p-8 border rounded-xl bg-card shadow-sm">
            <div className="space-y-4">
              <h3 className="font-semibold flex items-center gap-2 text-lg">
                <SlidersHorizontal className="h-5 w-5" />
                Filters
              </h3>
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium">Category</label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="maintenance">Maintenance Parts</SelectItem>
                      <SelectItem value="brakes">Brake Systems</SelectItem>
                      <SelectItem value="drive">Drive & Transmission</SelectItem>
                      <SelectItem value="engine">Engine Components</SelectItem>
                      <SelectItem value="electrical">Electrical Parts</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium">Price Range</label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="0-50">Under $50</SelectItem>
                      <SelectItem value="51-100">$51 - $100</SelectItem>
                      <SelectItem value="101-200">$101 - $200</SelectItem>
                      <SelectItem value="201-500">$201 - $500</SelectItem>
                      <SelectItem value="501+">$501 and above</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium">Availability</label>
                  <Select value={availability} onValueChange={setAvailability}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Items</SelectItem>
                      <SelectItem value="in-stock">In Stock</SelectItem>
                      <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                      <SelectItem value="pre-order">Pre-order</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-primary/10 text-primary hover:bg-primary/20">
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold">Available Parts</h2>
                <p className="text-sm text-muted-foreground">
                  Showing 12 of 48 products
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="hover:bg-secondary/10">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart (0)
                </Button>
              </div>
            </div>

            <ProductGrid />
            
            {/* Load More Button */}
            <div className="flex justify-center mt-12">
              <Button 
                variant="outline" 
                className="group hover:bg-secondary/10"
              >
                Load More Products
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
