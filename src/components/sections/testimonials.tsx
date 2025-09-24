"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const testimonialIds = ["testimonial-1", "testimonial-2", "testimonial-3"];

export function Testimonials() {
  const testimonials = testimonialIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);
  
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="py-12 sm:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Veja o que nossos <span className="text-primary">leitores</span> estão dizendo:
        </h2>
        <div className="mt-12 flex justify-center">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[plugin.current]}
            className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl"
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
            <CarouselPrevious className="inline-flex sm:hidden" />
            <CarouselNext className="inline-flex sm:hidden" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
