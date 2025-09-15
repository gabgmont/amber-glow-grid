import { ChevronDown, Building2, Plane, Zap, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DAppCard from "./DAppCard";

const DAppGrid = () => {
  const dapps = [
    {
      title: "Enterprise Playground",
      description: "Explore enterprise-grade solutions for energy management and blockchain integration in corporate environments.",
      category: "SaaS",
      icon: <Building2 className="w-8 h-8" />,
    },
    {
      title: "Sustainable Aviation Fuel",
      description: "Trade and track sustainable aviation fuel credits with verified carbon offset certifications.",
      category: "SAF",
      icon: <Plane className="w-8 h-8" />,
    },
    {
      title: "Grid Balancing",
      description: "Participate in real-time grid balancing services and earn rewards for stabilizing energy networks.",
      category: "Grid",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Carbon Credits",
      description: "Buy, sell, and trade verified carbon credits from renewable energy projects worldwide.",
      category: "Carbon",
      icon: <Leaf className="w-8 h-8" />,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Discover DApps</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-card border-border">
              Filter
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-card border-border">
            <DropdownMenuItem>All Categories</DropdownMenuItem>
            <DropdownMenuItem>SaaS</DropdownMenuItem>
            <DropdownMenuItem>Trading</DropdownMenuItem>
            <DropdownMenuItem>Carbon</DropdownMenuItem>
            <DropdownMenuItem>Grid Services</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* DApp Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dapps.map((dapp, index) => (
          <DAppCard
            key={index}
            title={dapp.title}
            description={dapp.description}
            category={dapp.category}
            icon={dapp.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default DAppGrid;