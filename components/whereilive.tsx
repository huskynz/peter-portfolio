"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Iframe from 'react-iframe'


export default function About() {
  const { ref } = useSectionInView("Where I Live");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="WhereILive"
    >
  <SectionHeading>Where I Live</SectionHeading>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.8848616439!2d172.39826527697784!3d-43.608938886917436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d321ca5c015dc41%3A0x9022f216953d3d6!2s19%20Spirit%20Terrace%2C%20Rolleston%207615%2C%20New%20Zealand!5e0!3m2!1sen!2sjp!4v1699314326136!5m2!1sen!2sjp" width="600" height="450" className="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </motion.section>
  );
}