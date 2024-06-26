import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AskCa",
  description: "Askca Trading application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
