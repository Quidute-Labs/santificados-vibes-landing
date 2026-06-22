import { Waves } from "./Waves";
import { EXTERNAL_FORM_URL } from "@/lib/santificados-config";
import logoSimplificada from "@/assets/logo-simplificada.png.asset.json";

export function FinalCta() {
  return (
    <section
      className="relative min-h-[90vh] overflow-hidden grain flex items-center justify-center px-6"
      style={{ background: "linear-gradient(180deg, var(--ocean), oklch(0.35 0.16 258))" }}
    >
      <div className="relative z-10 text-center text-[var(--cream)] max-w-3xl">
        <img src={logoSimplificada.url} alt="Santificados" className="mx-auto w-[min(80vw,420px)] mb-8 animate-float" />

        <h2 className="font-display text-3xl sm:text-5xl leading-[0.95] mb-10">
          Você está pronto para
          <br />
          viver algo novo?
        </h2>
        <a
          href={EXTERNAL_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display inline-flex items-center justify-center rounded-full bg-[var(--blaze)] px-10 py-5 text-xl text-[var(--cream)] shadow-[0_8px_0_var(--ink)] transition-transform duration-200 hover:scale-105 active:translate-y-1 active:shadow-[0_3px_0_var(--ink)]"
        >
          QUERO FAZER PARTE
        </a>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10">
        <Waves className="block h-[100px] w-full" color="var(--ink)" />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--cream)]/70 py-10 px-6 text-center text-sm">
      <div className="font-display text-[var(--cream)] text-lg mb-2">SANTIFICADOS - 2026</div>
      <p>Retiro Cativar - feito com fé e suor pelos jovens à Rede Cativar.</p>
    </footer>
  );
}
