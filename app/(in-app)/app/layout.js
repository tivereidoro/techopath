import React from "react";

export default function layout({ children }) {
  return (
    <div className="relative flex flex-col items-center justify-center font-satoshi">
      <div className="w-full">{children}</div>
    </div>
  );
}
