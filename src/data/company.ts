import { StatItem, ProcessStep, WhyChooseItem } from '../types';

export const COMPANY_INFO = {
  name: 'Isha Associates',
  tagline: 'Funding today, Secure tomorrow',
  about:
    'Isha Associates provides reliable and hassle-free financial solutions tailored to meet your needs. We assist with Personal Loans, Home Loans, Business Loans, Vehicle Loans, and Insurance with a focus on quick service, simple processes, and customer-friendly support.',
  phoneDisplay: '9052802898',
  phoneRaw: '+919052802898',
  whatsappNumber: '919052802898',
  mainBranchCity: 'Vijayawada',
  email: 'info@ishaassociates.com',
  operatingHours: 'Monday – Saturday: 9:30 AM – 6:30 PM',
};

export const COMPANY_STATS: StatItem[] = [
  {
    value: '1K+',
    label: 'People Helped',
  },
  {
    value: '5Cr+',
    label: 'Funding Provided',
  },
  {
    value: '3',
    label: 'Branch Locations',
  },
  {
    value: 'Multiple',
    label: 'Financial Solutions',
  },
];

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Share Your Requirement',
    description: 'Submit your loan or insurance requirements online, over WhatsApp, or by calling our team.',
  },
  {
    step: '02',
    title: 'Understand Your Need',
    description: 'Our advisors discuss your financial profile and specific preferences with complete clarity.',
  },
  {
    step: '03',
    title: 'Explore Suitable Financial Options',
    description: 'We help you review options across leading banking partners and premier NBFC institutions.',
  },
  {
    step: '04',
    title: 'Get Assistance Through the Process',
    description: 'Receive dedicated end-to-end guidance for paperwork, verification, and timely processing.',
  },
];

export const WHY_CHOOSE_US_ITEMS: WhyChooseItem[] = [
  {
    title: 'Reliable Support',
    description: 'Dedicated financial advisors ready to guide you at every step of your financial journey.',
    iconName: 'Headphones',
  },
  {
    title: 'Simple Process',
    description: 'Clear documentation requirements and transparent procedures without unnecessary complexities.',
    iconName: 'Zap',
  },
  {
    title: 'Multiple Financial Solutions',
    description: 'From personal and home loans to business funding and insurance under one trusted roof.',
    iconName: 'Layers',
  },
  {
    title: 'Wide Banking Network',
    description: 'Empanelled with 40+ leading public & private banks and premier regulated NBFCs.',
    iconName: 'Building2',
  },
  {
    title: 'Professional Guidance',
    description: 'Unbiased advisory aligned directly with your repayment capacity and long-term security.',
    iconName: 'Award',
  },
  {
    title: 'Customer Focus',
    description: 'Transparent communication, courteous local assistance, and customer-first values.',
    iconName: 'Users',
  },
];
