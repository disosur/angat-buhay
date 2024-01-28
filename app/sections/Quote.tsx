"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section>
      <div className="bg-gradient-to-t from-[#302C26] h-48 empty" />
      <div className="flex items-center bg-[#302C26] h-screen justify-content">
        <div className="w-fit">
          <div className="container flex flex-wrap text-3xl font-bold text-white w-fit text-wrap">
            <span>
              Join our extensive volunteer network to make a meaningful impact
              on marginalized communities.{" "}
            </span>
            <span>Your involvement goes beyond just helping; </span>
            <span>
              it inspires visions and builds unity among diverse individuals.
            </span>
            <span className="text-pink-300">
              Together, we create positive change.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#302C26] h-48 empty:" />
    </section>
  );
}
