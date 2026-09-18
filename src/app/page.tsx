import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MetricsBar from '@/components/MetricsBar';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import PhilosophySection from '@/components/PhilosophySection';
import LeadershipSection from '@/components/LeadershipSection';
import AcademicsSection from '@/components/AcademicsSection';
import TerminalContact from '@/components/TerminalContact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-20 md:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28 pb-20">
        <HeroSection />
        <MetricsBar />
        <ExperienceSection />
        <ProjectsSection />
        <PhilosophySection />
        <LeadershipSection />
        <AcademicsSection />
        <TerminalContact />
      </main>
      <Footer />
    </>
  );
}
