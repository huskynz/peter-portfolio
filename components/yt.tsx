"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export function Video(props: { src: string }) { return ( <div className="aspect-h-16 aspect-w-20 md:aspect-w-18 md:aspect-h-10"> <iframe className="rounded-lg" src={props.src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> </div> ); }


export default function Youtube() {
  const { ref } = useSectionInView("Projects");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="yt"
    >
    <SectionHeading>Some of my Videos</SectionHeading>
    <div className="grid grid-cols-2 space-x-1">
    <Video src="https://www.youtube.com/embed/NSNoX-BMakE" />

    <Video src="https://www.youtube.com/embed/DK7c-IuGLDI" />
    </div>

    </motion.section>
  );
}