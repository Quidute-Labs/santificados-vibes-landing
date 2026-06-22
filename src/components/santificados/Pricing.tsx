import { useReveal } from "@/hooks/use-reveal";
import { EXTERNAL_FORM_URL } from "@/lib/santificados-config";

export function Pricing() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-28 px-6 grain overflow-hidden" style={{ background: "var(--sun)" }}>
      <div ref={ref} className="reveal mx-auto max-w-4xl text-center text-[var(--ink)]">
        <span className="text-xs font-bold tracking-[0.3em] uppercase">Investimento</span>
        <h2 className="font-display text-5xl sm:text-7xl mt-3">Vale cada centavo.</h2>
        <div className="mt-10 flex flex-col items-center">
          <span className="text-sm font-bold uppercase tracking-widest opacity-70">apenas</span>
          <div className="font-display text-[80px] sm:text-[140px] leading-[0.85] text-[var(--ink)]">
            R$<span className="text-[var(--blaze)]">150</span>
          </div>
          <p className="mt-4 max-w-md text-base sm:text-lg">
            PIX à vista <span className="opacity-60">ou</span> cartão parcelado.
            <br />
            <span className="text-sm opacity-70">Vagas limitadas - garanta a sua.</span>
          </p>
          <a
            href={EXTERNAL_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display mt-10 inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-10 py-5 text-lg sm:text-xl text-[var(--cream)] shadow-[0_8px_0_var(--blaze)] transition-transform duration-200 hover:scale-105 active:translate-y-1 active:shadow-[0_3px_0_var(--blaze)]"
          >
            GARANTIR MINHA VAGA
          </a>
        </div>
      </div>
    </section>
  );
}
