import NewsCard from "@/components/Shared/NewsCard";
import React from "react";

export default function page() {
  return (
    <main className="container">
      <section id="hero" className="bg-zinc-600">
        <div className="flex justify-center">
          <h1 className=" text-[180px] font-bold flex space-x-8">
            <span className="text-primary ">RECENT</span>
            <span className=" text-secondary">NEWS</span>
          </h1>
        </div>
      </section>

      <section className="flex flex-col items-center m-4 space-y-4">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </section>
    </main>
  );
}
