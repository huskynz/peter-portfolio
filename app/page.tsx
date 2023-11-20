import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Refs from "@/components/refs";
import Pskills  from "@/components/persskills";
import Youtube from "@/components/yt";
import Certs from "@/components/certs";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Certs />
      <Projects />
      <Youtube />
      <Skills />
      <Pskills />
      <Refs />


      <Contact />
    </main>
  );
}
