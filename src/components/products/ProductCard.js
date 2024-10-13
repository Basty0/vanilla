import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const baseUrl = "http://127.0.0.1:8000/";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{product.nom}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <Image
          src={`${baseUrl}${product.image}`}
          alt={product.nom}
          width={300}
          height={300}
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="font-bold text-lg">{product.prix} €</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onAddToCart(product)} className="w-full">
          Ajouter au panier
        </Button>
      </CardFooter>
    </Card>
  );
}
