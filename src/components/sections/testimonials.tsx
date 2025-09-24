"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const testimonialIds = ["testimonial-1", "testimonial-2", "testimonial-3"];

const comments = [
    {
        name: "Carlos Silva",
        comment: "Transformador! Os áudios mudaram completamente minha forma de ver o dinheiro. Recomendo demais!"
    },
    {
        name: "Juliana Santos",
        comment: "O melhor investimento que fiz em mim mesma. Conteúdo rico e prático, direto ao ponto."
    },
    {
        name: "Fernando Oliveira",
        comment: "Nunca imaginei que aprender sobre finanças poderia ser tão fácil. A qualidade dos áudios é excelente."
    },
    {
        name: "Amanda Costa",
        comment: "Já estou colhendo os frutos! Consegui organizar minhas finanças e comecei a investir seguindo os conselhos."
    },
    {
        name: "Ricardo Pereira",
        comment: "Material de altíssima qualidade. Os bônus em PDF são um complemento perfeito. Vale cada centavo!"
    }
]

export function Testimonials() {
  const testimonials = testimonialIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);
  
  const imagePlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const commentPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
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
            plugins={[imagePlugin.current]}
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
            <CarouselPrevious className="hidden sm:inline-flex" />
            <CarouselNext className="hidden sm:inline-flex" />
          </Carousel>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-center mt-16 md:mt-24">
            E também veja os <span className="text-primary">comentários</span>
        </h3>
        <div className="mt-12 flex justify-center">
            <Carousel
                opts={{ align: "start", loop: true }}
                plugins={[commentPlugin.current]}
                className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl"
            >
                <CarouselContent>
                    {comments.map((comment, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-2 h-full">
                                <Card className="bg-card/50 border-border/50 h-full">
                                    <CardContent className="p-6 flex flex-col justify-center items-center text-center h-full">
                                        <p className="text-foreground/80 italic">"{comment.comment}"</p>
                                        <p className="mt-4 font-bold text-primary">- {comment.name}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:inline-flex" />
                <CarouselNext className="hidden sm:inline-flex" />
            </Carousel>
        </div>

      </div>
    </section>
  );
}
