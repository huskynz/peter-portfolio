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
     <p>Hi! My name is Peter. For the last 3 years I have been working with Azure, AWS, Intune,Windows 7,8.1,10,11 and Windows Server 2012R2,2016,2019,2022,AD,AAD,Hybrid Enviromet (AAD sync), and Microsoft 365. During this time, I’ve earned two Microsoft Certifications: the AZ-900 and the MS-900. My learning journey continues, and this year, I’ve ventured into full-stack development and film. In my spare time, I create websites like this one and study to earn more Certifications. I’m excited about what the future holds!</p>
    </motion.section>
  );
}