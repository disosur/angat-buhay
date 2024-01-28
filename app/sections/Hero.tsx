import React from "react";
import Image from "next/image";
import logo from "@/public/angat-buhay-logo.svg";

export default function Hero() {
  return (
    <section className="flex items-center justify-center w-full h-screen">
      <div className="flex items-center gap-4 mr-2 w-fit ">
        <div>
          <Image src={logo} alt="logo" height={48} width={48} />
        </div>
        <h1 className="flex flex-col text-3xl font-bold">
          <span>ANGAT</span>
          <span>BUHAY</span>
        </h1>
      </div>
    </section>
  );
}
