import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScaleFunnel AI — AI-Powered Quiz Funnels for Coaches",
  description:
    "We build AI-powered quiz funnels and dynamic automation systems that turn cold traffic into booked coaching calls on autopilot.",
  openGraph: {
    title: "ScaleFunnel AI — AI-Powered Quiz Funnels for Coaches",
    description:
      "We build AI-powered quiz funnels and dynamic automation systems that turn cold traffic into booked coaching calls on autopilot.",
    type: "website",
  },
  alternates: {
    canonical: "https://scalefunnelai.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
