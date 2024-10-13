import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold">Vanille Shop</h3>
            <p className="mt-2 text-sm">La meilleure vanille de Madagascar</p>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-4">
              <li>
                <Link href="/about" className="text-sm hover:text-gray-600">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-gray-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-gray-600">
                  Conditions d'utilisation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          © {new Date().getFullYear()} Vanille Shop. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
