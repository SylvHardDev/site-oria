import FilialeHCM from "@/components/FilialeHCM/FilialeHCM";
import FilialeSCI from "@/components/FilialeSCI/FilialeSCI";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";

function Home() {
  return (
    <>
      <Hero />
      <FilialeHCM />
      <FilialeSCI />
      <Projects />
    </>
  );
}

export default Home;
