"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCart, updateCartItem, removeCartItem, checkout } from "@/lib/api";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const data = await getCart();
      setCart(data.items);
      setTotal(data.total);
    } catch (error) {
      console.error("Erreur lors de la récupération du panier:", error);
    }
  };

  const handleUpdateQuantity = async (itemId, quantity) => {
    try {
      await updateCartItem(itemId, quantity);
      fetchCart();
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la quantité:", error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await removeCartItem(itemId);
      fetchCart();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'article:", error);
    }
  };

  const handleCheckout = async () => {
    try {
      await checkout();
      router.push("/orders");
    } catch (error) {
      console.error("Erreur lors de la validation de la commande:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Mon Panier</h1>
      {cart.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded flex justify-between items-center"
        >
          <div>
            <p>{item.product.nom}</p>
            <p>Prix: {item.product.prix} €</p>
          </div>
          <div>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
              className="w-16 p-1 border rounded mr-2"
            />
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="text-red-500"
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
      <p className="text-xl font-bold mt-5">Total: {total} €</p>
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-5"
      >
        Valider la commande
      </button>
    </div>
  );
}
