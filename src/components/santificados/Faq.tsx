import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";

const faqs = [
  { q: "Posso parcelar?", a: "Sim - no cartao voce pode parcelar em ate 3x. A vista o pagamento e via PIX." },
  { q: "Qual a idade minima?", a: "O retiro e voltado para jovens a partir de 14 anos. Menores precisam de autorizacao dos responsaveis." },
  { q: "Posso levar um amigo?", a: "Pode e deve! Quanto mais, melhor. Cada um precisa fazer sua propria inscricao." },
  { q: "Preciso levar roupa de cama?", a: "Nao. A acomodacao ja vem com tudo pronto. Voce so leva roupa, higiene pessoal e disposicao." },
  { q: "O transporte e obrigatorio?", a: "Nao, mas e recomendado. Se preferir ir por conta propria, basta avisar na inscricao." },
];

export function Faq() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 px-6 grain" style={{ background: "var(--cream)" }}>
      <div ref={ref} className="reveal mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--blaze)]">FAQ</span>
          <h2 className="font-display text-4xl sm:text-6xl text-[var(--ink)] mt-3">Perguntas frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b-2 border-[var(--ink)]/15">
              <AccordionTrigger className="font-display text-left text-lg sm:text-xl text-[var(--ink)] py-5 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[var(--ink)]/75 text-base leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}