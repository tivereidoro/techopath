import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

// import { Geist } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

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
    url: "https://techopath.vercel.app",
    siteName: "TechOpath",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${satoshi.variable} antialiased text-base`}
      >
        <div className="relative max-h-screen overflow-auto flex flex-col">
          <Navbar />

          <div className="fixed -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 opacity-70 rounded-full blur-[200px]" />
          <div className="fixed top-60 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#E8BB6A] to-indigo-500 opacity-40 rounded-full blur-[200px]" />
          {/* opacity-60 via-fuchsia-500  Gold - #E8BB6A -translate-x-1/2 */}
          <div className="fixed w-[500px] h-[400px] bg-gradient-to-tr from-indigo-700 via-fuchsia-400 to-pink-500  rounded-full bottom-0 left-0 opacity-20 blur-3xl" />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
