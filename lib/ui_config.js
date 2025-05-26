"use client";

import { usePathname } from "next/navigation";
import { Github, UserRound } from "lucide-react";

/**
 * NavItems - Generate a list of navbar menu items.
 * @return {Array} - List of navbar menu items
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
