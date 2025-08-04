import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SocialSection from "./components/SocialSection";
import EducationSection from "./components/EducationSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-sans bg-slate-950 min-h-screen">
      <Navbar />
      <section section id="hero" className="scroll-mt-24">
        <HeroSection />
      </section>
      <section section id="projects" className="scroll-mt-24">
        <ProjectsSection />
      </section>
      <section section id="education" className="scroll-mt-24">
        <EducationSection />
      </section>
      <section section id="contact" className="scroll-mt-24">
        <SocialSection />
      </section>
    </div>
  );
}

export default App;
