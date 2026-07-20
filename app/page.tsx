import Hero from "@/app/_components/Hero";
import ServicesOverview from "@/app/_components/ServicesOverview";
import TechStack from "@/app/_components/TechStack";
import Process from "@/app/_components/Process";
import CTABanner from "@/app/_components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <ServicesOverview />
      <Process />
      <CTABanner />
    </>
  );
}
