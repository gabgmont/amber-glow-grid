import { LayoutDashboard, ShoppingCart, User, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLocation, useNavigate } from "react-router-dom";
import amberLogo from "@/assets/amber-logo.png";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: ShoppingCart, label: "Buy Tokens", path: "/buy-tokens" },
    { icon: User, label: "Profile", path: "/profile" }
  ];

  return (
    <nav className="h-16 bg-background/80 backdrop-blur-md border-b border-border flex items-center justify-between px-4 lg:px-6 sticky top-0 z-50">
      {/* Mobile Menu & Logo */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" className="lg:hidden">
          <Menu className="w-5 h-5" />
        </Button>
        <div className="flex items-center space-x-3">
          <img src={amberLogo} alt="Amber Trade" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-gradient">Amber Trade</h1>
        </div>
        
        {/* Navigation Items - Desktop */}
        <div className="hidden lg:flex items-center space-x-6 ml-8">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Button
                key={item.path}
                variant="ghost"
                onClick={() => navigate(item.path)}
                className={`${
                  isActive 
                    ? "text-foreground bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* User Profile */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                0x
              </AvatarFallback>
            </Avatar>
            <span className="hidden sm:inline text-sm text-muted-foreground">0x6f...0a76</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 bg-card border-border">
          <DropdownMenuItem onClick={() => navigate("/profile")}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Disconnect Wallet</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navigation;