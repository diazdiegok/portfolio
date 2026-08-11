import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/content";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.headline} ${profile.location}.`,
  metadataBase: new URL("https://diegodiaz.vercel.app"),
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.headline,
    locale: "es_AR",
    type: "website",
    images: [{ url: "/diego.png" }],
  },
  icons: { icon: "/diego.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${cormorant.variable}`}>
      <body className="bg-ink text-paper antialiased">
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
