import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  className?: string;
  link?: string; // 
}

const ServiceCard = ({ title, description, features, icon: Icon, className, link }: ServiceCardProps) => {
  return (
    <Card className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 ${className}`}>
      <CardHeader>
        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-lg">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-medium text-foreground">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        
        {link ? (
          <Button
            asChild
            variant="outline"
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <Link to={link}>
              View More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        ) : (
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
            View More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
