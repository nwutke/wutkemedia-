import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { description } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "../fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Inter-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Inter-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const syncopate = localFont({
  src: "../fonts/Syncopate-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-syncopate",
  display: "swap",
  preload: false,
});

const title = "Wutke Media — Creative for your next chapter.";
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Wutke Media",
  },
  description,
  applicationName: "Wutke Media",
  authors: [{ name: "Nicholas Wutke", url: "https://zlist.ca/nicholaswutke/portfolio" }],
  creator: "Nicholas Wutke",
  category: "design",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Wutke Media",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f6",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${syncopate.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
