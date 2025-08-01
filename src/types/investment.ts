import { FC } from "react";

export interface InvestmentService {
  id: string;
  title: string;
  icon: FC<{ className?: string }>;
  description: string;
  returns: string;
  minAmount: string;
  features: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface InvestmentCardProps {
  service: InvestmentService;
  index: number;
}

export interface StatCardProps {
  stat: Stat;
  index: number;
}