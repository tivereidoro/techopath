import Image from "next/image";
import React from "react";

export default function MainLogo() {
  return (
    <div className="flex items-center cursor-pointer">
      <Image src={"/svgs/techOpath.png"} width={"50"} height={30} alt="logo" />

      <Image
        src={"/svgs/techOpathText.png"}
        width={220}
        height={180}
        alt="logo"
        className="hidden md:block ml-2 opacity-70"
        style={{ width: "auto", height: "30px" }}
      />
    </div>
  );
}
