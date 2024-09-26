import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Trash } from "lucide-react";

export function SheetDemo({
  panier,
  supprimerDuPanier,
  viderPanier,
  commander,
  diminuerQuantite,
  ajouterAuPanier, // Réception de la fonction pour augmenter la quantité
}) {
  const totalPrix = panier.reduce(
    (total, produit) => total + produit.prix * produit.quantity,
    0
  ); // Calcul du prix total

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" className="fixed bottom-10 right-10 gap-2">
          <ShoppingCart />
          {panier.length > 0 && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full">
              {panier.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Mon Panier</SheetTitle>
          <SheetDescription>Total: {totalPrix} €</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {panier.map((produit, index) => (
            <Card key={index} className="py-4 px-2">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span>
                    {produit.nom} (x{produit.quantity})
                  </span>
                  <span>{produit.prix * produit.quantity} €</span>
                </div>

                <div className="flex items-center">
                  <Button onClick={() => diminuerQuantite(produit.id)}>
                    -
                  </Button>
                  <span className="mx-2">{produit.quantity}</span>
                  <Button onClick={() => ajouterAuPanier(produit)}>
                    +
                  </Button>{" "}
                  {/* Utilisation de la fonction pour augmenter la quantité */}
                  <Button
                    variant="ghost"
                    iconOnly
                    onClick={() => supprimerDuPanier(produit.id)}
                  >
                    <Trash size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <SheetFooter className="absolute left-0 bottom-0 w-full">
          <div className="flex justify-between items-center p-4 gap-4">
            <SheetClose>
              <Button type="submit" onClick={commander}>
                Commander
              </Button>
            </SheetClose>
            <Button variant="destructive" onClick={viderPanier}>
              Vider le panier
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
