"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const imageIds = ["value-prop-1", "value-prop-2", "value-prop-3", "value-prop-4"];

export function ValueProposition() {
  const images = imageIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="py-12 sm:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
            O melhor <span className="text-primary">custo e benefício!</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
            Uma simples busca no Google mostra que o valor de um único livro pode ser maior do que o investimento que você fará neste acervo, que oferece mais de 3.500 livros à sua disposição.
            </p>
        </div>

        <div className="mt-12 flex justify-center">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[plugin.current]}
            className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl"
          >
            <CarouselContent>
              {images.map((image) => (
                image && (
                  <CarouselItem key={image.id} className="sm:basis-1/2">
                    <div className="p-2">
                      <Card className="overflow-hidden border-border shadow-lg">
                        <CardContent className="p-0">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={600}
                            height={400}
                            className="object-contain"
                            data-ai-hint={image.imageHint}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              ))}
            </CarouselContent>
            <CarouselPrevious className="inline-flex sm:hidden" />
            <CarouselNext className="inline-flex sm:hidden" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
