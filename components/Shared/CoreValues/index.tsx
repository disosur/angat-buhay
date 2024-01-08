import React from "react";

import Image from "next/image";

import creative from "@/public/Creative.webp";
import Values from "./Values";

export default function CoreValues() {
  return (
    <div className="flex space-x-4">
      <Image
        src={creative}
        alt="yes"
        width={600}
        height={600}
        className=" rounded-2xl"
      />
      <div className="w-full ">
        <Values />
      </div>
    </div>
  );
}
