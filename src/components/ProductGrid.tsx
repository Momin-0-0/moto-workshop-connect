import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Oil Filter",
    price: 29.99,
    image: "placeholder.svg",
    category: "Maintenance",
    rating: 4.5,
    stock: 15,
  },
  {
    id: 2,
    name: "Brake Pads",
    price: 89.99,
    image: "placeholder.svg",
    category: "Brakes",
    rating: 4.8,
    stock: 8,
  },
  {
    id: 3,
    name: "Chain Kit",
    price: 149.99,
    image: "placeholder.svg",
    category: "Drive",
    rating: 4.7,
    stock: 5,
  },
];

export const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card 
          key={product.id} 
          className="group hover:shadow-lg transition-all duration-300 animate-fade-in"
        >
          <CardHeader className="p-0">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity"
              />
              <span className="absolute top-2 right-2 bg-secondary/90 text-white px-2 py-1 rounded-full text-sm">
                {product.stock} in stock
              </span>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-2">
              <span className="text-sm text-muted-foreground">
                {product.category}
              </span>
            </div>
            <CardTitle className="mb-3 group-hover:text-secondary transition-colors">
              {product.name}
            </CardTitle>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-secondary">
                ${product.price}
              </span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 transition-opacity">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};