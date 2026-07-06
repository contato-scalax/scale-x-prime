import { createFileRoute } from "@tanstack/react-router";
import { useState, lazy, Suspense } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";

// Lazy load non-critical sections
const Results = lazy(() => import("@/components/sections/Results").then(m => ({ default: m.Results })));
const Projects = lazy(() => import("@/components/sections/Projects").then(m => ({ default: m.Projects })));
const WebDev = lazy(() => import("@/components/sections/WebDev").then(m => ({ default: m.WebDev })));
const PaidTraffic = lazy(() => import("@/components/sections/PaidTraffic").then(m => ({ default: m.PaidTraffic })));
const Process = lazy(() => import("@/components/sections/Process").then(m => ({ default: m.Process })));
const Cases = lazy(() => import("@/components/sections/Cases").then(m => ({ default: m.Cases })));
const Analytics = lazy(() => import("@/components/sections/Analytics").then(m => ({ default: m.Analytics })));
const LeadHunter = lazy(() => import("@/components/sections/LeadHunter").then(m => ({ default: m.LeadHunter })));

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
      { property: "og:image", content: "/scalax-social.png" },
      { name: "twitter:image", content: "/scalax-social.png" },
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
        <Suspense fallback={<div className="h-96 w-full animate-pulse bg-scalax-deep/20" />}>
          <Projects />
          <Results />
          <WebDev />
          <PaidTraffic />
          <Process />
          <Cases />
          <Analytics />
          <LeadHunter />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
