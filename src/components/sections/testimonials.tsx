import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const testimonialIds = ["testimonial-1", "testimonial-2", "testimonial-3"];

export function Testimonials() {
  const testimonials = testimonialIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  return (
    <section className="py-12 sm:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Veja o que nossos <span className="text-primary">leitores</span> estão dizendo:
        </h2>
        <div className="mt-12 flex justify-center">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-xs sm:max-w-xl md:max-w-4xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                testimonial && (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden rounded-xl">
                        <CardContent className="p-0">
                          <Image
                            src={testimonial.imageUrl}
                            alt={testimonial.description}
                            width={400}
                            height={400}
                            className="aspect-square object-cover"
                            data-ai-hint={testimonial.imageHint}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
