import { ChevronDown, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MobileTokenCard = () => {
  return (
    <div className="lg:hidden mb-6">
      <Card className="bg-card/50 shadow-card">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Total EWX Balance</p>
              <div className="text-2xl font-bold text-foreground">100</div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                <span>EWX: 100</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Zap className="w-3 h-3" />
                <span>Energy Web</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MobileTokenCard;