import { Navbar } from "@/components/Navbar";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

const SpareParts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Spare Parts Shop</h1>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default SpareParts;