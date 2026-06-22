import { useReveal } from "@/hooks/use-reveal";

const polaroids = [
  { src: "/assets/g1.jpg", caption: "Momento de oração", rot: -4 },
  { src: "/assets/g2.jpg", caption: "Conferência Purificados", rot: 3 },
  { src: "/assets/g3.jpg", caption: "O agir de Deus", rot: -2 },
  { src: "/assets/g4.jpg", caption: "Adoração & Intercessão", rot: 4 },
  { src: "/assets/g5.jpg", caption: "Família Cativar", rot: -3 },
  { src: "/assets/g6.jpg", caption: "Fogueira & Comunhão", rot: 2 },
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
              <img src={p.src} alt={p.caption} loading="lazy" className="aspect-square w-full object-cover mb-3" />
              <div className="font-display text-sm text-center text-[var(--ink)]">{p.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
