import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { themeInitScript } from "@/lib/theme-init";
import "./globals.css";

import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import TargetCursor from "@/components/ui/TargetCursor";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "After Concept",
    template: "%s | After Concept",
  },
  description:
    "After Concept builds production-ready digital products for founders — custom software, AI integrations, product design, and growth engineering.",
  metadataBase: new URL("https://afterconcept.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://afterconcept.io",
    siteName: "After Concept",
    title: "After Concept",
    description:
      "After Concept builds production-ready digital products for founders — custom software, AI integrations, product design, and growth engineering.",
    images: [
      {
        url: "/images/brand/og-image.png", // TODO: add a 1200×630 OG image
        width: 1200,
        height: 630,
        alt: "After Concept — Custom Software & AI for Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "After Concept",
    description:
      "Production-ready digital products for founders with validated ideas.",
    images: ["/images/brand/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-page overflow-x-hidden">
        <TargetCursor targetSelector="a, button" cursorColor="var(--color-primary-text)" cursorColorOnTarget="var(--color-accent)" />
        <NoiseOverlay />
        <div className="relative z-10 flex-1 bg-page bg-tech-grid shadow-[0_20px_40px_rgba(0,0,0,0.2)] md:shadow-[0_30px_60px_rgba(0,0,0,0.15)] rounded-b-[24px] md:rounded-b-[40px] transition-colors duration-300 max-w-[100vw] overflow-x-hidden">
          <Header />
          <main className="pt-header">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}