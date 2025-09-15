import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Coins, Leaf, Zap, Building2 } from "lucide-react";

const TokenHoldings = () => {
  const holdings = [
    {
      token: "EWX",
      name: "Energy Web Token",
      amount: "1,250",
      value: "$1,250.00",
      percentage: 45,
      icon: Coins,
      color: "bg-blue-500",
    },
    {
      token: "CCT",
      name: "Carbon Credit Token",
      amount: "850",
      value: "$850.00",
      percentage: 30,
      icon: Leaf,
      color: "bg-green-500",
    },
    {
      token: "REC",
      name: "Renewable Energy Certificate",
      amount: "450",
      value: "$450.00",
      percentage: 16,
      icon: Zap,
      color: "bg-yellow-500",
    },
    {
      token: "GBS",
      name: "Grid Balancing Service",
      amount: "250",
      value: "$250.00",
      percentage: 9,
      icon: Building2,
      color: "bg-purple-500",
    },
  ];

  const totalValue = holdings.reduce((sum, holding) => 
    sum + parseFloat(holding.value.replace('$', '').replace(',', '')), 0
  );

  return (
    <Card className="bg-card shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Token Holdings</span>
          <span className="text-lg font-semibold">${totalValue.toLocaleString()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {holdings.map((holding, index) => {
            const Icon = holding.icon;
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${holding.color} rounded-full flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{holding.token}</p>
                      <p className="text-xs text-muted-foreground">{holding.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">{holding.value}</p>
                    <p className="text-xs text-muted-foreground">{holding.amount}</p>
                  </div>
                </div>
                <Progress value={holding.percentage} className="h-2" />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenHoldings;
