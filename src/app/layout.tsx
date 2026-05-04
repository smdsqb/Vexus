import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vexus — Racing-Inspired Apparel",
  description:
    "Premium racing-inspired jackets and hoodies for India and Singapore. No noise. No logos. Just the energy of speed, made wearable.",
  keywords: ["racing apparel", "motorsport clothing", "jackets", "hoodies", "India", "Singapore"],
  openGraph: {
    title: "Vexus — Racing-Inspired Apparel",
    description: "Speed made wearable. Season 01 now live.",
    siteName: "Vexus",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Replace with your favicon once ready */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
