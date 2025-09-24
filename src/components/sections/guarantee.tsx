import { ShieldCheck } from "lucide-react";

export function Guarantee() {
    return (
        <section className="py-12 sm:py-24">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 rounded-lg border border-border bg-card p-8 shadow-lg">
                    <ShieldCheck className="h-20 w-20 text-primary shrink-0" />
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-primary">Garantia de Satisfação de 7 Dias</h3>
                        <p className="mt-2 max-w-2xl text-foreground/80">
                            Compre com tranquilidade, pois oferecemos garantia de 7 dias. Se não ficar satisfeito por qualquer motivo, nós devolvemos seu dinheiro.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
