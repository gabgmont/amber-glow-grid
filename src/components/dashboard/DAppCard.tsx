import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DAppCardProps {
  title: string;
  description: string;
  category: string;
  image?: string;
  icon?: React.ReactNode;
}

const DAppCard = ({ title, description, category, image, icon }: DAppCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-glow hover:scale-105 bg-card/80 border-border">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Category Badge */}
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          
          {/* Icon or Image */}
          <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-secondary/50">
            {icon ? (
              <div className="text-primary">{icon}</div>
            ) : image ? (
              <img src={image} alt={title} className="w-12 h-12 object-contain" />
            ) : (
              <div className="w-8 h-8 bg-gradient-primary rounded-full" />
            )}
          </div>
          
          {/* Content */}
          <div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DAppCard;