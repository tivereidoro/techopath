"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React, { useState } from "react";
import MainLogo from "@/components/ui/MainLogo";
import { Text, X } from "lucide-react";
import { NavItems } from "@/lib/ui_config";
import { Button } from "@/components/ui/button";

// ==============================
// ============= Homepage Navbar
// ==============================
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = NavItems();

  return (
    <div className="border-gray-600 border-b shadow-sm">
      <header className="container px-4 lg:px-0 py-4 sm:py-7 w-full mx-auto ">
        <nav className="flex w-full items-center mx-auto px-3   shrink-0 justify-between">
          <Link href="/" className="flex items-center" prefetch={false}>
            <MainLogo />
          </Link>

          <div className="flex items-center justify-between">
            <div className="hidden md:flex gap-10 items-center">
              <div className="flex gap-10 text-xl">
                {navItems.map((item) => (
                  <Link
                    href={item.href}
                    key={item.id}
                    className={`flex items-center gap-1.5 ${
                      item.active
                        ? "text-primary"
                        : "text-golden-logo hover:scale-105"
                    }`}
                  >
                    {<item.icon className="size-5" />}
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* CTA button */}
              <Link href={"/app"}>
                <Button
                  className={`p-6 border bg-transparent border-golden-logo gradient-text text-base cursor-pointer hover:scale-105`}
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
              {isOpen ? <X size={28} /> : <Text size={35} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile screen menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="right"
          className="block md:hidden w-[340px] max-[360px]:w-64 border-gray-900"
        >
          <SheetHeader>
            <SheetTitle>
              <Link href="/" className="flex items-center" prefetch={false}>
                <MainLogo />
              </Link>
            </SheetTitle>
          </SheetHeader>

          <div className="mt-8 px-4 overflow-y-auto h-fit w-full flex flex-col gap-6 font-inter">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`h-full relative flex items-center whitespace-nowrap rounded-md ${
                  item.active
                    ? "text-primary shadow-sm"
                    : "text-golden-logo hover:scale-x-110"
                }`}
              >
                <div className="relative font-bold text-lg px-1.5 flex flex-row items-center rounded-md duration-100">
                  <span className="flex items-center gap-1.5">
                    {<item.icon className="size-5" />} {item.name}
                  </span>
                </div>
              </Link>
            ))}

            {/* CTA button */}
            <div className="flex">
              <Button className="mt-1.5 p-6 border border-golden-logo gradient-text text-base">
                <Link href={"/app"}>Get Started</Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
