import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import "@/styles/globals.css";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: "Hana Corner Café | Specialty Coffee & Brunch — Tirana",
  description: "Warm, artisanal specialty coffee and brunch in Tirana, Albania.",
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable} bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased`}>
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
