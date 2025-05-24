import React from "react";

// This is the 2nd level layout
export default function layout({ children }) {
  return (
    <div>
      <div>2nd level layout</div>
      {children}
    </div>
  );
}
