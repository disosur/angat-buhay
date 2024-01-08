import React from "react";

import Image from "next/image";

import aboutHero from "@/public/hero-image.webp";

export default function page() {
  return (
    <main className="container">
      <section id="hero" className="bg-zinc-600">
        <div className="flex justify-center">
          <h1 className=" text-[180px] font-bold flex space-x-8">
            <span className="text-primary ">OUR</span>
            <span className=" text-secondary">STORY</span>
          </h1>
        </div>
      </section>

      <section id="quote" className="flex items-center h-40 mx-8 my-80">
        <h3 className="text-4xl text-center">
          <span className="font-bold text-primary">Angat Buhay Foundation</span>
          , formerly Angat Pinas, Inc., is a distinguished non-profit,
          non-governmental organization deeply embedded in the fabric of the
          Philippines. Launched on July 1, 2022, immediately following the
          conclusion of Vice President{" "}
          <span className="font-bold text-secondary">Leni Robredo's</span> term,
          our foundation is dedicated to perpetuating the impactful anti-poverty
          and pandemic response programs initiated during her tenure.
        </h3>
      </section>

      <section className="flex text-base">
        <div>
          <p>
            Under the unifying banner of "{" "}
            <span className="font-bold text-primary">
              Angat Buhay Foundation
            </span>
            ," which translates to 'improve life's condition' in Tagalog, our
            mission centers around key areas: health, education, food security,
            and disaster risk response. This commitment is not just a pledge but
            is exemplified through tangible projects aimed at effecting positive
            change in the lives of those we serve.
          </p>
          <br />
          <p>
            Our journey commenced with a dynamic two-day street party and art
            exhibit, with proceeds seamlessly integrated into our program funds.
            Among our inaugural projects, announced on June 30, 2022, is the
            establishment of a dormitory to support indigent students at the
            Southern Luzon State University (SLSU) in Quezon.
          </p>
        </div>

        <div>
          <p>
            The impact of Angat Buhay extends beyond projects. In July 2022, the
            Ateneo de Manila University acknowledged our contribution by naming
            a newly discovered species of water scavenger beetle in Ifugao after
            our anti-poverty program, scientifically termed Anacaena angatbuhay.
          </p>
          <br />
          <p>
            Reflecting on our journey, Vice President Leni Robredo shared in an
            interview reported by the Harvard International Review on October
            22, 2022, that Angat Buhay mobilized about a billion dollars during
            her term. Operating in over 300 communities and partnering with
            approximately 700 organizations, Angat Buhay has become synonymous
            with impactful and accountable service.
          </p>
        </div>
      </section>
    </main>
  );
}
