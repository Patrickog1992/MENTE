"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const testimonialIds = ["testimonial-1", "testimonial-2", "testimonial-3", "testimonial-4", "testimonial-5"];

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
  
  const plugin = React.useRef(
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
                plugins={[plugin.current]}
                className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl"
            >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        testimonial && (
                            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-2 h-full">
                                    <Card className="bg-card/50 border-border/50 h-full overflow-hidden">
                                        <CardContent className="p-6 flex flex-col items-center text-center h-full">
                                          <Image
                                              src={testimonial.imageUrl}
                                              alt={testimonial.description}
                                              width={100}
                                              height={100}
                                              className="rounded-full object-cover w-[100px] h-[100px]"
                                              data-ai-hint={testimonial.imageHint}
                                          />
                                          <div className="p-6 flex flex-col justify-center items-center text-center flex-1">
                                              <p className="text-foreground/80 italic">"{comments[index % comments.length].comment}"</p>
                                              <p className="mt-4 font-bold text-primary">- {comments[index % comments.length].name}</p>
                                          </div>
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

      </div>
    </section>
  );
}
