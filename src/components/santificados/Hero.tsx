import { Waves } from "./Waves";
import { EXTERNAL_FORM_URL, SPONSOR_FORM_URL } from "@/lib/santificados-config";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden grain" style={{ background: "linear-gradient(180deg, var(--ocean) 0%, var(--sky) 100%)" }}>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center text-[var(--cream)]">
        <img
          src="/assets/logo-cativar-badge.jpg"
          alt="Rede Cativar"
          className="mb-6 h-10 w-auto"
        />

        <img
          src="/assets/logo-cheia.png"
          alt="Santificados — Retiro Cativar 2026"
          className="mx-auto w-[min(90vw,520px)] animate-float"
        />

        <p className="mt-8 max-w-xl text-base md:text-lg font-medium leading-relaxed text-[var(--cream)]/95">
          <span className="italic">"Mas fostes lavados, santificados e justificados…"</span>
          <br />
          <span className="font-display text-sm tracking-widest">— 1 CORÍNTIOS 6:11</span>
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={EXTERNAL_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display inline-flex items-center justify-center rounded-full bg-[var(--blaze)] px-8 py-4 text-lg text-[var(--cream)] shadow-[0_6px_0_var(--ink)] transition-transform duration-200 hover:scale-105 active:translate-y-1 active:shadow-[0_2px_0_var(--ink)]"
          >
            QUERO PARTICIPAR
          </a>
          <a
            href={SPONSOR_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display inline-flex items-center justify-center rounded-full border-2 border-[var(--cream)] px-8 py-4 text-lg text-[var(--cream)] transition-colors hover:bg-[var(--cream)] hover:text-[var(--ocean)]"
          >
            QUERO SER PADRINHO
          </a>
        </div>
      </div>

      {/* Waves */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <Waves className="block h-[120px] w-full" color="var(--cream)" />
      </div>
    </section>
  );
}