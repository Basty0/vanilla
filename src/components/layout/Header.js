"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react"; // Add this import

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/");
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white",
        isScrolled
          ? "backdrop-blur-md bg-[#0e1f1c]/60 "
          : "backdrop-blur-md bg-[#0e1f1c]"
      )}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Vanilla MG Export
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/produits" className="text-sm font-medium">
              Produits
            </Link>
            {isLoggedIn ? (
              <>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-black">
                        Mon Compte
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]  bg-[#0e1f1c] text-white">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <Link
                                href="/profile"
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              >
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  Mon Profil
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Gérez vos informations personnelles
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/orders"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  Mes Commandes
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  Consultez l'historique de vos commandes
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/cart"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  Panier
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  Voir et modifier votre panier
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <Button onClick={handleLogout} variant="ghost">
                  Déconnexion
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Connexion</Button>
                </Link>
                <Link href="/register">
                  <Button variant="ghost">Inscription</Button>
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu />
            </Button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="container mx-auto px-6 py-3 bg-[#0e1f1c]">
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/produits" onClick={toggleMenu}>
                  Produits
                </Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <Link href="/profile" onClick={toggleMenu}>
                      Mon Profil
                    </Link>
                  </li>
                  <li>
                    <Link href="/orders" onClick={toggleMenu}>
                      Mes Commandes
                    </Link>
                  </li>
                  <li>
                    <Link href="/cart" onClick={toggleMenu}>
                      Panier
                    </Link>
                  </li>
                  <li>
                    <Button onClick={handleLogout} variant="ghost">
                      Déconnexion
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/login" onClick={toggleMenu}>
                      Connexion
                    </Link>
                  </li>
                  <li>
                    <Link href="/register" onClick={toggleMenu}>
                      Inscription
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
