import { Logo } from "@/components/logo";

export function Footer() {
    return (
        <footer className="py-8 border-t border-border/40">
            <div className="container text-center text-foreground/60">
                <div className="flex justify-center">
                    <Logo />
                </div>
                <p className="mt-4 text-sm">
                    © {new Date().getFullYear()} Coleção Mente Milionária. Todos os direitos reservados.
                </p>
                <p className="mt-2 text-xs max-w-lg mx-auto">
                    Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
                </p>
            </div>
        </footer>
    );
}
