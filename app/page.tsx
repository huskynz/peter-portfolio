import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Refs from "@/components/refs";
import Pskills  from "@/components/persskills";
import YouTubePlayer from "@/components/yt";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <YouTubePlayer />
      <Projects />
      <Skills />
      <Pskills />
      <Refs />


      <Contact />
    </main>
  );
}
