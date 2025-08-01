import { FC } from "react";

export interface Service {
  id: string;
  title: string;
  icon: FC<{ className?: string }>;
  description: string;
  rate: string;
  amount: string;
  popular?: boolean;
  features: string[];
}

export interface Category {
  title: string;
  description: string;
  services: Service[];
}

export interface Stat {
  value: string;
  label: string;
  icon: FC<{ className?: string }>;
}

export interface MSMEServiceCardProps {
  service: Service;
  index: number;
}

export interface CategorySectionProps {
  category: Category;
}