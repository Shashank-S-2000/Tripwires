import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import HowItWorks from "../components/HowItWorks";
import ExampleReport from "../components/ExampleReport";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";




export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TrustSection />

        <HowItWorks />

        <ExampleReport />

        <Pricing />
        <FAQ />

        <Footer />

      </main>
    </>
  );
}