"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const testimonialIds = [
  "whatsapp-testimonial-1",
  "whatsapp-testimonial-2",
  "whatsapp-testimonial-3",
];

export function MoreTestimonials() {
  const testimonials = testimonialIds
    .map((id) => PlaceHolderImages.find((p) => p.id === id))
    .filter(Boolean);

  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="py-12 sm:py-24 bg-card/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Veja mais alguns <span className="text-primary">comentários</span>{" "}
          sobre o produto
        </h2>

        <div className="mt-12 flex justify-center">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[plugin.current]}
            className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl"
          >
            <CarouselContent>
              {testimonials.map(
                (testimonial) =>
                  testimonial && (
                    <CarouselItem
                      key={testimonial.id}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-2 h-full">
                        <Card className="bg-card/50 border-border/50 h-full overflow-hidden">
                          <CardContent className="p-0 flex flex-col items-center text-center h-full">
                            <Image
                              src={testimonial.imageUrl}
                              alt={testimonial.description}
                              width={400}
                              height={600}
                              className="object-contain"
                              data-ai-hint={testimonial.imageHint}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  )
              )}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:inline-flex" />
            <CarouselNext className="hidden sm:inline-flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
