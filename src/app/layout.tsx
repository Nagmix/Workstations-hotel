import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TAJ SABA — Smart Hotel Platform · Executive Discovery",
  description:
    "منصة تاج سبأ الفندقية الذكية — عرض تنفيذي لاجتماع الاكتشاف. Digital Planetx × Taj Saba.",
  keywords: [
    "Taj Saba",
    "Smart Hotel",
    "Digital Planetx",
    "PMS",
    "POS",
    "Discovery",
  ],
  authors: [{ name: "Digital Planetx" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "TAJ SABA — Smart Hotel Platform",
    description:
      "Executive Discovery Presentation · Digital Planetx × Taj Saba",
    siteName: "Taj Saba",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${ibmPlexArabic.variable} antialiased presentation-root`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
