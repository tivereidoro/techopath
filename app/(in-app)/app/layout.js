import React from "react";

export default function layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      {children}
    </div>
  );
}
