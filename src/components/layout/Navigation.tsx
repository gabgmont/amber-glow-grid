import { Globe, Grid3x3, Users, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navigation = () => {
  return (
    <nav className="h-16 bg-background/80 backdrop-blur-md border-b border-border flex items-center justify-between px-4 lg:px-6 sticky top-0 z-50">
      {/* Mobile Menu & Logo */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" className="lg:hidden">
          <Menu className="w-5 h-5" />
        </Button>
        <h1 className="text-2xl font-bold text-gradient">EWX</h1>
        
        {/* Navigation Items - Desktop */}
        <div className="hidden lg:flex items-center space-x-6 ml-8">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            <Globe className="w-4 h-4 mr-2" />
            Discover
          </Button>
          <Button variant="ghost" className="text-foreground">
            <Grid3x3 className="w-4 h-4 mr-2" />
            Dashboard
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            <Users className="w-4 h-4 mr-2" />
            Community
          </Button>
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
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Disconnect Wallet</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navigation;