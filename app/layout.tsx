import type { Metadata } from "next";
import {
  Inter,
  Pixelify_Sans,
  Roboto_Mono,
  Roboto_Condensed,
} from "next/font/google";
import doto from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// ----------------- Fonts -----------------
const dotoFont = doto({
  src: "./fonts/doto.ttf",
  variable: "--font-doto",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify",
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  weight: ["100", "300", "400", "700"],
});

// ----------------- SEO Metadata -----------------
export const metadata: Metadata = {
  metadataBase: new URL("https://malaypatel.com"), // ← Change here if using a different domain

  title: {
    default: "Malay Patel — Frontend Developer & UI Engineer",
    template: "%s | Malay Patel",
  },

  description:
    "Portfolio of Malay Patel, a frontend developer specializing in React, Next.js, Tailwind CSS, animations, and modern UI engineering. Explore projects, experience, and skills.",

  keywords: [
    "Malay Patel",
    "Malay Patel Portfolio",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "UI Engineer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer India",
    "Full Stack Developer",
    "Modern UI/UX",
  ],

  authors: [{ name: "Malay Patel", url: "https://malaypatel.com" }],
  creator: "Malay Patel",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://malaypatel.com",
    siteName: "Malay Patel — Frontend Developer Portfolio",

    title: "Malay Patel — Frontend Developer & UI Engineer",
    description:
      "Explore the portfolio of Malay Patel, showcasing modern UI, animations, React, Next.js, and advanced frontend engineering projects.",

    images: [
      {
        url: "/og-image.png", // ← Add this file inside public/
        width: 1200,
        height: 630,
        alt: "Malay Patel Portfolio Hero Image",
      },
    ],
    
  },

  twitter: {
    card: "summary_large_image",
    title: "Malay Patel — Frontend Developer & UI Engineer",
    description:
      "A modern portfolio showcasing the work of Malay Patel — React, Next.js, UI engineering, animations, and high-performance web development.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // optional but recommended
  },

  alternates: {
    canonical: "https://malaypatel.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// ----------------- Layout -----------------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${pixelifySans.variable} ${robotoMono.variable} ${robotoCondensed.variable} ${dotoFont.variable} 
        antialiased selection:bg-purple-700 selection:text-purple-100 bg-black selection:font-pixelify`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
