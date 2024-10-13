"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getProductDetails } from "@/lib/api";
import ProductCard from "@/components/products/ProductCard";

export default function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const data = await getProductDetails(id);
      setProduct(data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des détails du produit:",
        error
      );
    }
  };

  if (!product) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Détails du Produit</h1>
      <ProductCard product={product} showFullDetails />
    </div>
  );
}
