import { Phone, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { SERVICES } from '../data/services';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'disclaimer') => void;
  onSelectService: (serviceTitle: string) => void;
}

export default function Footer({ onOpenLegal, onSelectService }: FooterProps) {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-100 dark:bg-[#050A13] border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 relative transition-colors duration-300">
      {/* Decorative top accent border */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C59B27] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200 dark:border-white/10">
          {/* Brand Presentation & Mission */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              {/* Official Isha Associates Logo - switches cleanly with theme */}
              <img
                src={theme === 'light' ? '/assets/branding/isha-logo.svg' : '/assets/branding/isha-logo-dark.svg'}
                alt="Isha Associates Logo"
                className="h-14 sm:h-16 w-auto object-contain"
                style={{ aspectRatio: '800/680', maxHeight: '64px' }}
              />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm">
              Isha Associates provides reliable and hassle-free financial solutions tailored to meet your personal and business needs with trusted institutional guidance.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#8A5D14] dark:text-[#DFB75A] font-bold">
                <MapPin className="w-3.5 h-3.5 text-[#B8861B] dark:text-[#C59B27]" />
                <span>Main Branch: {COMPANY_INFO.mainBranchCity}, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Phone className="w-3.5 h-3.5 text-[#B8861B] dark:text-[#C59B27]" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-slate-900 dark:hover:text-white transition-colors font-semibold">
                  Phone: {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-[#B8861B] dark:hover:text-[#DFB75A] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#B8861B] dark:hover:text-[#DFB75A] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B8861B] dark:hover:text-[#DFB75A] transition-colors">
                  Loan Services
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-[#B8861B] dark:hover:text-[#DFB75A] transition-colors">
                  Banking Partners
                </a>
              </li>
              <li>
                <a href="#branches" className="hover:text-[#B8861B] dark:hover:text-[#DFB75A] transition-colors">
                  Branch Offices
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B8861B] dark:hover:text-[#DFB75A] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Loan Services
            </div>
            <ul className="space-y-2.5 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(s.title)}
                    className="text-left hover:text-[#B8861B] dark:hover:text-[#DFB75A] transition-colors cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Branch Offices & Regional Coverage */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Branch Offices
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-white dark:bg-white/[0.02] border border-amber-300/60 dark:border-[#C59B27]/20 shadow-xs">
                <span className="text-[#8A5D14] dark:text-[#DFB75A] font-bold block">Vijayawada (Main Branch)</span>
                <span className="text-slate-600 dark:text-slate-400 block text-[11px] mt-0.5">
                  Cooperative Bank Colony, Moghalrajpuram - 520010
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-xs">
                <span className="text-slate-800 dark:text-slate-200 font-semibold block">Nellore Branch</span>
                <span className="text-slate-600 dark:text-slate-400 block text-[11px] mt-0.5">
                  Near Annamayya Circle, Magunta Layout - 524003
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-xs">
                <span className="text-slate-800 dark:text-slate-200 font-semibold block">Kavali Branch</span>
                <span className="text-slate-600 dark:text-slate-400 block text-[11px] mt-0.5">
                  GD Complex, Opposite RTC Bus Stand, Trunk Road - 524201
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-center md:text-left space-y-1">
            <p className="text-slate-600 dark:text-slate-400">
              &copy; {new Date().getFullYear()} Isha Associates. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500">
              “Funding Today, Securing Tomorrow” • Financial Facilitator &amp; Channel Partner
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-600 dark:text-slate-400">
            <button
              id="footer-privacy-btn"
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#B8861B] dark:hover:text-[#DFB75A] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <button
              id="footer-terms-btn"
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#B8861B] dark:hover:text-[#DFB75A] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <button
              id="footer-disclaimer-btn"
              type="button"
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-[#B8861B] dark:hover:text-[#DFB75A] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Disclaimer
            </button>
          </div>

          {/* Back to Top */}
          <div>
            <button
              id="back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-white dark:bg-white/5 hover:bg-[#B8861B] dark:hover:bg-[#C59B27] text-slate-700 dark:text-slate-400 hover:text-white dark:hover:text-[#070C16] border border-slate-200 dark:border-white/10 hover:border-[#B8861B] dark:hover:border-[#C59B27] transition-all cursor-pointer shadow-xs"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
