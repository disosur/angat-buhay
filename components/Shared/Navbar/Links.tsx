import React from "react";
import Link from "next/link";

const navigationLinks = [
  {
    name: "About",
    href: "/",
  },
  {
    name: "News",
    href: "/",
  },
  {
    name: "Who we are",
    href: "/",
  },
  {
    name: "Museo ng pag-asa",
    href: "/",
  },
];

export default function Links() {
  return (
    <nav className=" space-x-4">
      {navigationLinks.map((data) => (
        <Link key={data.name} href={data.href}>
          {data.name}
        </Link>
      ))}
    </nav>
  );
}
