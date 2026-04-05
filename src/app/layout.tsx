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
  title: "GrayDivorceGuide — Financial Planning for Midlife Divorce",
  description:
    "Free tools and guides to protect your finances during a gray divorce. Asset checklists, settlement calculators, lawyer scripts, and budget planners for women 45+.",
  openGraph: {
    title: "GrayDivorceGuide — Financial Planning for Midlife Divorce",
    description:
      "91% of divorcing midlife women get zero financial advice. We're changing that with free tools.",
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
