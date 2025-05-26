
import type { Metadata } from "next";
import "@/assets/css/app.min.css";
import "@/assets/css/style.css";
import "@/assets/css/fontawesome.min.css";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Mamigas Pharmaceuticals – Trusted Medicine Supplier",
  description:
    "Mamigas Pharmaceuticals is dedicated to supplying quality medicines to hospitals and distributors, supporting patient care and advancing community health across Ethiopia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    <html lang="en">
      <body className={``}>
        <Header />
        {children}
        <Footer/>
        {/* Proper JS loading */}
        <Script
          src="/assets/js/vendor/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/app.min.js" strategy="afterInteractive" />
        
      </body>
    </html>
  );
}
