import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'personal-loans',
    title: 'Personal Loans',
    shortDesc: 'Flexible personal financing solutions designed to support immediate family, medical, education, or personal needs with straightforward documentation.',
    features: [
      'Tailored loan options based on profile',
      'Simple & hassle-free documentation',
      'Guidance across leading banks & NBFCs',
      'Support throughout the application lifecycle'
    ],
    iconName: 'UserCheck',
  },
  {
    id: 'home-loans',
    title: 'Home Loans',
    shortDesc: 'Comprehensive assistance for purchasing a new home, constructing a residential property, or transferring your existing balance smoothly.',
    features: [
      'Assistance for purchase & construction',
      'Multiple banking partner options',
      'Clear paperwork & transparent advisory',
      'Personalized repayment planning guidance'
    ],
    iconName: 'Home',
  },
  {
    id: 'business-loans',
    title: 'Business Loans',
    shortDesc: 'Funding assistance for enterprises, traders, and small business owners to expand operations, meet working capital needs, or acquire machinery.',
    features: [
      'Working capital & expansion assistance',
      'Options for MSMEs and enterprises',
      'Structured financial profile evaluation',
      'Dedicated business finance consultant'
    ],
    iconName: 'Briefcase',
  },
  {
    id: 'vehicle-loans',
    title: 'Vehicle Loans',
    shortDesc: 'Streamlined loan assistance for acquiring private two-wheelers, four-wheelers, or commercial vehicles with clear documentation support.',
    features: [
      'New & used vehicle loan guidance',
      'Commercial & private vehicle options',
      'Assistance with lender documentation',
      'Swift coordination with partner institutions'
    ],
    iconName: 'Car',
  },
  {
    id: 'insurance',
    title: 'Insurance',
    shortDesc: 'Protection solutions designed to safeguard your family’s health, life, and valuable assets, securing tomorrow against unforeseen contingencies.',
    features: [
      'Life, health & general insurance advisory',
      'Protection customized to family needs',
      'Comparison of dependable coverage plans',
      'Hassle-free claim & renewal assistance'
    ],
    iconName: 'ShieldCheck',
  },
];
