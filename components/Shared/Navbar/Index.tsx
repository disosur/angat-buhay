import React from "react";
import Logo from "@/public/Anagat-buhay-logo.svg";

import Link from "next/link";
import Image from "next/image";

import Links from "./Links";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className=" px-8 py-3 flex justify-between items-center">
      <Link href="/">
        <Image src={Logo} alt="Logo of angat buhay" height={24} width={24} />
      </Link>
      <Links />
      <Button>Get Involved</Button>
    </header>
  );
}
