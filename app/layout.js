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
        <div className="relative max-h-screen overflow-auto flex flex-col">
          <div className="fixed -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 opacity-70 rounded-full blur-[200px]" />
          {/* <div className="absolute top-[50%] -left-20 w-[400px] h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 opacity-30 rounded-full blur-[200px]" /> */}
          <div className="fixed top-60 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#E8BB6A] to-indigo-500 opacity-40 rounded-full blur-[200px]" />

          {/* opacity-60 via-fuchsia-500  Gold - #E8BB6A -translate-x-1/2 */}
          <div className="fixed w-[500px] h-[400px] bg-gradient-to-tr from-indigo-700 via-fuchsia-400 to-pink-500  rounded-full z-1 bottom-0 left-0 opacity-20 blur-3xl" />

          {children}
        </div>
      </body>
    </html>
  );
}
