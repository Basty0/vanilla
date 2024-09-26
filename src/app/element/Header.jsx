import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className=" w-full py-4  z-10 transition-all duration-300">
      <div className="container flex justify-between items-center mx-auto">
        <div className=" items-center gap-2 justify-center flex">
          <Avatar className="border-2 border-primary">
            <AvatarImage src="/images/logo.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="text-md font-semibold-bold">Vanilla Export</h1>
        </div>

        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Button asChild>
                <a href="/contact" className="hover:text-gray-400">
                  Contact
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
