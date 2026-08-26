import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "After Concept — Production-ready products for founders",
  description: "Production-ready products for founders",
  // Yahan se icons object hata dein, Next.js 'app/icon.svg' automatically use karega
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-cream text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
