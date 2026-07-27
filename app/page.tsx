import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Statistics from "./_components/Statistics";
import ServicesOverview from "./_components/ServicesOverview";
import Process from "./_components/Process";
import TechStack from "./_components/TechStack";
import CTABanner from "./_components/CTABanner";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Statistics />
        <ServicesOverview />
        <Process />
        <TechStack />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
