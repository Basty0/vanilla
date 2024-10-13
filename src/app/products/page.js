"use client";
import { useState, useEffect } from "react";
import { getProducts } from "@/lib/api";
import ProductList from "@/components/products/ProductList";
import Pagination from "@/components/shared/Pagination";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = async (page) => {
    try {
      const data = await getProducts(page);
      setProducts(data.data);
      setTotalPages(data.last_page);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Nos Produits</h1>
      <ProductList products={products} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
