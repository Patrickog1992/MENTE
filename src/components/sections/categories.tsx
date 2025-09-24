import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const featureIds = [
  "finances-category",
  "investments-category",
  "career-category",
  "mindset-category",
];

export function Categories() {
  const features = featureIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  return (
    <section className="py-12 sm:py-20 bg-card/50">
      <div className="container flex flex-col items-center gap-16">
        {features.map((feature) => (
          feature && (
            <Image
              key={feature.id}
              src={feature.imageUrl}
              alt={feature.description}
              width={700}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint={feature.imageHint}
            />
          )
        ))}
      </div>
    </section>
  );
}
