import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Oil Filter",
    price: 29.99,
    image: "placeholder.svg",
    category: "Maintenance",
  },
  {
    id: 2,
    name: "Brake Pads",
    price: 89.99,
    image: "placeholder.svg",
    category: "Brakes",
  },
  {
    id: 3,
    name: "Chain Kit",
    price: 149.99,
    image: "placeholder.svg",
    category: "Drive",
  },
];

export const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="mb-2">{product.name}</CardTitle>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold">${product.price}</span>
              <span className="text-sm text-muted-foreground">
                {product.category}
              </span>
            </div>
            <Button className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};