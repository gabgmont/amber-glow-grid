import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentActivity from "@/components/dashboard/RecentActivity";
import TokenHoldings from "@/components/dashboard/TokenHoldings";
import PLDIndex from "@/components/dashboard/PLDIndex";
import QuickActions from "@/components/dashboard/QuickActions";
import ImpactSummary from "@/components/dashboard/ImpactSummary";
import MobileTokenCard from "@/components/dashboard/MobileTokenCard";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <MobileTokenCard />
        
        {/* Dashboard Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your energy portfolio overview.</p>
        </div>

        {/* Stats Cards */}
        <DashboardStats />

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            <PLDIndex />
            <RecentActivity />
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-8">
            <TokenHoldings />
            <QuickActions />
            <ImpactSummary />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
