import { About } from "@/components/About";
import { CoachingOptions } from "@/components/CoachingOptions";
import { EnquireForm } from "@/components/EnquireForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Results } from "@/components/Results";
import { SiteProvider } from "@/components/SiteProvider";
import { ThePlan } from "@/components/ThePlan";
import { WhoItsFor } from "@/components/WhoItsFor";

export default function Home() {
  return (
    <SiteProvider>
      <Header />
      <main>
        <Hero />
        <ThePlan />
        <HowItWorks />
        <CoachingOptions />
        <Results />
        <About />
        <WhoItsFor />
        <FAQ />
        <EnquireForm />
      </main>
      <Footer />
    </SiteProvider>
  );
}
