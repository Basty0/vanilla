"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getOrderDetails } from "@/lib/api";

export default function OrderDetailPage() {
  const [order, setOrder] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchOrderDetails();
  }, [id]);

  const fetchOrderDetails = async () => {
    try {
      const data = await getOrderDetails(id);
      setOrder(data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des détails de la commande:",
        error
      );
    }
  };

  if (!order) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">
        Détails de la Commande #{order.id}
      </h1>
      <p>Total: {order.total} €</p>
      <p>Date: {new Date(order.created_at).toLocaleDateString()}</p>
      <h2 className="text-xl font-bold mt-5 mb-3">Produits</h2>
      {order.produits.map((produit) => (
        <div key={produit.id} className="border p-4 mb-4 rounded">
          <p>{produit.nom}</p>
          <p>Prix: {produit.prix} €</p>
          <p>Quantité: {produit.pivot.quantite}</p>
        </div>
      ))}
    </div>
  );
}
