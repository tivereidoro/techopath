import React from "react";
import Navbar from "@/components/layout/Navbar";

export default function layout({ children }) {
  return (
    <div className="relative flex flex-col items-center justify-center  font-satoshi">
      <div className="fixed -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 opacity-70 rounded-full blur-[200px]" />
      <div className="absolute top-[50%] -left-20 w-[400px] h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 opacity-30 rounded-full blur-[200px]" />
      <div className="fixed top-60 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-700 via-fuchsia-400 to-pink-500 opacity-80 rounded-full blur-[200px]" />

      {/* opacity-60 via-fuchsia-500  Gold - #E8BB6A*/}
      <div className="absolute w-[500px] h-[400px] bg-gradient-to-tr from-[#E8BB6A] to-indigo-500  rounded-full z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 blur-[90px]" />

      <Navbar />

      {children}
    </div>
  );
}
