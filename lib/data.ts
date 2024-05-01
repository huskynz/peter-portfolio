import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

const filmsite =
  "https://serv.husky.nz/peter-port/Screenshot_20231020_153230.png";
const hunzweather =
  "https://serv.husky.nz/peter-port/Screenshot_20231020_153931.png";
const gen6 = "https://serv.husky.nz/peter-port/Screenshot_20231020_185537.png";
const yoobe = "https://serv.husky.nz/peter-port/yoobe.png";
const indeph = "https://serv.husky.nz/peter-port/200813-0073.webp";
const ddo = "https://serv.husky.nz/peter-port/Screenshot_20231108_101413.png";
const Spectrum = "https://serv.husky.nz/peter-port/Spectrum-website.png";

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
    title: "Work Experince at Inde",
    description:
      "I did 5 weeks of work experince with Inde, every week I was with a diffrent team learning all aspects of the business",
    tags: ["Year 2023", "Azure", "Microsoft"],
    link: "https://inde.nz",
    imageUrl: indeph,
  },
  // {
  //   title: "Work Experince at Rolleston College",
  //   description:
  //     "I did a full year of work experience with Rolleston College's IT guy it tought me alot and helped me with my people skills",
  //   tags: ["Year 2023"],
  //   link: "https://rollestoncollege.nz",
  //   imageUrl: youneedaimange,
  // },
  {
    title: "Develop a digital media outcome",
    description:
      "This is one of the best pices of work I have done in Year 11.",
    tags: ["Year 2023", "Web Flow"],
    link: "https://huskynz-my.sharepoint.com/:w:/g/personal/peter_husky_nz/EZbs4uc5tRhKvlEcg0QsVQoBjYfiTc0paqqb1F451mHzDw?e=vmRii7",
    imageUrl: ddo,
  },
  {
    title: "Spectrum's Website",
    description:
      "This is a very fun project to watch grow and I had the fun task of building the Website and running it on cloudflare. I also help with alot of backend stuff.",
    tags: ["Astro", "JSX", "Cloudflare"],
    link: "https://spectrum.liamsherwin.tech",
    imageUrl: Spectrum,
  },

  {
    title: "Yoobee Cyber Security Micro-credential",
    description: "I learnt a lot from this course.",
    tags: ["Year 2023", "Basic compute", "Kail Linux"],
    link: "https://landing.husky.nz",
    imageUrl: yoobe,
  },
  {
    title: "Rolleston College Film Club",
    description:
      "I worked with two other developers on building a website for our film club to help people get to know who we are.",
    tags: ["Year 2023", "Astro", "Tailwind", "CSS"],
    link: "https://filmclub.tech",
    imageUrl: filmsite,
  },
  {
    title: "HuskyNZ Weather",
    description:
      "For a school assignment, I made a small weather app that uses Flask and OpenWeather to be slim and lean. I'm looking to do a complete rewrite soon.",
    tags: ["Year 2023", "Flask", "Python", "Azure"],
    link: "https://landing.husky.nz",
    imageUrl: hunzweather,
  },

  {
    title: "HuskyNZ's Gen6 website",
    description:
      "While I don't use it anymore because I've switched to using Free Flarum, this was one of my first coding projects. It's not that great, and we don't really discuss why it's gen6",
    tags: ["Year 2022-2023", "Azure app service"],
    link: "https://landing.husky.nz",
    imageUrl: gen6,
  },
] as const;

export const skillsData = [
  "Azure",
  "AWS",
  "Microsoft 365",
  "Cloudflare",
  "Cloud Networking",
  "Databases",
  "Terrafom",
  "PowerShell",
  "NextJS",
  "ReactJS",
  "TailwindCSS",
  "Adobe Permiere Pro, Adobe Audition and Photoshop",
  "DaVinci Resolve",
] as const;

export const osdata = [
  "Linux Servers",
  "Linux Clients",
  "Windows Server",
  "Windows Clients",
] as const;

export const pskillsData = [
  "Good Problem Solving",
  "Efficient",
  "Positive Attitude",
  "Solid Work Ethic",
  "Willing to learn",
] as const;
