
import { Navbar } from "@/components/Navbar";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, ShoppingCart, SlidersHorizontal, ChevronDown, 
  ArrowDownWideNarrow, FilterX, BadgePercent, Truck,
  Shield, Clock, X // Added missing icons
} from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";

const Shop = () => {
  const [category, setCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [availability, setAvailability] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popular");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      toast({
        title: "Searching parts...",
        description: `Finding results for "${searchQuery}"`,
      });
    }
  };

  const handleResetFilters = () => {
    setCategory("all");
    setPriceRange("all");
    setAvailability("all");
    setSortBy("popular");
    setSearchQuery("");
    toast({
      title: "Filters reset",
      description: "All filters have been cleared",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-secondary/5 via-background to-background">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <Breadcrumb className="mb-8">
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shop" className="font-semibold">
                  Shop
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>

            <div className="mb-12 animate-fade-in">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Motorcycle Parts Shop
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Find high-quality parts and accessories for your motorcycle from trusted brands
              </p>

              {/* Enhanced Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
                <div className="flex-1 relative group">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 transition-colors group-hover:text-secondary" />
                  <Input 
                    placeholder="Search parts by name, category, or brand..." 
                    className="pl-12 h-12 text-base border-secondary/20 hover:border-secondary/40 transition-colors"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button 
                  className="h-12 px-8 bg-secondary hover:bg-secondary/90"
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </div>

              {/* Shop Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Truck className="h-5 w-5 text-secondary" />
                  <span>Free shipping over $100</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <BadgePercent className="h-5 w-5 text-secondary" />
                  <span>Member discounts</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span>Genuine parts guarantee</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Enhanced Filter Section */}
          <div className="space-y-6 p-8 border rounded-xl bg-card shadow-sm sticky top-4 h-fit">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold flex items-center gap-2 text-lg">
                <SlidersHorizontal className="h-5 w-5" />
                Filters
              </h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleResetFilters}
                className="text-muted-foreground hover:text-primary"
              >
                <FilterX className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>

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

              {/* Active Filters */}
              <div className="pt-4 border-t space-y-3">
                <label className="text-sm font-medium">Active Filters</label>
                <div className="flex flex-wrap gap-2">
                  {category !== 'all' && (
                    <Badge variant="secondary" className="group">
                      Category: {category}
                      <X 
                        className="h-3 w-3 ml-1 cursor-pointer group-hover:text-destructive" 
                        onClick={() => setCategory('all')}
                      />
                    </Badge>
                  )}
                  {priceRange !== 'all' && (
                    <Badge variant="secondary" className="group">
                      Price: {priceRange}
                      <X 
                        className="h-3 w-3 ml-1 cursor-pointer group-hover:text-destructive" 
                        onClick={() => setPriceRange('all')}
                      />
                    </Badge>
                  )}
                  {availability !== 'all' && (
                    <Badge variant="secondary" className="group">
                      Availability: {availability}
                      <X 
                        className="h-3 w-3 ml-1 cursor-pointer group-hover:text-destructive" 
                        onClick={() => setAvailability('all')}
                      />
                    </Badge>
                  )}
                </div>
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
                  <SelectTrigger className="w-[200px]">
                    <ArrowDownWideNarrow className="mr-2 h-4 w-4" />
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
                <Button 
                  variant="outline" 
                  className="hover:bg-secondary/10 relative group"
                >
                  <ShoppingCart className="mr-2 h-4 w-4 group-hover:text-secondary transition-colors" />
                  Cart
                  <Badge 
                    variant="secondary" 
                    className="ml-2 bg-secondary text-white absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs rounded-full"
                  >
                    0
                  </Badge>
                </Button>
              </div>
            </div>

            <ProductGrid />
            
            {/* Load More Button */}
            <div className="flex justify-center mt-12">
              <Button 
                variant="outline" 
                className="group hover:bg-secondary/10 min-w-[200px]"
                onClick={() => {
                  toast({
                    title: "Loading more products",
                    description: "Fetching additional items...",
                  });
                }}
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
