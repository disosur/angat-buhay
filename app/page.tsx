import Image from "next/image";
import { Button } from "@/components/ui/button";

import heroImage from "@/public/hero-image.webp";
import creative from "@/public/creative&effective.png";

export default function Home() {
  return (
    <main className="mx-8 ">
      <section id="hero-section" className="flex flex-col justify-center">
        <div className="flex items-center space-x-10">
          <div className=" w-80">
            <p>
              Angat Buhay is a non-government organization that inspires hope
              and bayanihan by harnessing the energies of partners, volunteers,
              and supporters to empower Filipino communities, especially the
              marginalized.
            </p>
            <p>
              Angat Buhay is a non-government organization that inspires hope
              and bayanihan by harnessing the energies of partners, volunteers,
              and supporters to empower Filipino communities, especially the
              marginalized.
            </p>
            <div className="flex flex-col space-y-4">
              <Button>Get Involve</Button>
              <Button variant="outline">Learn about us</Button>
            </div>
          </div>
          <div>
            <h1 className=" text-[182px] flex flex-col">
              <span>Angat</span>
              <span>Buhay</span>
            </h1>
          </div>
        </div>
        <Image src={heroImage} alt="Hero Image" width={1376} height={368} />
      </section>

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

      <section id="recent-news">
        <h2>Recent News</h2>
        <div className="flex">
          <div>
            <Image src={heroImage} alt="" height={500} width={500} />
            <h3>Title</h3>
            <p>
              dawdawdawdawdadsdawddwddwdwdwadwd dawdawdawdawdawdawdawdawdwdwdwda
            </p>
          </div>
        </div>
      </section>

      <section id="more info section">
        <div className="flex flex-row">
          <p>
            Angat Buhay is a non-government organization that inspires hope and
            bayanihan by harnessing the energies of partners, volunteers, and
            supporters to empower Filipino communities, especially the
            marginalized.
          </p>
          <Image src={heroImage} alt="" height={500} width={500} />
        </div>
        <div className="flex flex-row-reverse">
          <p>
            Angat Buhay is a non-government organization that inspires hope and
            bayanihan by harnessing the energies of partners, volunteers, and
            supporters to empower Filipino communities, especially the
            marginalized.
          </p>
          <Image src={heroImage} alt="" height={500} width={500} />
        </div>
      </section>

      <section id="pillars"></section>

      <section id="contact"></section>
    </main>
  );
}
