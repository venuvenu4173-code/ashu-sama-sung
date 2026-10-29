import { Headphones, Zap, Layers, Building2, Award, Users } from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/company';

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-[#B8861B] dark:text-[#DFB75A]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#B8861B] dark:text-[#DFB75A]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#B8861B] dark:text-[#DFB75A]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#B8861B] dark:text-[#DFB75A]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#B8861B] dark:text-[#DFB75A]" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5 text-[#B8861B] dark:text-[#DFB75A]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-slate-50/70 dark:bg-[#09101E]/50 border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100/70 dark:bg-[#C59B27]/10 border border-amber-300/80 dark:border-[#C59B27]/25 text-xs font-semibold uppercase tracking-widest text-[#8A5D14] dark:text-[#DFB75A]">
            Why Choose Isha Associates
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Financial Guidance You Can Depend On
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            We bridge the gap between your aspirations and financial institutions through honest, transparent, and dedicated advisory.
          </p>
        </div>

        {/* 6-Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US_ITEMS.map((item, idx) => (
            <div
              key={idx}
              id={`why-choose-${idx}`}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#0F172A] dark:to-[#0A1120] border border-slate-200 dark:border-white/10 hover:border-amber-400 dark:hover:border-[#C59B27]/50 transition-all duration-300 shadow-sm dark:shadow-md group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-white/[0.04] border border-amber-200 dark:border-[#C59B27]/30 flex items-center justify-center p-2.5 group-hover:bg-amber-100 dark:group-hover:bg-[#C59B27]/15 group-hover:border-[#B8861B] dark:group-hover:border-[#C59B27] transition-all">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display tracking-tight group-hover:text-[#B8861B] dark:group-hover:text-[#DFB75A] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-xs text-[#B8861B] dark:text-[#C59B27] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8861B] dark:bg-[#C59B27]" />
                <span>Dedicated Support</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
