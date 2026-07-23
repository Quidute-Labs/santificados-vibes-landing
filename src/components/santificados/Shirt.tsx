import { useReveal } from "@/hooks/use-reveal";

const WHATSAPP_NUMBER = "5563991200862";
const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent("Quero garantir minha camiseta oficial do retiro");

export function Shirt() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      className="relative py-28 px-6 grain overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      <div
        ref={ref}
        className="reveal mx-auto max-w-5xl text-center text-[var(--ink)]"
      >
        <span className="text-xs font-bold tracking-[0.3em] uppercase">
          Camiseta Oficial
        </span>
        <h2 className="font-display text-4xl sm:text-6xl mt-3">
          Camiseta Oficial Santificados 2026
        </h2>

        <div className="mt-12 flex justify-center">
          <img
            src="/assets/camiseta-oficial.png"
            alt="Frente e costas da camiseta oficial Santificados 2026"
            className="w-[min(90vw,720px)] animate-float drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="mt-10 flex flex-col items-center">
          <span className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2">
            apenas
          </span>
          <div className="font-display text-[64px] sm:text-[110px] leading-[0.85]">
            R$<span className="text-[var(--blaze)]">55</span>
          </div>
          <p className="mt-6 font-display text-lg sm:text-xl opacity-90">
            Peça a sua até dia 01/08
          </p>
          <p className="mt-3 max-w-md text-xs sm:text-sm italic opacity-70">
            Não deixe para a última hora, porque depois do prazo não será possível fazer novos pedidos.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display mt-8 inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-10 py-5 text-base sm:text-lg text-[var(--cream)] shadow-[0_8px_0_var(--blaze)] transition-all duration-200 hover:bg-[var(--blaze)] hover:scale-105 active:translate-y-1 active:shadow-[0_3px_0_var(--ink)]"
          >
            QUERO GARANTIR A MINHA CAMISETA
          </a>
        </div>
      </div>
    </section>
  );
}