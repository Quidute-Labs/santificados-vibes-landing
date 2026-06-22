import { useReveal } from "@/hooks/use-reveal";

const polaroids = [
  { hue: "var(--ocean)", caption: "Pôr do sol no lago", rot: -4 },
  { hue: "var(--blaze)", caption: "Fogueira & adoracao", rot: 3 },
  { hue: "var(--sky)", caption: "Café da galera", rot: -2 },
  { hue: "var(--sun)", caption: "Time vencedor", rot: 4 },
  { hue: "var(--ocean)", caption: "Mergulho na palavra", rot: -3 },
  { hue: "var(--blaze)", caption: "Última noite", rot: 2 },
];

export function Gallery() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 px-6" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--ocean)]">Galeria</span>
          <h2 className="font-display text-4xl sm:text-6xl text-[var(--ink)] mt-3">Memórias que ficam.</h2>
        </div>
        <div ref={ref} className="reveal grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10">
          {polaroids.map((p, i) => (
            <div
              key={i}
              className="bg-white p-3 pb-6 shadow-[6px_6px_0_var(--ink)] border border-[var(--ink)]/20 transition-transform hover:scale-[1.04] hover:rotate-0"
              style={{ transform: `rotate(${p.rot}deg)` }}
            >
              <div className="aspect-square mb-3" style={{ background: `linear-gradient(135deg, ${p.hue}, var(--ink))` }} />
              <div className="font-display text-sm text-center text-[var(--ink)]">{p.caption}</div>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-xs uppercase tracking-widest text-[var(--ink)]/50">
          Fotos reais em breve
        </p>
      </div>
    </section>
  );
}