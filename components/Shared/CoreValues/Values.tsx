import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Values() {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col justify-between w-full h-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Creative & Effective Responsiveness
          </AccordionTrigger>
          <AccordionContent>
            At Angat Buhay, innovation is our heartbeat. We respond to evolving
            community needs with creativity and agility, embracing new solutions
            and empowering individuals to be part of the change.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Collective Spirit of Community Towards Solidarity:
          </AccordionTrigger>
          <AccordionContent>
            Unity fuels our mission. Together, we form a collective spirit,
            working towards a common goal. This shared sense of community
            towards solidarity creates strength, support, and a bond that
            transforms lives.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Accountability in the Service to the Nation:
          </AccordionTrigger>
          <AccordionContent>
            Our commitment runs deep. At Angat Buhay, accountability is not just
            a value—it's our promise. We hold ourselves to the highest
            standards, ensuring transparent, integral, and impactful service to
            the nation. Join us in this journey of hope and accountability.{" "}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
