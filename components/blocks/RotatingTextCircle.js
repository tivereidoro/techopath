"use client";

// RotatingTextCircle.jsx
import React, { useState, useEffect, useRef } from "react";

const RotatingTextCircle = () => {
  const [rotation, setRotation] = useState(0);
  const animationFrameId = useRef(null);

  return (
    <div className="group absolute bottom-0 right-0 grid aspect-square h-fit w-[40%] place-content-center rounded-full bg-bg-800 p-3 shadow">
      <div className="flex-center absolute h-[50%] w-[50%] translate-x-1/2 translate-y-1/2 rounded-full border border-bg-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          stroke-linejoin="round"
          className="lucide lucide-arrow-up-right stroke-current transition-all duration-300 group-hover:rotate-45"
        >
          <path d="M7 7h10v10"></path>
          <path d="M7 17 17 7"></path>
        </svg>
      </div>

      {/* className="relative font-normal uppercase leading-none"
        style="will-change: transform; transform: rotate(98.172deg);" */}
    </div>
  );
};

export default RotatingTextCircle;
