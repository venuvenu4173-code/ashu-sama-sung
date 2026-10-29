import { ShieldCheck, Phone, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import { COMPANY_INFO, COMPANY_STATS } from '../data/company';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onEnquireClick: () => void;
}

export default function Hero({ onEnquireClick }: HeroProps) {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60 dark:from-[#070C16] dark:via-[#09101E] dark:to-[#070C16] transition-colors duration-300"
    >
      {/* Subtle architectural background gradients (financial corporate light/dark theme) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#C59B27]/10 dark:bg-[#C59B27]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-amber-500/5 dark:bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#DFB75A]/10 dark:bg-[#DFB75A]/5 rounded-full blur-[130px]" />

        {/* Fine geometric grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#C59B27 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/90 dark:bg-white/[0.04] border border-amber-200/80 dark:border-[#C59B27]/30 text-xs font-semibold text-[#8A5D14] dark:text-[#DFB75A] shadow-sm backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-[#B8861B] dark:text-[#C59B27]" />
              <span className="tracking-wide">Trusted Financial Advisory in Andhra Pradesh</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                <span className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B8861B] dark:text-[#DFB75A] font-sans mb-2">
                  Isha Associates Financial Solutions
                </span>
                <span className="block font-display font-bold">Funding today,</span>
                <span className="block gold-gradient-text font-display italic font-semibold">
                  Secure tomorrow
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
              Reliable and hassle-free financial solutions tailored to your needs.
            </p>

            {/* Value Highlights Pill Row */}
            <div className="flex flex-wrap gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8861B] dark:text-[#C59B27]" />
                <span>Simple Documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8861B] dark:text-[#C59B27]" />
                <span>Quick Service Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8861B] dark:text-[#C59B27]" />
                <span>40+ Banking Partners</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              {/* Primary CTA */}
              <button
                id="hero-enquire-btn"
                onClick={onEnquireClick}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#DFB75A] via-[#C59B27] to-[#B8861B] hover:from-[#F0C86D] hover:to-[#DFB75A] text-[#070C16] font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#C59B27]/25 hover:shadow-xl hover:shadow-[#C59B27]/35 transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA: Call Now */}
              <a
                id="hero-call-btn"
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-6 py-3.5 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-slate-50 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/15 hover:border-amber-400 dark:hover:border-[#C59B27]/50 text-slate-800 dark:text-white font-semibold text-sm shadow-sm transition-all duration-200 flex items-center justify-center gap-2.5"
              >
                <Phone className="w-4 h-4 text-[#B8861B] dark:text-[#DFB75A]" />
                <span>Call Now: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Regional Presence Footnote */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Building2 className="w-3.5 h-3.5 text-[#B8861B] dark:text-[#C59B27]" />
              <span>Serving Vijayawada (Main Branch), Nellore &amp; Kavali</span>
            </div>
          </div>

          {/* Right Column: Prominent Brand Card showcasing Official Isha Associates Identity */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative subtle border frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[#C59B27]/30 via-amber-200/20 dark:via-white/5 to-transparent blur-sm" />

              <div
                id="hero-brand-card"
                className="relative rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#0F172A] dark:to-[#070C16] border border-slate-200 dark:border-[#C59B27]/30 p-7 sm:p-8 shadow-2xl shadow-slate-200/80 dark:shadow-black/80 space-y-6 transition-colors duration-300"
              >
                {/* Official Logo Display - Preserving aspect ratio and exact picture styling */}
                <div className="bg-slate-50/80 dark:bg-[#050B14]/80 rounded-xl p-5 border border-slate-200/80 dark:border-white/10 flex flex-col items-center justify-center shadow-inner">
                  <img
                    src={theme === 'dark' ? '/assets/branding/isha-logo-dark.svg' : '/assets/branding/isha-logo.svg'}
                    alt="Isha Associates Official Emblem"
                    className="w-full max-w-[280px] h-auto object-contain"
                    style={{ aspectRatio: '800/640' }}
                  />
                </div>

                {/* Quick Stats Grid inside Hero Card */}
                <div className="grid grid-cols-2 gap-3 pt-1 border-t border-slate-200 dark:border-white/10">
                  {COMPANY_STATS.slice(0, 4).map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 text-center"
                    >
                      <div className="text-xl sm:text-2xl font-extrabold text-[#B8861B] dark:text-[#DFB75A] font-display">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-tight mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Assurance footer */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Advisory Active
                  </span>
                  <span className="text-[#B8861B] dark:text-[#C59B27] font-semibold">Quick &amp; Hassle-Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
