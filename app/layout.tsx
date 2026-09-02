import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "After Concept — Production-ready products for founders",
  description: "Production-ready products for founders",
  icons: {
    icon: "/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}