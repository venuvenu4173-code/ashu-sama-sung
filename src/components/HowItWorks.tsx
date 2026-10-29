import { HOW_IT_WORKS_STEPS } from '../data/company';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 relative bg-white dark:bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100/70 dark:bg-[#C59B27]/10 border border-amber-300/80 dark:border-[#C59B27]/25 text-xs font-semibold uppercase tracking-widest text-[#8A5D14] dark:text-[#DFB75A]">
            Streamlined Process
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            How It Works &ndash; Loan Assistance Process
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            A transparent and simple 4-step pathway to guide you from initial enquiry to final financial assistance.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((stepItem, index) => (
            <div
              key={stepItem.step}
              id={`step-${stepItem.step}`}
              className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-[#0F172A]/70 border border-slate-200 dark:border-white/10 hover:border-amber-400 dark:hover:border-[#C59B27]/50 transition-all duration-300 shadow-sm dark:shadow-lg group hover:-translate-y-1"
            >
              {/* Step Number with gold accent */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-[#B8861B] dark:text-[#DFB75A] tracking-wider group-hover:scale-105 transition-transform">
                  {stepItem.step}
                </div>
                <div className="w-8 h-8 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400 shadow-xs">
                  #{index + 1}
                </div>
              </div>

              {/* Step Title & Description */}
              <div className="space-y-2.5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display tracking-tight group-hover:text-[#B8861B] dark:group-hover:text-[#DFB75A] transition-colors">
                  {stepItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {stepItem.description}
                </p>
              </div>

              {/* Progress Indicator line */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5">
                <div className="w-full h-1 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#B8861B] via-[#C59B27] to-[#DFB75A] rounded-full transition-all duration-500"
                    style={{ width: `${(index + 1) * 25}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
