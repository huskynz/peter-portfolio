"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function Certs() {
  const { ref } = useSectionInView("Projects");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="certs"
    >
    <SectionHeading>My Certifications</SectionHeading>
    <div className="grid grid-cols-2 space-x-1">
    <a href="https://learn.microsoft.com/api/credentials/share/en-us/peter-gallwas/868D21A0115A6F3B?sharingId=ABDCE9AB036FFAC5"><img src="https://serv.husky.nz/peter-port/microsoft-certified-azure-fundamentals.png" alt="Azure Fundaments Badge"></img></a>
        <a href="https://learn.microsoft.com/api/credentials/share/en-us/peter-gallwas/EF14C73EB99F9662?sharingId=ABDCE9AB036FFAC5"><img src="https://serv.husky.nz/peter-port/microsoft-365-certified-fundamentals.png" alt="d"></img></a>
    </div>

    </motion.section>
  );
}