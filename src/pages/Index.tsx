import { useReveal } from '@/hooks/useReveal';
import { LangProvider } from '@/contexts/LangContext';
<<<<<<< HEAD
=======
import Navbar from '@/components/Navbar';
>>>>>>> 2700d210ff8d54ea32bff9869311f673153ee822
import HeroSection from '@/components/HeroSection';
import ContextSection from '@/components/ContextSection';
import Divider from '@/components/Divider';
import MissionSection from '@/components/MissionSection';
import PillarsSection from '@/components/PillarsSection';
import ExamplesSection from '@/components/ExamplesSection';
import CredibilitySection from '@/components/CredibilitySection';
import PartnersSection from '@/components/PartnersSection';
import SurveySection from '@/components/SurveySection';
import FormSection from '@/components/FormSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  const revealRef = useReveal();

  return (
    <LangProvider>
<<<<<<< HEAD
=======
      {/* Navbar fixed top — must be outside the scrollable div */}
      <Navbar />
>>>>>>> 2700d210ff8d54ea32bff9869311f673153ee822
      <div ref={revealRef}>
        <HeroSection />
        <ContextSection />
        <Divider />
        <MissionSection />
        <Divider />
        <PillarsSection />
        <Divider />
        <ExamplesSection />
        <Divider />
        <CredibilitySection />
        <Divider />
        <PartnersSection />
        <Divider />
        <SurveySection />
        <Divider />
        <FormSection />
        <FooterSection />
      </div>
    </LangProvider>
  );
};

export default Index;
