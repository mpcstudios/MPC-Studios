import type { ReactNode } from "react";
import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

/**
 * Standard chrome for a service detail page: cursor, reveal observer,
 * nav, CTA, and footer. Pages compose their own sections as children.
 */
export default function ServicePageShell({
  children,
  showCTA = true,
}: {
  children: ReactNode;
  showCTA?: boolean;
}) {
  return (
    <>
      <Cursor />
      <RevealInit />
      <Nav />
      <main>
        {children}
        {showCTA && <CTA />}
      </main>
      <Footer />
    </>
  );
}
