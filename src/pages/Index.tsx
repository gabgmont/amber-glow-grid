import DashboardLayout from "@/components/layout/DashboardLayout";
import HeroSection from "@/components/dashboard/HeroSection";
import DAppGrid from "@/components/dashboard/DAppGrid";
import MobileTokenCard from "@/components/dashboard/MobileTokenCard";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <MobileTokenCard />
        <HeroSection />
        <DAppGrid />
      </div>
    </DashboardLayout>
  );
};

export default Index;
