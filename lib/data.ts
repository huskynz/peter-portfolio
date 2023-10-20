import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import filmsite from "@/public/Screenshot_20231020_153230.png";
import hunzweather from "@/public/Screenshot_20231020_153931.png";
import gen6 from "@/public/Screenshot_20231020_185537.png"

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
export const projectsData = [
  {
    title: "Rolleston College Film Club",
    description:
      "I worked with 2 other devs on building a site for Film club so people would know who we are",
    tags: ["Astro", "Tailwind", "CSS"],
    imageUrl: filmsite,
  },
  {
    title: "HuskyNZ Weather",
    description:
      "For a school assment I made a small weather app that uses Flask and open weather to be slim and lean. Im looking to do a complete rewrite soon",
    tags: ["Flask","Python","Azure" ],
    imageUrl: hunzweather,
  },

  {
    title: "HuskyNZ's Gen6 website",
    description:
      "Wile its not in use any more as I have moved to useing free flarum this is one of the first things I coded so its not great and we dont talk about why its gen6",
    tags: ["Azure app service","CSS","HTML" ],
    imageUrl: gen6,
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
