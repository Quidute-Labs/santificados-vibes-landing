import { MapPin, Calendar, Clock, Bus } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function Location() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 px-6 grain" style={{ background: "var(--sky)" }}>
      <div ref={ref} className="reveal mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--ink)]/70">Onde acontece</span>
          <h2 className="font-display text-4xl sm:text-6xl text-[var(--ink)] mt-3 mb-6 leading-[0.95]">
            Dois dias.
            <br />
            Uma chácara.
            <br />
          </h2>
          <ul className="space-y-4 text-[var(--ink)]">
            <li className="flex gap-3">
              <Calendar className="h-6 w-6 mt-0.5 text-[var(--blaze)]" />
              <div>
                <div className="font-bold">15 e 16 de Agosto de 2026</div>
                <div className="text-sm opacity-75">Sábado e domingo</div>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock className="h-6 w-6 mt-0.5 text-[var(--blaze)]" />
              <div>
                <div className="font-bold">Início 08h - Retorno 16h</div>
                <div className="text-sm opacity-75">Programação completa nos 2 dias</div>
              </div>
            </li>
            <li className="flex gap-3">
              <Bus className="h-6 w-6 mt-0.5 text-[var(--blaze)]" />
              <div>
                <div className="font-bold">Saída em frente à Rede Cativar</div>
                <div className="text-sm opacity-75">R. Souza Pôrto, 242 - St. Central, Araguaína - TO</div>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-6 w-6 mt-0.5 text-[var(--blaze)]" />
              <div>
                <div className="font-bold">Chácara Estrela</div>
                <div className="text-sm opacity-75">15 minutos da igreja</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="aspect-[4/3] rounded-3xl border-4 border-[var(--ink)] shadow-[10px_10px_0_var(--ink)] overflow-hidden relative bg-[var(--cream)]">
          <iframe
            title="Local de saída - Rede Cativar"
            src="https://www.google.com/maps?q=Ch%C3%A1cara+Estrela+-+Espa%C3%A7o+de+Eventos,+Aragua%C3%ADna,+TO&output=embed"
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
