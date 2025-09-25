import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const offerImage = PlaceHolderImages.find(p => p.id === 'hero-books');

export function Offer() {
    if (!offerImage) return null;

    return (
        <section className="py-12 sm:py-24 bg-card/50">
            <div className="container">
                <Card className="bg-background border-primary/50 shadow-2xl shadow-primary/10 overflow-hidden">
                    <div className="grid grid-cols-1">
                        <div className="p-8 sm:p-12 text-center">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Oferta Imperdível</h2>
                            
                            <div className="relative h-64 lg:h-96 w-full my-6 min-h-[300px] rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={offerImage.imageUrl}
                                    alt={offerImage.description}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={offerImage.imageHint}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
                            </div>
                            
                            <p className="mt-4 text-3xl md:text-4xl font-extrabold text-foreground">
                                200 Audio Livros + Bônus 3.500 Livros em PDF
                            </p>
                            <p className="mt-2 text-2xl font-bold text-primary">BEST SELLERS</p>

                            <div className="mt-8 text-center space-y-2">
                                <p className="text-xl line-through text-foreground/50">de R$ 97,00 por apenas</p>
                                <p className="text-6xl md:text-7xl font-black text-primary animate-pulse">
                                    R$19,90
                                </p>
                            </div>
                            
                            <Button size="lg" className="mt-8 w-full max-w-md mx-auto font-bold text-xl h-16 shadow-lg bg-green-500 hover:bg-green-600 shadow-green-500/30 animate-pulse transform hover:scale-105 transition-transform duration-300">
                                QUERO A OFERTA AGORA!
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}
