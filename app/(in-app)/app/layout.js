import React from "react";
import Navbar from "@/components/layout/Navbar";

export default function layout({ children }) {
  return (
    <div className="relative flex flex-col items-center justify-center font-satoshi">
      <div>
        <Navbar />

        {children}
      </div>
    </div>
  );
}
