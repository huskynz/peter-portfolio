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
      <p>
        Hey there! I’m Peter.(Or HuskyNZ) Over the past three years, I’ve been
        diving deep in the tech world, Learning, Experimenting, and
        Administering. Azure, AWS, Intune, Cloudflare, Windows 7 through 11, and
        a spectrum of Windows Server editions from 2012R2 to 2022. I’ve worked
        with AD, AAD, Hybrid Environments (AAD sync), and Microsoft 365. Gotten
        a couple of Microsoft Certifications along the way—AZ-900 and MS-900. I
        also have learned a lot about Administrating and using Linux distros.
        But guess what? Learning’s an ongoing adventure! This year, I’ve taken a
        leap into full-stack development and even dipped my toes into the world
        of film. When I’m not deep in tech or the creative work, I’m crafting
        websites like the one you’re seeing and adding more certifications to my
        arsenal. The future? Oh, it's a world of possibilities that has me full
        of excitement!
      </p>
    </motion.section>
  );
}
