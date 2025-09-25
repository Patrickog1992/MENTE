import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, KeyRound, BookCopy, RefreshCw } from "lucide-react";
import Link from "next/link";

const benefitsData = [
    {
        icon: <Download className="h-8 w-8 text-primary" />,
        title: "Download Ilimitado",
        description: "Baixe seus livros de forma rápida e fácil e quantas vezes quiser.",
    },
    {
        icon: <KeyRound className="h-8 w-8 text-primary" />,
        title: "Acesso Vitalício",
        description: "Acesse a qualquer hora, em qualquer lugar.",
    },
    {
        icon: <BookCopy className="h-8 w-8 text-primary" />,
        title: "+ Bônus 3500 Livros em PDF",
        description: "Compatível com qualquer dispositivo.",
    },
    {
        icon: <RefreshCw className="h-8 w-8 text-primary" />,
        title: "Atualizações",
        description: "Você terá acesso a qualquer atualização, bônus e benefícios que podem ser acrescentados.",
    }
]

export function Benefits() {
  return (
    <section className="py-12 sm:py-24 bg-card/50">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto">
          O pack de áudio livros incríveis é a <span className="text-primary">melhor escolha</span> para quem deseja transformar sua mentalidade e alcançar a independência financeira.
        </h2>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsData.map(benefit => (
                <Card key={benefit.title} className="bg-background border-border/50 text-center">
                    <CardHeader className="items-center space-y-4">
                        {benefit.icon}
                        <CardTitle className="text-primary font-semibold">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/80">{benefit.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>

        <Link href="https://pay.kirvano.com/034e4488-9e87-4e91-aafa-450f564f8849">
            <Button size="lg" className="mt-12 font-bold text-lg h-14 shadow-lg bg-green-500 hover:bg-green-600 shadow-green-500/30 animate-pulse transform hover:scale-105 transition-transform duration-300">
              EU QUERO AGORA!
            </Button>
        </Link>
      </div>
    </section>
  );
}
