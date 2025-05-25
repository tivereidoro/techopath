"use client";

import { usePathname } from "next/navigation";
import { getStartedLink } from "@/lib/config";

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
      name: "About Us",
      href: "/about",
      active: pathname === "/about",
    },
    {
      id: 2,
      name: "Start your delivery",
      href: getStartedLink,
      active: pathname === "/delivery",
    },
  ];
};
