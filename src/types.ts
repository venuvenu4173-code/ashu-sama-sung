export type PartnerCategory = 'Bank' | 'NBFC';

export interface Partner {
  name: string;
  slug: string;
  logo: string;
  category: PartnerCategory;
  categoryLabel: string;
  tagline?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  features: string[];
  iconName: 'UserCheck' | 'Home' | 'Briefcase' | 'Car' | 'ShieldCheck';
}

export interface BranchInfo {
  id: string;
  name: string;
  isMainBranch: boolean;
  addressLines: string[];
  city: string;
  state: string;
  pincode: string;
  phone: string;
  phoneRaw: string;
  mapQueryUrl: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: 'Headphones' | 'Zap' | 'Layers' | 'Building2' | 'Award' | 'Users';
}

export interface EnquiryFormData {
  fullName: string;
  mobileNumber: string;
  loanRequirement: string;
  preferredBranch: string;
  message: string;
}
