import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/content";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
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
    <html lang="es" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-ink text-paper antialiased">
        {children}
      </body>
    </html>
  );
}
