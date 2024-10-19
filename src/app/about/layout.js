import React from "react";
import ProduitScrolle from "./_component/produitScrolle";

export default function RootLayout({ children }) {
  return (
    <div className="about-layout min-h-screen pt-14">
      <div className="grid grid-cols-3">
        <div className="col-span-2 text-white container mx-auto md:px-16 ">
          {children}
        </div>
        <div className="col-span-1">
          <ProduitScrolle />
        </div>
      </div>
    </div>
  );
}
