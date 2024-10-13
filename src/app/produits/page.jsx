"use client";
import React, { useEffect, useState } from "react";
import { SheetDemo } from "./_components/SheetDemo";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { createOrder, getProductDetails, getProducts } from "@/lib/api";
import { useParams } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import { Star, ChevronRight } from "lucide-react";
import Link from "next/link";

const Page = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const data = await getProducts();
      setProduct(data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des détails du produit:",
        error
      );
    }
  };

  const [panier, setPanier] = useState([]); // État pour le panier

  const ajouterAuPanier = (produit) => {
    setPanier((prevPanier) => {
      const existingProduct = prevPanier.find((item) => item.id === produit.id);
      if (existingProduct) {
        return prevPanier.map((item) =>
          item.id === produit.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevPanier, { ...produit, quantity: 1 }];
    });
  };

  const diminuerQuantite = (id) => {
    setPanier((prevPanier) => {
      const existingProduct = prevPanier.find((item) => item.id === id);
      if (existingProduct.quantity > 1) {
        return prevPanier.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevPanier.filter((item) => item.id !== id); // Supprime le produit si la quantité atteint 0
    });
  };

  const supprimerDuPanier = (id) => {
    setPanier((prevPanier) => prevPanier.filter((item) => item.id !== id));
  };

  const viderPanier = () => {
    setPanier([]);
  };

  const commander = async () => {
    console.log(panier);
    alert("Commande passée avec succès !");
    await createOrder(panier);
    viderPanier();
  };

  const calculateAverageRating = (avis) => {
    if (!avis || avis.length === 0) return 0;
    const sum = avis.reduce((acc, curr) => acc + curr.note, 0);
    return sum / avis.length;
  };

  if (!product) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Nos Produits</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.data.map((product) => {
          const averageRating = calculateAverageRating(product.avis);
          return (
            <Card
              key={product.id}
              className="h-full flex flex-col shadow-none rounded-2xl bg-[#1a2e2a] text-white border-none"
            >
              <CardHeader>
                <CardTitle className="text-white">{product.nom}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <Image
                  src={`http://127.0.0.1:8000/storage/${product.image}`}
                  alt={product.nom}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <p className="text-sm text-gray-300 mb-2">
                  {product.description.length > 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
                </p>
                <p className="font-bold text-lg">{product.prix} €</p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(averageRating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-300">
                    ({averageRating.toFixed(1)})
                  </span>
                </div>
              </CardContent>
              <CardFooter className="gap-4">
                <div className="w-full flex justify-between">
                  <Button
                    onClick={() =>
                      product.statut !== "indisponible" &&
                      ajouterAuPanier(product)
                    }
                    className={`w-1/2 bg-white text-[#0e1f1c] hover:bg-gray-200 ${
                      product.statut === "indisponible"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {product.statut === "indisponible"
                      ? "Indisponible"
                      : "Ajouter au panier"}
                  </Button>
                  <ProductDetail
                    product={product}
                    ajouterAuPanier={ajouterAuPanier}
                  />
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <div className="fixed bottom-10 right-10 z-50">
        <SheetDemo
          panier={panier}
          diminuerQuantite={diminuerQuantite}
          supprimerDuPanier={supprimerDuPanier}
          viderPanier={viderPanier}
          commander={commander}
          ajouterAuPanier={ajouterAuPanier}
        />
      </div>
    </div>
  );
};

export default Page;
