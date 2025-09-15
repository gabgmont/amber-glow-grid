import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Info } from "lucide-react";

const PLDIndex = () => {
  const data = [
    { time: "00:00", value: 45.2 },
    { time: "04:00", value: 42.8 },
    { time: "08:00", value: 58.3 },
    { time: "12:00", value: 72.1 },
    { time: "16:00", value: 68.5 },
    { time: "20:00", value: 55.7 },
    { time: "24:00", value: 48.9 },
  ];

  const currentValue = 48.9;
  const previousValue = 45.2;
  const change = ((currentValue - previousValue) / previousValue * 100).toFixed(1);

  return (
    <Card className="bg-card shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span>PLD Index</span>
            <Info className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{currentValue}</div>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +{change}%
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="time" 
                className="text-xs"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                className="text-xs"
                tick={{ fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px',
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>Price Load Duration Index - Real-time energy market pricing indicator</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PLDIndex;
