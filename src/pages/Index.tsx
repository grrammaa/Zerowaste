import { useReveal } from '@/hooks/useReveal';
import { LangProvider } from '@/contexts/LangContext';
import Navbar from '@/components/Navbar';
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
      {/* Navbar fixed top — must be outside the scrollable div */}
      <Navbar />
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
