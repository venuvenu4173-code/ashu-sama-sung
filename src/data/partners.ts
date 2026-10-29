import { Partner } from '../types';

/**
 * BANKING PARTNERS DATA
 *
 * Source of Truth: Uploaded Bank & NBFC reference documents for Isha Associates.
 *
 * HOW TO ADD A NEW PARTNER:
 * 1. Place the SVG/PNG logo in `/public/assets/partners/<partner-slug>.svg`
 * 2. Add an entry to the BANKING_PARTNERS array below:
 *    {
 *      name: "New Partner Name",
 *      slug: "new-partner-name",
 *      logo: "/assets/partners/new-partner-name.svg",
 *      category: "Bank" | "NBFC",
 *      categoryLabel: "Bank" | "NBFC & Financial Partner",
 *    }
 */

export const BANKING_PARTNERS: Partner[] = [
  // ==========================================
  // NBFCs & FINANCIAL PARTNERS
  // ==========================================
  {
    name: 'InCred Finance',
    slug: 'incred-finance',
    logo: '/assets/partners/incred-finance.svg',
    category: 'NBFC',
    categoryLabel: 'NBFC & Financial Partner',
  },
  {
    name: 'Fibe',
    slug: 'fibe',
    logo: '/assets/partners/fibe.svg',
    category: 'NBFC',
    categoryLabel: 'NBFC & Financial Partner',
  },
  {
    name: 'Piramal Finance',
    slug: 'piramal-finance',
    logo: '/assets/partners/piramal-finance.svg',
    category: 'NBFC',
    categoryLabel: 'NBFC & Financial Partner',
  },
  {
    name: 'Poonawalla Fincorp',
    slug: 'poonawalla-fincorp',
    logo: '/assets/partners/poonawalla-fincorp.svg',
    category: 'NBFC',
    categoryLabel: 'NBFC & Financial Partner',
  },
  {
    name: 'KreditBee',
    slug: 'kreditbee',
    logo: '/assets/partners/kreditbee.svg',
    category: 'NBFC',
    categoryLabel: 'NBFC & Financial Partner',
  },
  {
    name: 'L&T Finance',
    slug: 'lt-finance',
    logo: '/assets/partners/lt-finance.svg',
    category: 'NBFC',
    categoryLabel: 'NBFC & Financial Partner',
  },
  {
    name: 'Lendingkart',
    slug: 'lendingkart',
    logo: '/assets/partners/lendingkart.svg',
    category: 'NBFC',
    categoryLabel: 'NBFC & Financial Partner',
    tagline: 'Think Cash, Think Lendingkart Group!',
  },
  {
    name: 'Shriram Finance',
    slug: 'shriram-finance',
    logo: '/assets/partners/shriram-finance.svg',
    category: 'NBFC',
    categoryLabel: 'NBFC & Financial Partner',
  },
  {
    name: 'Tata Capital',
    slug: 'tata-capital',
    logo: '/assets/partners/tata-capital.svg',
    category: 'NBFC',
    categoryLabel: 'NBFC & Financial Partner',
  },
  {
    name: 'Bajaj Finserv',
    slug: 'bajaj-finserv',
    logo: '/assets/partners/bajaj-finserv.svg',
    category: 'NBFC',
    categoryLabel: 'NBFC & Financial Partner',
  },
  {
    name: 'HDB Financial Services',
    slug: 'hdb-financial-services',
    logo: '/assets/partners/hdb-financial-services.svg',
    category: 'NBFC',
    categoryLabel: 'NBFC & Financial Partner',
  },
  {
    name: 'Aditya Birla Finance',
    slug: 'aditya-birla-finance',
    logo: '/assets/partners/aditya-birla-finance.svg',
    category: 'NBFC',
    categoryLabel: 'NBFC & Financial Partner',
  },
  {
    name: 'Muthoot Finance',
    slug: 'muthoot-finance',
    logo: '/assets/partners/muthoot-finance.svg',
    category: 'NBFC',
    categoryLabel: 'NBFC & Financial Partner',
  },
  {
    name: 'Mahindra Finance',
    slug: 'mahindra-finance',
    logo: '/assets/partners/mahindra-finance.svg',
    category: 'NBFC',
    categoryLabel: 'NBFC & Financial Partner',
  },
  {
    name: 'Chola Finance',
    slug: 'chola-finance',
    logo: '/assets/partners/chola-finance.svg',
    category: 'NBFC',
    categoryLabel: 'NBFC & Financial Partner',
  },
  {
    name: 'Sundaram Finance',
    slug: 'sundaram-finance',
    logo: '/assets/partners/sundaram-finance.svg',
    category: 'NBFC',
    categoryLabel: 'NBFC & Financial Partner',
  },

  // ==========================================
  // BANKS
  // ==========================================
  {
    name: 'State Bank of India',
    slug: 'state-bank-of-india',
    logo: '/assets/partners/state-bank-of-india.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'HDFC Bank',
    slug: 'hdfc-bank',
    logo: '/assets/partners/hdfc-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'ICICI Bank',
    slug: 'icici-bank',
    logo: '/assets/partners/icici-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Bank of Baroda',
    slug: 'bank-of-baroda',
    logo: '/assets/partners/bank-of-baroda.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Punjab National Bank',
    slug: 'punjab-national-bank',
    logo: '/assets/partners/punjab-national-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Canara Bank',
    slug: 'canara-bank',
    logo: '/assets/partners/canara-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Union Bank of India',
    slug: 'union-bank-of-india',
    logo: '/assets/partners/union-bank-of-india.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Bank of India',
    slug: 'bank-of-india',
    logo: '/assets/partners/bank-of-india.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Indian Bank',
    slug: 'indian-bank',
    logo: '/assets/partners/indian-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Central Bank of India',
    slug: 'central-bank-of-india',
    logo: '/assets/partners/central-bank-of-india.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Indian Overseas Bank',
    slug: 'indian-overseas-bank',
    logo: '/assets/partners/indian-overseas-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'UCO Bank',
    slug: 'uco-bank',
    logo: '/assets/partners/uco-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'IDBI Bank',
    slug: 'idbi-bank',
    logo: '/assets/partners/idbi-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Federal Bank',
    slug: 'federal-bank',
    logo: '/assets/partners/federal-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Yes Bank',
    slug: 'yes-bank',
    logo: '/assets/partners/yes-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Karur Vysya Bank',
    slug: 'karur-vysya-bank',
    logo: '/assets/partners/karur-vysya-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'South Indian Bank',
    slug: 'south-indian-bank',
    logo: '/assets/partners/south-indian-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'J&K Bank',
    slug: 'jk-bank',
    logo: '/assets/partners/jk-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Vijaya Bank',
    slug: 'vijaya-bank',
    logo: '/assets/partners/vijaya-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Andhra Bank',
    slug: 'andhra-bank',
    logo: '/assets/partners/andhra-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Syndicate Bank',
    slug: 'syndicate-bank',
    logo: '/assets/partners/syndicate-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Allahabad Bank',
    slug: 'allahabad-bank',
    logo: '/assets/partners/allahabad-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Oriental Bank of Commerce',
    slug: 'oriental-bank-of-commerce',
    logo: '/assets/partners/oriental-bank-of-commerce.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Dena Bank',
    slug: 'dena-bank',
    logo: '/assets/partners/dena-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Lakshmi Vilas Bank',
    slug: 'lakshmi-vilas-bank',
    logo: '/assets/partners/lakshmi-vilas-bank.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'United Bank of India',
    slug: 'united-bank-of-india',
    logo: '/assets/partners/united-bank-of-india.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
  {
    name: 'Bank of Rajasthan',
    slug: 'bank-of-rajasthan',
    logo: '/assets/partners/bank-of-rajasthan.svg',
    category: 'Bank',
    categoryLabel: 'Bank',
  },
];
