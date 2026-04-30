import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MPC Studios — Design & Digital Agency | Texas",
  description:
    "Texas-based digital agency delivering bold websites, brand identity, AI automations, and growth strategies. Serving banking, legal, and construction industries since 1998.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body
        className="antialiased"
        style={{ fontFamily: 'var(--font-body, "DM Sans", sans-serif)' }}
      >
        <Nav />
        {children}
        <PageTransition />
      </body>
    </html>
  );
}
