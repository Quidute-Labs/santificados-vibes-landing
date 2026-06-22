import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";

const faqs = [
  { q: "Posso parcelar?", a: "Sim - no cartão você pode parcelar em até 3x. À vista o pagamento é via PIX." },
  { q: "Qual a idade mínima?", a: "O retiro é voltado para jovens a partir de 14 anos." },
  { q: "Posso levar um amigo?", a: "Pode e deve! Quanto mais, melhor. Cada um precisa fazer sua própria inscrição." },
  {
    q: "Preciso levar barraca e roupa de cama?",
    a: "Sim, lá tem um bom espaço para acampar. Leve roupas leves, produtos de higiene pessoal e muita disposição.",
  },
  {
    q: "O transporte é obrigatório?",
    a: "Não, mas é recomendado. Se preferir ir por conta própria, basta avisar na inscrição.",
  },
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
              <AccordionContent className="text-[var(--ink)]/75 text-base leading-relaxed pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
