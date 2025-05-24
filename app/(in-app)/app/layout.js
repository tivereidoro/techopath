import React from "react";

export default function layout({ children }) {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 opacity-70 rounded-full blur-[200px]" />
      <div className="absolute top-[50%] -left-20 w-[400px] h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 opacity-70 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-pink-500 opacity-60 rounded-full blur-[200px]" />

      {children}
    </div>
  );
}
