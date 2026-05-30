import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Results } from "@/components/sections/Results";
import { PaidTraffic } from "@/components/sections/PaidTraffic";
import { Process } from "@/components/sections/Process";
import { Cases } from "@/components/sections/Cases";
import { Analytics } from "@/components/sections/Analytics";
import { LeadHunter } from "@/components/sections/LeadHunter";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ScalaX — Tecnologia, Performance e Escala" },
      {
        name: "description",
        content:
          "Escalamos negócios através de dados, tráfego pago e inteligência de campanhas. Crescimento previsível com tecnologia premium.",
      },
      { property: "og:title", content: "ScalaX — Tecnologia, Performance e Escala" },
      {
        property: "og:description",
        content:
          "Transformamos investimentos em crescimento previsível através de tráfego pago, automação e inteligência de campanhas.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Navbar />
      <main className="relative">
        <Hero />
        <Results />
        <PaidTraffic />
        <Process />
        <Cases />
        <Analytics />
        <LeadHunter />
      </main>
      <Footer />
    </>
  );
}
