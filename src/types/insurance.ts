import { FC } from "react";

export interface Service {
  id: string;
  title: string;
  icon: FC<{ className?: string }>;
  description: string;
  coverage: string;
  serviceType: string;
  pricing: string;
  premium?: boolean;
  urgent?: boolean;
  features: string[];
}

export interface Feature {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface InsuranceServiceCardProps {
  service: Service;
  index: number;
}

export interface FeatureHighlightProps {
  feature: Feature;
  index: number;
}