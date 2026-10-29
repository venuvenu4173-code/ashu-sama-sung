import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onEnquireClick: () => void;
}

export default function Navbar({ onEnquireClick }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'partners', 'branches', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Loan Services', href: '#services', id: 'services' },
    { label: 'Banking Partners', href: '#partners', id: 'partners' },
    { label: 'Branches', href: '#branches', id: 'branches' },
    { label: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#070C16]/95 backdrop-blur-md border-b border-slate-200 dark:border-[#C59B27]/20 shadow-md shadow-slate-900/5 dark:shadow-xl dark:shadow-black/50 py-2.5'
          : 'bg-white/90 dark:bg-[#070C16]/80 backdrop-blur-sm border-b border-slate-200/80 dark:border-white/5 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Visually prominent and preserved aspect ratio */}
          <a
            href="#home"
            id="navbar-brand-logo"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C59B27]/50 rounded-lg p-1 transition-transform"
            aria-label="Isha Associates - Home"
          >
            <div className="relative flex items-center">
              {/* Official Isha Associates Logo SVG - Adapt to current theme */}
              <img
                src={theme === 'dark' ? '/assets/branding/isha-logo-dark.svg' : '/assets/branding/isha-logo.svg'}
                alt="Isha Associates Logo"
                className="h-11 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                style={{ aspectRatio: '800/640', maxHeight: '56px' }}
              />
            </div>
            {/* Desktop text accent line */}
            <div className="hidden xl:flex flex-col border-l border-slate-200 dark:border-white/10 pl-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B8861B] dark:text-[#C59B27]">Financial Solutions</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">Vijayawada • Nellore • Kavali</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#B8861B] dark:text-[#DFB75A] font-bold bg-amber-50 dark:bg-[#C59B27]/10 shadow-[inset_0_1px_0_0_rgba(184,134,27,0.25)]'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-[#B8861B] via-[#DFB75A] to-[#B8861B] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Light / Dark Mode Toggle Button */}
            <button
              id="navbar-theme-toggle-btn"
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Light/Dark Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#DFB75A]" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Direct Phone Call Button */}
            <a
              id="navbar-phone-btn"
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-amber-400 dark:hover:border-[#C59B27]/40 transition-all duration-200"
              title="Direct Call to Isha Associates"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8861B] dark:text-[#C59B27]" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            {/* Enquire Now CTA Button */}
            <button
              id="navbar-enquire-btn"
              onClick={onEnquireClick}
              className="relative group overflow-hidden px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-[#070C16] bg-gradient-to-r from-[#DFB75A] via-[#C59B27] to-[#B8861B] hover:from-[#F0C86D] hover:to-[#DFB75A] transition-all duration-200 shadow-md shadow-[#C59B27]/20 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-nav-theme-toggle"
              type="button"
              onClick={toggleTheme}
              className="p-2 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer"
              aria-label="Toggle Light/Dark Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#DFB75A]" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <a
              id="mobile-nav-call-quick"
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="p-2 text-[#B8861B] dark:text-[#C59B27] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg sm:hidden"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#B8861B] dark:text-[#DFB75A]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden fixed inset-x-0 top-[60px] bg-white/98 dark:bg-[#070C16]/98 backdrop-blur-xl border-b border-slate-200 dark:border-[#C59B27]/20 shadow-2xl px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto"
        >
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`mobile-link-${link.id}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#B8861B] dark:text-[#DFB75A] bg-amber-50 dark:bg-[#C59B27]/15 border-l-2 border-[#B8861B] dark:border-[#DFB75A] font-bold'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-3">
            {/* Theme switcher inside mobile drawer */}
            <button
              type="button"
              onClick={toggleTheme}
              className="w-full flex items-center justify-between py-3 px-4 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-semibold text-sm cursor-pointer"
            >
              <span className="flex items-center gap-2">
                {theme === 'dark' ? <Sun className="w-4 h-4 text-[#DFB75A]" /> : <Moon className="w-4 h-4 text-slate-700" />}
                <span>Theme: {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
              </span>
              <span className="text-xs text-[#B8861B] dark:text-[#DFB75A] font-bold uppercase">
                Switch to {theme === 'dark' ? 'Light' : 'Dark'}
              </span>
            </button>

            <a
              id="mobile-drawer-call-btn"
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/15 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:border-[#B8861B]/50"
            >
              <Phone className="w-4 h-4 text-[#B8861B] dark:text-[#C59B27]" />
              <span>Call: {COMPANY_INFO.phoneDisplay}</span>
            </a>

            <a
              id="mobile-drawer-whatsapp-btn"
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Isha Associates, I would like to enquire about your financial solutions.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 text-[#128C7E] dark:text-[#25D366] font-semibold text-sm hover:bg-[#25D366]/25"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <button
              id="mobile-drawer-enquire-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onEnquireClick();
              }}
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#DFB75A] to-[#B8861B] text-[#070C16] font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#C59B27]/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-2 text-center text-xs text-slate-500">
            Isha Associates • Main Branch: Vijayawada
          </div>
        </div>
      )}
    </header>
  );
}
