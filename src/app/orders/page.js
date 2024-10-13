"use client";
import { useState, useEffect } from "react";
import { getUserOrders } from "@/lib/api";
import Link from "next/link";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchUserOrders();
  }, []);

  const fetchUserOrders = async () => {
    try {
      const data = await getUserOrders();
      setOrders(data.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des commandes:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Mes Commandes</h1>
      {orders.map((order) => (
        <div key={order.id} className="border p-4 mb-4 rounded">
          <p>Commande #{order.id}</p>
          <p>Total: {order.total} €</p>
          <p>Date: {new Date(order.created_at).toLocaleDateString()}</p>
          <Link href={`/orders/${order.id}`} className="text-blue-500">
            Voir les détails
          </Link>
        </div>
      ))}
    </div>
  );
}
