import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_COMPANY_NAME} — Apps, Websites & Digital Solutions`,
  description: `${process.env.NEXT_PUBLIC_COMPANY_NAME} builds high-performance apps and websites using modern technologies. We also offer ongoing maintenance and upgrades.`,
  keywords: ["web development", "app development", "Python", "TypeScript", "Next.js", "maintenance"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
