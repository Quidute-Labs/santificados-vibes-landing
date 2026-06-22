import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/santificados/Hero";
import { Countdown } from "@/components/santificados/Countdown";
import { Experience } from "@/components/santificados/Experience";
import { Included } from "@/components/santificados/Included";
import { Location } from "@/components/santificados/Location";
import { Pricing } from "@/components/santificados/Pricing";
import { Gallery } from "@/components/santificados/Gallery";
import { Faq } from "@/components/santificados/Faq";
import { FinalCta, Footer } from "@/components/santificados/FinalCta";
import logoBadge from "@/assets/logo-badge.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Santificados - Retiro Cativar 2026" },
      { name: "description", content: "Dois dias de comunhao, palavra, adoracao e diversao. Participe do Retiro Santificados 2026 da Rede Cativar." },
      { property: "og:title", content: "Santificados - Retiro Cativar 2026" },
      { property: "og:description", content: "Dois dias de comunhao, palavra, adoracao e diversao. Participe do Retiro Santificados 2026 da Rede Cativar." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: logoBadge.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logoBadge.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[var(--cream)]">
      <Hero />
      <Countdown />
      <Experience />
      <Included />
      <Location />
      <Pricing />
      <Gallery />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
