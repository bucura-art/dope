import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const modak = localFont({
  src: "../public/fonts/Modak-Regular.ttf",
  variable: "--font-modak",
});

const panchang = localFont({
  src: "../public/fonts/Panchang-Variable.ttf",
  variable: "--font-panchang",
});

const squadaOne = localFont({
  src: "../public/fonts/SquadaOne-Regular.ttf",
  variable: "--font-squada-one",
});

const technor = localFont({
  src: "../public/fonts/Technor-Variable.ttf",
  variable: "--font-technor",
});

const kalam = localFont({
  src: "../public/fonts/Kalam-Variable.ttf",
  variable: "--font-kalam",
});

export const metadata: Metadata = {
  title: "The Dope Company — Independent Digital Product Studio",
  description:
    "We build things the internet didn’t know it needed. Independent digital product studio based in Kigali, Rwanda.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${modak.variable} ${panchang.variable} ${squadaOne.variable} ${technor.variable} ${kalam.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
