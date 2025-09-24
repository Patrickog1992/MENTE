import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-books');

export function Hero() {
  if (!heroImage) return null;

  return (
    <section className="py-12 sm:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-primary font-headline leading-tight">
              A chave para o seu próximo nível
            </h1>
            <p className="mt-4 max-w-xl text-lg text-foreground/80">
              200 AÚDIOS: Best-Sellers que transformam sua mentalidade e potencializam suas finanças tudo em um único Lugar, com conteúdos selecionados para acelerar seu crescimento pessoal e profissional.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={500}
              height={500}
              className="rounded-lg shadow-2xl shadow-primary/20"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
