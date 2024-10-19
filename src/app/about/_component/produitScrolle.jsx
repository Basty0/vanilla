import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProduitScrolle = () => {
  const products = [
    {
      name: "Nom du pro",
      description:
        "Madagascar est reconnu pour ses épices de qualité supérieure, cultivées depuis des siècles.",
      price: "prix",
    },
    {
      name: "Nom du pro",
      description:
        "Madagascar est reconnu pour ses épices de qualité supérieure, cultivées depuis des siècles.",
      price: "prix",
    },
    {
      name: "Nom du pro",
      description:
        "Madagascar est reconnu pour ses épices de qualité supérieure, cultivées depuis des siècles.",
      price: "prix",
    },
  ];

  return (
    <div className="grid gap-6 p-6">
      {products.map((product, index) => (
        <Card
          key={index}
          className="flex flex-row bg-[#1a2e2a] rounded-lg border-none shadow-none text-white"
        >
          <div className="w-1/3">
            <div className="w-full h-40 m-2 bg-gray-200 rounded-md"></div>
          </div>
          <div className="w-2/3 flex flex-col p-4">
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <p className="text-sm text-gray-200 mt-2">
                {product.description.slice(0, 50)}...
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="font-bold">{product.price}</span>
                <Link href={`/produits`}>
                  <Button>Voir plus</Button>
                </Link>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProduitScrolle;
