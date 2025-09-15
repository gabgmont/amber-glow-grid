import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Coins, Leaf, DollarSign, Calendar } from "lucide-react";

const DashboardStats = () => {
  const stats = [
    {
      title: "Total Tokens",
      value: "1,250",
      unit: "EWX",
      change: "+12.5%",
      changeType: "positive",
      icon: Coins,
    },
    {
      title: "Portfolio Value",
      value: "$2,847.50",
      unit: "USD",
      change: "+8.2%",
      changeType: "positive",
      icon: DollarSign,
    },
    {
      title: "CO2 Saved",
      value: "847.3",
      unit: "kg CO2",
      change: "+15.7%",
      changeType: "positive",
      icon: Leaf,
    },
    {
      title: "Today's Savings",
      value: "$47.20",
      unit: "USD",
      change: "-2.1%",
      changeType: "negative",
      icon: Calendar,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="bg-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>{stat.unit}</span>
                <div className={`flex items-center ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.changeType === 'positive' ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  <span>{stat.change}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardStats;
