import { Hero } from "@/components/sections/hero";
import { Categories } from "@/components/sections/categories";
import { Testimonials } from "@/components/sections/testimonials";
import { Benefits } from "@/components/sections/benefits";
import { ValueProposition } from "@/components/sections/value-proposition";
import { Offer } from "@/components/sections/offer";
import { Guarantee } from "@/components/sections/guarantee";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="py-6 flex justify-center">
        <Image 
          src="https://i.imgur.com/B1JGEA2.png"
          alt="Mente Milionária Logo"
          width={100}
          height={100}
        />
      </header>
      <main className="flex-1">
        <Hero />
        <section className="py-12 sm:py-20 bg-background">
            <div className="container text-center">
                <Link href="https://pay.kirvano.com/034e4488-9e87-4e91-aafa-450f564f8849">
                    <Button size="lg" className="h-16 text-xl font-extrabold shadow-lg bg-green-500 hover:bg-green-600 shadow-green-500/30 animate-pulse transform hover:scale-105 transition-transform duration-300">
                        QUERO O PRÓXIMO NÍVEL
                    </Button>
                </Link>
            </div>
        </section>
        <Categories />
        <Testimonials />
        <Benefits />
        <ValueProposition />
        <Offer />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
