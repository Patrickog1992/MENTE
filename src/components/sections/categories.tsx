import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const featureIds = [
  "finances-category",
  "investments-category",
  "career-category",
  "mindset-category",
];

const featureDescriptions: { [key: string]: string } = {
  "finances-category": "FINANÇAS: Domine a psicologia do dinheiro e aprenda a gerir suas finanças com inteligência para alcançar a estabilidade e o sucesso financeiro.",
  "investments-category": "INVESTIMENTOS: Explore diversas modalidades de investimentos, da renda fixa à variável, além de insights valiosos sobre empreendedorismo para tomar decisões financeiras mais acertadas.",
  "career-category": "CARREIRA: Aprenda com Stephen Covey sobre proatividade e responsabilidade pessoal para alcançar novos patamares na sua carreira.",
  "mindset-category": "MENTALIDADE: Descubra como moldar uma mentalidade de sucesso com livros que inspiram e motivam, como \"Quem Pensa Enriquece\".",
};

export function Categories() {
  const features = featureIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  return (
    <section className="py-12 sm:py-20 bg-card/50">
      <div className="container flex flex-col items-center gap-16">
        {features.map((feature) => (
          feature && (
            <div key={feature.id} className="flex flex-col items-center text-center gap-4 max-w-3xl">
              <Image
                src={feature.imageUrl}
                alt={feature.description}
                width={700}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint={feature.imageHint}
              />
              <p className="text-lg text-foreground/80">{featureDescriptions[feature.id]}</p>
            </div>
          )
        ))}
      </div>
    </section>
  );
}
