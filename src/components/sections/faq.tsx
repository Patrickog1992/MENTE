import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "Como vou receber o acesso?",
        answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para acessar os audiobooks e os bônus em PDF."
    },
    {
        question: "Posso ouvir em qualquer dispositivo?",
        answer: "Sim! Nossos audiobooks são em formato MP3 e os livros em PDF, compatíveis com smartphones, tablets, computadores e a maioria dos leitores de e-book."
    },
    {
        question: "O acesso é vitalício?",
        answer: "Sim, o acesso é seu para sempre. Você pode baixar os arquivos quantas vezes quiser e acessá-los a qualquer momento, sem taxas adicionais."
    },
    {
        question: "Quais são as formas de pagamento?",
        answer: "Aceitamos as principais formas de pagamento, incluindo cartão de crédito, PIX e boleto bancário, através de uma plataforma de pagamento segura."
    },
    {
        question: "E se eu não gostar do conteúdo?",
        answer: "Não se preocupe! Oferecemos uma garantia incondicional de 7 dias. Se você não ficar satisfeito por qualquer motivo, basta solicitar o reembolso e devolveremos 100% do seu dinheiro."
    }
]

export function Faq() {
    return (
        <section className="py-12 sm:py-24 bg-card/50">
            <div className="container max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    Perguntas <span className="text-primary">Frequentes</span>
                </h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index} className="border-border/50">
                            <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-foreground/80 text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
