import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatBot } from "@/components/sections/ChatBot";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Bright Horizon Network | 3 World-Class Campuses",
  description: "Leading educational institution with three campuses offering CBSE, International, and Technology-focused curricula. 35+ years of academic excellence and holistic student development.",
  keywords: ["bright horizon", "cbse school", "international school", "technology education", "best schools", "multi-campus education", "north campus", "south campus", "east campus"],
  openGraph: {
    title: "Bright Horizon Network | 3 World-Class Campuses",
    description: "35+ years of academic excellence across three state-of-the-art campuses",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          montserrat.variable
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
