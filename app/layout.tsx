import type { Metadata, Viewport } from "next";
import { League_Spartan } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const glacial = localFont({
  src: [
    { path: "./fonts/GlacialIndifference-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/GlacialIndifference-Italic.otf", weight: "400", style: "italic" },
    { path: "./fonts/GlacialIndifference-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-glacial",
  display: "swap",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Liam Collins Coaching",
  description:
    "Personalised coaching to help you run further, get faster, get stronger or change your body — built around the life you actually live.",
};

export const viewport: Viewport = {
  themeColor: "#161412",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${glacial.variable} ${leagueSpartan.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink font-sans text-white">{children}</body>
    </html>
  );
}
