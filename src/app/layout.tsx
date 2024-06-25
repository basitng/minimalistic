import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magic UI - Minimal, beautiful, and fast UI Kit for cracked engineers",
  description: "Minimal, beautiful, and fast UI Kit for cracked engineers",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://magicui-temp.vercel.app",
    images: [
      {
        url: "https://magicui.design/icon.png",
        width: 1200,
        height: 630,
        alt: "Magic UI blank temp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(`bg-[#f7f7f8]`, inter.className)}>{children}</body>
    </html>
  );
}
