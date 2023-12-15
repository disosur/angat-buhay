"use client";

import React from "react";
import Logo from "@/public/Anagat-buhay-logo.svg";

import Link from "next/link";
import Image from "next/image";

import Links from "./Links";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed z-50 flex items-center px-8 py-3 space-x-16 transform -translate-x-1/2 border-2 bottom-4 left-1/2 justify-evenly bg-background rounded-3xl w-fit">
      <Link href="/">
        <Image
          src={Logo}
          alt="Logo of angat buhay"
          height={24}
          width={24}
          className="w-full h-auto"
        />
      </Link>
      <Links />
      <Link href="#contact">
        <Button className=" text-background">Get Involved</Button>
      </Link>
    </header>
  );
}
