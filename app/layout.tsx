import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "A Special Question",
  description: "A special question for a special person.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={greatVibes.className}>{children}</body>
    </html>
  );
}
