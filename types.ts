import { LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  detail: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  image: string;
  features: string[]; // List of bullet points
  benefits: ServiceFeature[]; // Grid of benefits
}

export interface NavItem {
  label: string;
  path: string;
}

export interface JobPosition {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}