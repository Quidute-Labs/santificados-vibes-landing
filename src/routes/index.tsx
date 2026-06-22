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

const OG_IMAGE = "https://santificados-waves-2026.lovable.app/assets/logo-badge.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Santificados - Retiro Cativar 2026" },
      { name: "description", content: "Dois dias de comunhao, palavra, adoracao e diversao. Participe do Retiro Santificados 2026 da Rede Cativar." },
      { property: "og:title", content: "Santificados - Retiro Cativar 2026" },
      { property: "og:description", content: "Dois dias de comunhao, palavra, adoracao e diversao. Participe do Retiro Santificados 2026 da Rede Cativar." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
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
