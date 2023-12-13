"use client";

import React from "react";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const navigationLinks = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "Our People",
    href: "/our-people",
  },
  {
    name: "Museo ng pag-asa",
    href: "/",
  },
];

export default function Links() {
  return (
    <nav className="space-x-4 ">
      {navigationLinks.map((data) => (
        <Link key={data.name} href={data.href}>
          {data.name}
        </Link>
      ))}
    </nav>
  );
}
