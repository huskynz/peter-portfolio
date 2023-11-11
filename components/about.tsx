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
     <p>Greetings! My name is Peter. Over the past three years, I’ve been refining my skills in Azure, AWS, and Microsoft 365. During this time, I’ve earned two Microsoft Certifications: the AZ-900 and the MS-900. My learning journey continues, and this year, I’ve ventured into full-stack development and film. My ambition is to become a full-fledged Cloud Engineer and Architect. In my spare time, I take pleasure in creating websites like this one and acquiring the knowledge necessary to earn more Microsoft Certifications. I’m excited about what the future holds!</p>
    </motion.section>
  );
}