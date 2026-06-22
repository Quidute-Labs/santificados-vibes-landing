import { Users, Flame, Bird, Waves as WavesIcon } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { icon: Users, title: "Comunhao", desc: "Encontros que viram amizades pra vida.", color: "var(--ocean)" },
  { icon: Flame, title: "Palavra", desc: "Mensagens que tocam fundo e renovam.", color: "var(--blaze)" },
  { icon: Bird, title: "Adoracao", desc: "Louvor que liberta e aproxima de Deus.", color: "var(--sun)" },
  { icon: WavesIcon, title: "Diversao", desc: "Verao, ar livre e momentos inesqueciveis.", color: "var(--sky)" },
];

export function Experience() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative bg-[var(--cream)] py-24 px-6 grain">
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--blaze)]">O que vamos viver</span>
          <h2 className="font-display text-4xl sm:text-6xl text-[var(--ink)] mt-3 leading-[0.95]">
            Mais do que<br />um retiro.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="group relative bg-white border-2 border-[var(--ink)] p-7 transition-transform duration-300 hover:-translate-y-2 hover:rotate-[-1deg] shadow-[6px_6px_0_var(--ink)]"
              style={{ borderRadius: "32px 8px 32px 8px" }}
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full mb-5" style={{ background: color }}>
                <Icon className="h-7 w-7 text-[var(--cream)]" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-2xl text-[var(--ink)] mb-2">{title}</h3>
              <p className="text-sm text-[var(--ink)]/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}