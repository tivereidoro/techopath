"use client";

import { usePathname } from "next/navigation";
import { getStartedLink } from "@/lib/config";
import { Github, UserRound } from "lucide-react";
// import { Github } from "lucide-react";

/**
 * @NavItems
 * @return - List of navbar items
 */
export const NavItems = () => {
  // Use pathname and .include() method
  // to return boolean to check if navitem is active
  const pathname = usePathname();

  return [
    {
      id: 1,
      name: "Github",
      icon: Github,
      href: "https://github.com/tivereidoro/techopath",
      active: pathname === "/github",
    },
    {
      id: 2,
      name: "Dev",
      icon: UserRound,
      href: "https://www.tivere.tech",
      active: pathname === "/dev",
    },
  ];
};
