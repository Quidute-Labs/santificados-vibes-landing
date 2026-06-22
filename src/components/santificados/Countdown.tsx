import { useEffect, useState } from "react";
import { EVENT_START_ISO } from "@/lib/santificados-config";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms / 3600000) % 24);
  const m = Math.floor((ms / 60000) % 60);
  const s = Math.floor((ms / 1000) % 60);
  return { d, h, m, s };
}

function Cell({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="font-display text-4xl sm:text-6xl md:text-7xl rounded-2xl bg-[var(--cream)] text-[var(--ink)] px-5 sm:px-7 py-4 shadow-[0_6px_0_var(--blaze)] tabular-nums min-w-[5rem] text-center">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-3 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-[var(--cream)]/80">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const target = new Date(EVENT_START_ISO).getTime();
  const [t, setT] = useState(() => diff(target));
  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section id="contador" className="relative grain py-20 px-6" style={{ background: "var(--ink)" }}>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl sm:text-5xl text-[var(--sun)] mb-3">
          A contagem já começou
        </h2>
        <p className="text-[var(--cream)]/70 mb-10 text-sm sm:text-base">15 e 16 de Agosto de 2026</p>
        <div className="flex justify-center gap-3 sm:gap-6 flex-wrap">
          <Cell value={t.d} label="Dias" />
          <Cell value={t.h} label="Horas" />
          <Cell value={t.m} label="Min" />
          <Cell value={t.s} label="Seg" />
        </div>
      </div>
    </section>
  );
}