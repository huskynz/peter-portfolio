"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("References");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="References"
    >
      <SectionHeading>My References</SectionHeading>
      <div className="grid grid-cols-2 gap-10 scroll-mt-28 mb-28">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://serv.hnz.li/peter-port/pyn.jpg"
              alt=""
            />
          </a>
          <div className="p-5 text-center">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hamish Payne
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              "The Guy" He is the IT administrator at Rolleston College.
            </p>
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
              Contact Details{" "}
            </h5>
            <p>hamish.payne@rollestoncollege.nz</p>
            <p>+64 3 595 2490, Ext. 4015</p>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg "
              src="https://serv.hnz.li/peter-port/1666158881232.jpeg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mark Graham
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Procurement Director at Inde
            </p>
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
              Contact Details{" "}
            </h5>
            <p>mark.graham@inde.nz</p>
            <p>+64 021 897 261</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
