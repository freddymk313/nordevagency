import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nordev Agency · Digitalisation et automatisation pour entreprises africaines",
  description: "Vos devis, factures et suivis prêts en quelques minutes. Diagnostic gratuit sous 72 h, solutions à partir de 35 $/mois.",
  openGraph: {
    title: "Nordev Agency · Digitalisation et automatisation pour entreprises africaines",
    description: "Vos devis, factures et suivis prêts en quelques minutes. Diagnostic gratuit sous 72 h, solutions à partir de 35 $/mois.",
    type: "website",
  },
  icons: {
    icon: "/logo/logo-2.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F7F5",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={inter.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
