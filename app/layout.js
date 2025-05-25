import "./globals.css";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: "./fonts/satoshi.ttf",
  variable: "--font-satoshi",
  weight: "100 900",
});

export const metadata = {
  title: "TechOPath",
  description: "Discover your personalised tech path with TechoPath",
  openGraph: {
    title: "TechoPath",
    description: "Discover your personalised tech path with TechoPath",
    url: "https://techopath.com",
    siteName: "TechoPath",
    images: [
      {
        url: "https://techopath.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechoPath Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechoPath",
    description: "Discover your personalised tech stack with TechoPath",
    images: ["https://techopath.com/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${satoshi.variable} antialiased text-base`}
      >
        {children}
      </body>
    </html>
  );
}
