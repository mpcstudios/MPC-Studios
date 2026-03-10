import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Client-side utilities */}
      <Cursor />
      <RevealInit />

      {/* Navigation */}
      <Nav />

      {/* Page sections */}
      <main>
        <Hero />
        <Marquee />
        <ClientLogos />
        <Services />
        <Work />
        <About />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
