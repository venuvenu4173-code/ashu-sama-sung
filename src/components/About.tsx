import { Users, IndianRupee, MapPin, Layers } from 'lucide-react';
import { COMPANY_INFO, COMPANY_STATS } from '../data/company';

export default function About() {
  const statIcons = [Users, IndianRupee, MapPin, Layers];

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50/80 dark:bg-[#09101E]/60 border-y border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Official About Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100/70 dark:bg-[#C59B27]/10 border border-amber-300/80 dark:border-[#C59B27]/25 text-xs font-semibold uppercase tracking-widest text-[#8A5D14] dark:text-[#DFB75A]">
              About Isha Associates
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight leading-tight">
              Reliable Financial Solutions, <br />
              <span className="text-[#B8861B] dark:text-[#DFB75A]">Tailored to Your Future</span>
            </h2>

            {/* Exact provided company description */}
            <div className="p-6 rounded-xl bg-white dark:bg-white/[0.02] border border-amber-300/70 dark:border-[#C59B27]/20 shadow-sm dark:shadow-none relative">
              <div className="absolute top-0 left-6 -translate-y-1/2 px-2 py-0.5 bg-amber-50 dark:bg-[#070C16] border border-amber-300 dark:border-[#C59B27]/30 text-[10px] font-bold uppercase tracking-wider text-[#8A5D14] dark:text-[#C59B27] rounded">
                Our Commitment
              </div>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                {COMPANY_INFO.about}
              </p>
            </div>

            {/* Core Values / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none">
                <div className="text-xs font-bold text-[#B8861B] dark:text-[#DFB75A] uppercase tracking-wider mb-1">
                  Quick Service
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  Swift evaluation and coordinated document handling.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none">
                <div className="text-xs font-bold text-[#B8861B] dark:text-[#DFB75A] uppercase tracking-wider mb-1">
                  Simple Processes
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  Straightforward paperwork with zero hidden hassle.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none">
                <div className="text-xs font-bold text-[#B8861B] dark:text-[#DFB75A] uppercase tracking-wider mb-1">
                  Customer Friendly
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  Dedicated personalized advisory across our branches.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exactly the 4 specified statistics */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {COMPANY_STATS.map((stat, idx) => {
                const IconComponent = statIcons[idx % statIcons.length];
                return (
                  <div
                    key={idx}
                    id={`about-stat-${idx}`}
                    className="p-6 rounded-xl bg-white dark:bg-gradient-to-b dark:from-white/[0.05] dark:to-white/[0.01] border border-slate-200 dark:border-[#C59B27]/25 hover:border-amber-400 dark:hover:border-[#C59B27]/60 transition-all duration-300 shadow-md dark:shadow-lg group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-[#C59B27]/10 flex items-center justify-center text-[#B8861B] dark:text-[#DFB75A] mb-4 border border-amber-200 dark:border-[#C59B27]/20 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight group-hover:text-[#B8861B] dark:group-hover:text-[#DFB75A] transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1.5 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Assurance Note */}
            <div className="mt-4 p-3.5 rounded-lg bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 text-center text-xs text-slate-600 dark:text-slate-400 shadow-sm dark:shadow-none">
              Assisting customers across Vijayawada, Nellore, Kavali, and surrounding regions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
