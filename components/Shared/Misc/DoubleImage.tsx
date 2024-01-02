"use client";

import React from "react";

import Image from "next/image";

import BG from "@/public/Creative.webp";

let yes = "21";

interface DoubleImageProps {}

export default function DoubleImage() {
  return (
    <div className=" relative w-[33rem] h-[23rem]">
      <Image
        className="absolute top-0 left-0 z-40 saturate-150 rounded-2xl "
        src={BG}
        alt="{yes}"
        height={500}
        width={500}
      />
      <Image
        className="absolute bottom-0 right-0 z-0 rounded-2xl blur-sm hue-rotate-15 "
        src={BG}
        alt="{yes}"
        height={500}
        width={500}
      />
    </div>
  );
}
