"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
     <p>Welcome, I'm Peter. I have been working in Azure and AWS as well as Microsoft 365 for the last 3 years I have been honing my skills. I have gained 2 Microsoft Certifications the <a classname="underline" href="https://learn.microsoft.com/api/credentials/share/en-us/peter-gallwas/868D21A0115A6F3B?sharingId=ABDCE9AB036FFAC5">AZ-900</a> and the <a classname="underline" href="https://learn.microsoft.com/api/credentials/share/en-us/peter-gallwas/EF14C73EB99F9662?sharingId=ABDCE9AB036FFAC5">MS-900</a> I'm still learning and this year I have been expanding into full stack development and film</p>
    </motion.section>
  );
}