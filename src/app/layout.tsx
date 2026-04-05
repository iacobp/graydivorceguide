import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GrayDivorceGuide — Your Next Chapter Starts With Knowing Your Numbers",
  description:
    "Free financial tools for women navigating divorce after 45. Asset checklists, settlement calculators, lawyer scripts, and budget planners. Private, free, no account needed.",
  openGraph: {
    title: "GrayDivorceGuide — You're Not Starting Over. You're Starting to Choose.",
    description:
      "Free financial tools built for women in midlife divorce. Take control of your finances, ask the right questions, and design the life you actually want.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
