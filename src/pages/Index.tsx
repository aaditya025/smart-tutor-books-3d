
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DashboardPreview from "@/components/DashboardPreview";
import ThreeDShowcase from "@/components/ThreeDShowcase";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <ThreeDShowcase />
      <CTASection />
    </div>
  );
};

export default Index;
