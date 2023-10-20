import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/Screenshot_20231020_153230.png";
import rmtdevImg from "@/public/Screenshot_20231020_153931.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "My first website",
    location: "Html",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Late 2020",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Rolleston College Film Club",
    description:
      "I worked with 2 other devs on building a site for Film club so pepole would know who we are",
    tags: ["Astro", "Tailwind", "CSS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "HuskyNZ Weather",
    description:
      "For a school assment I made a small weather app that uses Flask and open weather to be slim and lean. Im looking to do a complet rewrite soon",
    tags: ["Flask","Python","Azure" ],
    imageUrl: rmtdevImg,
  },

] as const;

export const skillsData = [
  "Azure",
  "Microsoft 365",
  "AWS",
  "Vercel",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Astro",
] as const;
