import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, History, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Buy More Tokens",
      description: "Purchase additional EWX tokens to expand your portfolio",
      icon: ShoppingCart,
      action: () => navigate("/buy-tokens"),
      variant: "default" as const,
    },
    {
      title: "View History",
      description: "Check your complete transaction and trading history",
      icon: History,
      action: () => console.log("Navigate to history"),
      variant: "outline" as const,
    },
  ];

  return (
    <Card className="bg-card shadow-card">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{action.title}</h4>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </div>
                </div>
                <Button 
                  variant={action.variant}
                  size="sm"
                  onClick={action.action}
                  className="ml-4"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
