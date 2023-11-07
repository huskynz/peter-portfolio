import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import filmsite from "@/public/Screenshot_20231020_153230.png";
import hunzweather from "@/public/Screenshot_20231020_153931.png";
import gen6 from "@/public/Screenshot_20231020_185537.png"
import yoobe from "@/public/yoobe.png";
import indeph from "@/public/200813-0073.webp";

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
    name: "References",
    hash: "#References",
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
    tags: ["Year 2023", "Astro", "Tailwind", "CSS"],
    imageUrl: filmsite,
  },
  {
    title: "HuskyNZ Weather",
    description:
      "For a school assignment, I made a small weather app that uses Flask and OpenWeather to be slim and lean. I'm looking to do a complete rewrite soon.",
    tags: ["Year 2023", "Flask", "Python", "Azure"],
    imageUrl: hunzweather,
  },

  {
    title: "HuskyNZ's Gen6 website",
    description:
      "While I don't use it anymore because I've switched to using Free Flarum, this was one of my first coding projects. It's not that great, and we don't really discuss why it's gen6",
    tags: ["Year 2022-2023", "Azure app service", "CSS", "HTML"],
    imageUrl: gen6,
  },
  {
    title: "Yoobee Cyber Security Micro-credential",
    description: "I learnt alot from this course.",
    tags: ["Year 2023", "Basic compute", "Kail Linux"],
    imageUrl: yoobe,
  },
  {
    title: "Work Experince at Inde",
    description:
      "I did 5 weeks of work experince with Inde, every week I was with a diffrent team learning all aspects of the business",
    tags: ["Year 2023", "Azure", "Microsoft"],
    imageUrl: indeph,
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
