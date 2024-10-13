"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getProductsByCategory } from "@/lib/api";
import ProductList from "@/components/products/ProductList";
import Pagination from "@/components/shared/Pagination";

export default function ProductsByCategoryPage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    fetchProductsByCategory(id, currentPage);
  }, [id, currentPage]);

  const fetchProductsByCategory = async (categoryId, page) => {
    try {
      const data = await getProductsByCategory(categoryId, page);
      setProducts(data.data);
      setTotalPages(data.last_page);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des produits par catégorie:",
        error
      );
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Produits par Catégorie</h1>
      <ProductList products={products} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
