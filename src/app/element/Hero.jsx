import { Button } from "@/components/ui/button";
import { CarouselPlugin } from "./_components/CarouselPlugin";

export const Hero = () => {
  return (
    <section className=" h-100 mb-10 mt-2 flex flex-col md:flex-row justify-between items-center">
      <div className=" mb-2 mx-auto h-full flex flex-col justify-center items-start   ">
        <h2 className="text-5xl font-semibold mb-4 ">
          Des gousses de vanille directement du cœur de Madagascar
        </h2>
        <p className="text-lg mb-8">
          Cultivée avec soin dans les régions de Sambava, Vohemar et Ambanja.
        </p>
        <Button asChild>
          <a href="/products">Découvrez nos produits</a>
        </Button>
      </div>
      <div className="md:p-10 p-0 order-1 md:order-2">
        <CarouselPlugin />
      </div>
    </section>
  );
};
