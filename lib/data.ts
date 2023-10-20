import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/Screenshot_20231020_153230.png";
import rmtdevImg from "@/public/Screenshot_20231020_153931.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
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
      "I worked with two other developers on building a website for our film club to help people get to know who we are.",
    tags: ["Astro", "Tailwind", "CSS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "HuskyNZ Weather",
    description:
      "For a school assignment, I made a small weather app that uses Flask and OpenWeather to be slim and lean. I'm looking to do a complete rewrite soon.",
    tags: ["Flask","Python","Azure" ],
    imageUrl: rmtdevImg,
  },

  {
    title: "HuskyNZ's Gen6 website",
    description:
      "While I don't use it anymore because I've switched to using Free Flarum, this was one of my first coding projects. It's not that great, and we don't really discuss why it's gen6",
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
