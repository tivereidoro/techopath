"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React, { useState } from "react";
import { Text, X } from "lucide-react";
import { NavItems } from "@/lib/ui_config";
import {} from "@/lib/config";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import MainLogo from "@/components/ui/MainLogo";

// ==============================
// ============= Homepage Navbar
// ==============================
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = NavItems();

  return (
    <div className="border-gray-600 border-b shadow-sm">
      <header className="container px-4 lg:px-0 py-6 sm:py-8 w-full mx-auto ">
        <nav className="flex w-full items-center mx-auto px-3   shrink-0 justify-between">
          <Link href="/" className="flex items-center" prefetch={false}>
            {/* <MainLogo /> */}
            <Image
              src={"/svgs/techOpath.png"}
              width={50}
              height={30}
              alt="logo"
            />
            <Image
              src={"/svgs/techOpathText.png"}
              width={220}
              height={180}
              alt="logo"
              className="hidden md:block ml-2 opacity-70"
              style={{ width: "auto", height: "30px" }}
            />
          </Link>

          <div className="flex items-center justify-between">
            <div className="hidden md:flex gap-10 items-center">
              <div className="flex gap-10 text-xl">
                {navItems.map((item) => (
                  <Link
                    href={item.href}
                    key={item.id}
                    className={`${
                      item.active ? "text-primary" : "text-golden-logo"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* CTA button */}
              <Link href={"/app"}>
                <Button
                  className={`p-6 border bg-transparent border-golden-logo`}
                >
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              title="menuButton"
              className="flex md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={25} /> : <Text size={25} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile screen menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="left"
          className="block md:hidden w-[360px] max-[370px]:w-64"
        >
          <SheetHeader>
            <SheetTitle>
              <Link href="/" className="flex items-center" prefetch={false}>
                <Image
                  src={"/svgs/next.svg"}
                  width={30}
                  height={30}
                  alt="logo"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>

          <div className="mt-11  overflow-y-auto h-fit w-full flex flex-col gap-6 font-inter">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`h-full relative flex items-center whitespace-nowrap rounded-md ${
                  item.active
                    ? "text-primary shadow-sm"
                    : "text-[#000E2E] hover:bg-neutral-200  hover:text-neutral-700"
                }`}
              >
                <div className="relative font-bold text-lg px-1.5 flex flex-row items-center rounded-md duration-100">
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}

            {/* CTA button */}
            <div className="flex">
              <Button className="mt-1.5">
                <Link href={"/app"}>Get Started</Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
