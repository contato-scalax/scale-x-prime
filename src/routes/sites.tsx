import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SitesHero } from "@/components/sites/SitesHero";
import { Showcase } from "@/components/sites/Showcase";
import { Portfolio } from "@/components/sites/Portfolio";
import { Impact } from "@/components/sites/Impact";
import { Timeline } from "@/components/sites/Timeline";
import { Differentials } from "@/components/sites/Differentials";
import { BeforeAfter } from "@/components/sites/BeforeAfter";
import { Technologies } from "@/components/sites/Technologies";
import { SitesCTA } from "@/components/sites/SitesCTA";

export const Route = createFileRoute("/sites")({
  head: () => ({
    meta: [
      { title: "ScalaX — Criação de Sites Premium" },
      {
        name: "description",
        content:
          "Sites, landing pages e experiências digitais desenvolvidas para converter. Tecnologia, design cinematográfico e foco em resultado.",
      },
      { property: "og:title", content: "ScalaX — Sites que Geram Resultados" },
      {
        property: "og:description",
        content:
          "Cases reais, processo validado e tecnologia de ponta para sites premium que convertem.",
      },
    ],
  }),
  component: SitesPage,
});

function SitesPage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <SitesHero />
        <Showcase />
        <Portfolio />
        <Impact />
        <Timeline />
        <Differentials />
        <BeforeAfter />
        <Technologies />
        <SitesCTA />
      </main>
      <Footer />
    </>
  );
}
