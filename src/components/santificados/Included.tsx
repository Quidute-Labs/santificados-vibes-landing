import { Coffee, UtensilsCrossed, Soup, Bus, Gift } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { icon: Coffee, label: "Café da manhã", sub: "Dia 16" },
  { icon: Soup, label: "Almoço", sub: "Dias 15 e 16" },
  { icon: UtensilsCrossed, label: "Janta", sub: "Dia 15" },
  { icon: Bus, label: "Transporte", sub: "Ida e volta p/ a chácara" },
  { icon: Gift, label: "Kit participante", sub: "Surpresa pra você" },
];

export function Included() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 px-6" style={{ background: "var(--cream)" }}>
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--ocean)]">O que está incluso</span>
          <h2 className="font-display text-4xl sm:text-6xl text-[var(--ink)] mt-3">Tudo pronto pra você.</h2>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
          {items.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="snap-start shrink-0 w-[70%] md:w-auto bg-[var(--ocean)] text-[var(--cream)] p-6 border-2 border-[var(--ink)] shadow-[5px_5px_0_var(--ink)]" style={{ borderRadius: "24px" }}>
              <Icon className="h-10 w-10 mb-4 text-[var(--sun)]" strokeWidth={2.2} />
              <div className="font-display text-xl leading-tight">{label}</div>
              <div className="text-xs mt-1 opacity-80 tracking-wide">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}