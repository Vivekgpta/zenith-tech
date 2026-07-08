import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import FeaturedWork from "../components/FeaturedWork/FeaturedWork";
import WhyChooseMe from "../components/WhyChooseMe/WhyChooseMe";
import CTA from "../components/CTA/CTA";
import ClientFeedback from "../components/ClientFeedback/ClientFeedback";
import SelectedWork from "../components/SelectedWork/SelectedWork";
import ArchiveSection from "../components/ArchiveSection/ArchiveSection";
import CustomCursor from "../components/CustomCursor/CustomCursor";
import AboutSection from "../components/AboutSection/AboutSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <CustomCursor />
      <SelectedWork />
      <ArchiveSection />
      <AboutSection />
      <ServicesSection />

      <FeaturedWork />

      <ClientFeedback />

      <Stats />

      <WhyChooseMe />

      <CTA />
    </MainLayout>
  );
}
