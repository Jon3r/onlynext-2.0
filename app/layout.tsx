import type { Metadata } from "next";
import { Zen_Dots, Roboto } from "next/font/google";
import "./globals.css";
import { motion } from "motion/react";

const zeDots = Zen_Dots({
  weight: "400",
  variable: "--font-ze-dots",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Only Jonesy",
  description: "Web development and marketing specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${zeDots.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
