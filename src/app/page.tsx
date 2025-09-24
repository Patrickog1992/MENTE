import { Header } from "@/components/sections/header";
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="py-12 sm:py-20 bg-background">
            <div className="container text-center">
                <Button size="lg" className="h-16 text-xl font-extrabold shadow-lg shadow-primary/20 transform hover:scale-105 transition-transform duration-300">
                    QUERO IR PARA O PRÓXIMO NÍVEL
                </Button>
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
