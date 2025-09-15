import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, Zap, Leaf } from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      type: "buy",
      title: "Purchased EWX Tokens",
      amount: "500 EWX",
      value: "$500.00",
      time: "2 hours ago",
      status: "completed",
      icon: ArrowUpRight,
    },
    {
      type: "trade",
      title: "Carbon Credit Trade",
      amount: "25 CCT",
      value: "$125.00",
      time: "5 hours ago",
      status: "completed",
      icon: Leaf,
    },
    {
      type: "sell",
      title: "Sold Renewable Energy",
      amount: "150 kWh",
      value: "$75.50",
      time: "1 day ago",
      status: "completed",
      icon: Zap,
    },
    {
      type: "buy",
      title: "Grid Balancing Service",
      amount: "10 GBS",
      value: "$200.00",
      time: "2 days ago",
      status: "pending",
      icon: ArrowDownLeft,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="bg-card shadow-card">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-lg border">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {activity.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.amount} • {activity.time}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">{activity.value}</p>
                  <Badge variant="secondary" className={getStatusColor(activity.status)}>
                    {activity.status}
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
