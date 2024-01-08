"use client";

import React from "react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NewsCard() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>BAYANIHAN E-KONSULTA, PATULOY NA UMAARANGKADA</CardTitle>
        <div className="flex justify-between">
          <CardDescription>Gibby Gorres</CardDescription>
          <CardDescription>June 1, 2023</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="truncate">
          Mahigit 6,000 pasyente, natulungan! (Originally published on February
          2, 2023) Sa loob lamang ng limang buwan, mahigit 6,000 pasyente ang
          nabigyan ng kalingang medikal ng Angat Buhay Foundation ni...
        </p>
        <Link href="/">Read more</Link>
      </CardContent>
    </Card>
  );
}
