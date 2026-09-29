import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import type { Metadata } from "next";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://juniorsautodetailing.ie"),
  title: "Junior's Auto Detailing | Bespoke Detailing & Ceramic Coatings Ireland",
  description:
    "Master-level vehicle detailing, multi-stage paint correction, and certified ceramic coatings in Ireland (Athlone / Roscommon). Call +92 304 1237882.",
  keywords: [
    "Car detailing Ireland",
    "Athlone car detailing",
    "Roscommon auto detailer",
    "Ceramic coating Ireland",
    "Paint correction Athlone",
    "Junior's Auto Detailing",
  ],
  authors: [{ name: "Junior's Auto Detailing" }],
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    title: "Junior's Auto Detailing | Bespoke Detailing & Ceramic Coatings",
    description:
      "Precision automotive detailing, paint revival, and ceramic surface protection serving the Midlands and West of Ireland.",
    url: "https://juniorsautodetailing.ie",
    siteName: "Junior's Auto Detailing",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 750,
        alt: "Junior's Auto Detailing Logo",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="bg-[#F8F7F4] text-neutral-900 font-sans antialiased selection:bg-[#B38E3F] selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <WhatsAppFloatingButton />
        <Footer />
      </body>
    </html>
  );
}
