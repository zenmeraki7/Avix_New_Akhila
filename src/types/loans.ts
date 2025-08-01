import React from "react";

export interface Service {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  rate: string;
  amount: string;
  features: string[];
}

export interface ServiceCardProps {
  service: Service;
  index: number;
}