import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 lg:p-8 max-w-full overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;