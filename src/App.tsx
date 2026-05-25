import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { CareerTimeline } from './components/timeline/CareerTimeline';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ContactSection } from './components/contact/ContactSection';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-[16rem] h-96 w-96 rounded-full bg-fuchsia-600/16 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-cyan-500/12 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <HeroSection />
        <CareerTimeline />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
