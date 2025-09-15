import { Search, Heart, ChevronDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Sidebar = () => {
  return (
    <aside className="hidden lg:block w-64 bg-secondary/50 border-r border-border min-h-screen relative">
      <div className="p-6 space-y-6">
        {/* Token Balance Section */}
        <Card className="bg-card/50 shadow-card">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Total EWX Balance</p>
                <div className="text-4xl font-bold text-foreground">100</div>
                <p className="text-xs text-muted-foreground mt-1">Blockchain</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">EWX:</span>
                  <span className="text-sm">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">EWX:</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">100</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Menu */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">EWX Marketplace</h3>
            <div className="space-y-2">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-primary bg-primary/10 hover:bg-primary/20"
              >
                <Search className="w-4 h-4 mr-3" />
                Discover
              </Button>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                <Heart className="w-4 h-4 mr-3" />
                Favourites
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <Zap className="w-4 h-4" />
          <span>Powered by Energy Web</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;