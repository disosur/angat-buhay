import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import creative from "@/public/creative&effective.png";
import hero1 from "@/public/Hero-1.webp";
import hero2 from "@/public/Hero-2.webp";
import NewsCard from "@/components/Shared/NewsCard";

export default function Home() {
  return (
    <main className="container px-8 mx-auto space-y-48">
      <section
        id="hero-section"
        className="flex flex-col items-center justify-center gap-8 my-14">
        <h1 className=" text-[180px] font-bold flex flex-col">
          <div className="flex items-center gap-10">
            <span className="text-pink-400 ">ANGAT</span>
            <Image
              src={hero1}
              alt="hero image 1"
              width={500}
              height={500}
              className="select-none rounded-3xl"
            />
          </div>
          <div className="flex flex-row-reverse items-center gap-10">
            <span className=" text-sky-400">BUHAY</span>
            <Image
              src={hero2}
              alt="hero image 2"
              width={500}
              height={500}
              className="select-none rounded-3xl"
            />
          </div>
        </h1>
        <div className="space-x-8 ">
          <Button>Get involve</Button>
          <Button variant="outline">Learn about us</Button>
        </div>
      </section>

      <section id="quote" className="flex items-center mx-8 my-80 h-96">
        <h3 className="text-4xl text-center">
          "Empowering Dreams, Building Communities: Join Our{" "}
          <span className="font-bold text-pink-400">Bayanihan Movement </span>
          for Dignity and Hope. Be a part of the{" "}
          <span className="font-bold text-sky-400">
            Largest Volunteer Network{" "}
          </span>
          in the country Creating Positive Change in Marginalized Communities."
        </h3>
      </section>

      {/*
      <section id="core-values" className="flex">
        <Image
          src={creative}
          alt="yes"
          width={676}
          height={735}
          className=" rounded-2xl"
        />
        <div>
          <div>
            <h3>Creative & Effective Responsiveness</h3>
            <p>
              We respond to evolving community needs with creativity and
              agility, embracing new solutions and empowering individuals to be
              part of the change.
            </p>
          </div>
          <div>
            <h3>Creative & Effective Responsiveness</h3>
            <p>
              We respond to evolving community needs with creativity and
              agility, embracing new solutions and empowering individuals to be
              part of the change.
            </p>
          </div>
          <div>
            <h3>Creative & Effective Responsiveness</h3>
            <p>
              We respond to evolving community needs with creativity and
              agility, embracing new solutions and empowering individuals to be
              part of the change.
            </p>
          </div>
        </div>
      </section>
*/}

      <section id="more info section" className="space-y-20 text-lg">
        <div className="flex flex-row justify-evenly">
          <p className="max-w-lg gap-4 ">
            <span>
              Angat Buhay is a non-government organization that inspires hope
              and bayanihan by harnessing the energies of partners, volunteers,
              and supporters to empower Filipino communities, especially the
              marginalized.
            </span>
            <br />
            <br />
            <span>
              Following the people&apos;s campaign of former Vice President Leni
              Robredo in 2022, Angat Buhay traces its roots as a government
              program under the Office of the Vice President of the Philippines
              that had several successful initiatives and projects.
            </span>
          </p>
          <Image
            src={creative}
            alt=""
            height={500}
            width={500}
            className="select-none rounded-3xl"
          />
        </div>

        <div className="flex flex-row-reverse justify-evenly">
          <p className="max-w-lg gap-4 ">
            <span>
              Building on these, Angat Buhay continues to implement
              community-centered and sustainable development initiatives focused
              on education, health and nutrition, disaster relief and
              rehabilitation, and community engagement and empowerment.
            </span>
            <br />
            <br />
            <span>
              Under the leadership of Chairperson Atty. Leni Robredo and
              Executive Director Raffy Magno, Angat Buhay continues to inspire
              hope and bayanihan with partners, volunteers, and supporters to
              empower marginalized Filipino communities.
            </span>
          </p>
          <Image
            src={creative}
            alt=""
            height={500}
            width={500}
            className="select-none rounded-3xl"
          />
        </div>
      </section>

      <section id="recent-news" className="mx-8 space-y-4">
        <h2 className="text-3xl font-semibold">Recent News</h2>
        <div className="flex space-x-4">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <Link href="/">Learn news</Link>
      </section>

      <section id="pillars"></section>

      <section id="contact"></section>
    </main>
  );
}
