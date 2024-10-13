"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ",
        isScrolled
          ? "backdrop-blur-md bg-white/60 "
          : "backdrop-blur-md bg-white"
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            vanilla.mg
          </Link>
          <div className="flex space-x-4">
            <Link
              href="/produits"
              className="text-primary hover:text-primary-dark"
            >
              Produits
            </Link>

            <Link
              href="/contact"
              className="text-primary hover:text-primary-dark"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
