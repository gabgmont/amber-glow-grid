import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trees, Car, Zap } from "lucide-react";

const ImpactSummary = () => {
  const impactData = {
    trees: {
      icon: Trees,
      title: "Trees Equivalent",
      value: "42",
      unit: "trees planted",
      description: "Equivalent CO2 absorption capacity of trees planted",
      details: [
        { label: "This month", value: "8 trees" },
        { label: "This year", value: "42 trees" },
        { label: "Total impact", value: "156 trees" },
      ],
    },
    carMiles: {
      icon: Car,
      title: "Car Miles Offset",
      value: "2,847",
      unit: "miles offset",
      description: "Equivalent miles of car emissions offset by your actions",
      details: [
        { label: "This month", value: "485 miles" },
        { label: "This year", value: "2,847 miles" },
        { label: "Total impact", value: "8,923 miles" },
      ],
    },
    cleanEnergy: {
      icon: Zap,
      title: "Clean Energy",
      value: "1,247",
      unit: "kWh generated",
      description: "Clean energy generated or supported through your investments",
      details: [
        { label: "This month", value: "187 kWh" },
        { label: "This year", value: "1,247 kWh" },
        { label: "Total impact", value: "4,892 kWh" },
      ],
    },
  };

  return (
    <Card className="bg-card shadow-card">
      <CardHeader>
        <CardTitle>Impact Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="trees" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="trees" className="text-xs">Trees</TabsTrigger>
            <TabsTrigger value="carMiles" className="text-xs">Car Miles</TabsTrigger>
            <TabsTrigger value="cleanEnergy" className="text-xs">Clean Energy</TabsTrigger>
          </TabsList>
          
          {Object.entries(impactData).map(([key, data]) => {
            const Icon = data.icon;
            return (
              <TabsContent key={key} value={key} className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">{data.value}</div>
                    <div className="text-sm text-muted-foreground">{data.unit}</div>
                  </div>
                  <p className="text-xs text-muted-foreground px-4">
                    {data.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {data.details.map((detail, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                      <span className="text-sm text-muted-foreground">{detail.label}</span>
                      <span className="text-sm font-semibold">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ImpactSummary;
