import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import Image from "next/image";

const featureIds = [
  "finances-category",
  "investments-category",
  "career-category",
  "mindset-category",
];

const featureDescriptions: { [key: string]: { title: string, text: string } } = {
  "finances-category": {
    title: "FINANÇAS",
    text: "Domine a psicologia do dinheiro e aprenda a gerir suas finanças com inteligência para alcançar a estabilidade e o sucesso financeiro."
  },
  "investments-category": {
    title: "INVESTIMENTOS",
    text: "Explore diversas modalidades de investimentos, da renda fixa à variável, além de insights valiosos sobre empreendedorismo para tomar decisões financeiras mais acertadas."
  },
  "career-category": {
    title: "CARREIRA",
    text: "Aprenda com Stephen Covey sobre proatividade e responsabilidade pessoal para alcançar novos patamares na sua carreira."
  },
  "mindset-category": {
    title: "MENTALIDADE",
    text: "Descubra como moldar uma mentalidade de sucesso com livros que inspiram e motivam, como \"Quem Pensa Enriquece\"."
  },
};

export function Categories() {
  const features = featureIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  return (
    <section className="py-12 sm:py-20 bg-card/50">
      <div className="container flex flex-col gap-16 md:gap-24">
        {features.map((feature, index) => {
          if (!feature) return null;
          const description = featureDescriptions[feature.id];
          const isReversed = index % 2 !== 0;

          return (
            <div 
              key={feature.id} 
              className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center",
                isReversed && "md:[&>*:last-child]:-order-1"
              )}
            >
              <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
                  <h3 className="text-2xl font-bold text-primary tracking-wide">{description.title}</h3>
                  <p className="text-lg text-foreground/80 max-w-md">{description.text}</p>
              </div>
              <div className="flex justify-center">
                <Image
                  src={feature.imageUrl}
                  alt={feature.description}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-xl aspect-[5/3] object-cover"
                  data-ai-hint={feature.imageHint}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}
