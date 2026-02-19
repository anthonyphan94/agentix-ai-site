import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import ModuleShowcase from "@/components/ModuleShowcase";
import UseCases from "@/components/UseCases";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] relative">
      <MatrixRain />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <PainPoints />
        <StatsBar />
        <HowItWorks />
        <ModuleShowcase />
        <UseCases />
        <Features />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
