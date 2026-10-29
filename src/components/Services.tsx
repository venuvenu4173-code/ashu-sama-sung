import { UserCheck, Home, Briefcase, Car, ShieldCheck, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#DFB75A]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#DFB75A]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#DFB75A]" />;
      case 'Car':
        return <Car className="w-6 h-6 text-[#DFB75A]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6 text-[#DFB75A]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C59B27]/10 border border-[#C59B27]/25 text-xs font-semibold uppercase tracking-widest text-[#DFB75A]">
            Financial Services
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Comprehensive Loan &amp; Insurance Services
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Reliable and hassle-free financial solutions tailored to your unique personal and commercial requirements.
          </p>
        </div>

        {/* Services Grid (5 services nicely arranged: 3 on top row, 2 centered below or balanced grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const isSpanCentered = index === 3 || index === 4;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`flex flex-col justify-between p-7 rounded-2xl bg-gradient-to-b from-[#0F172A]/90 to-[#0A1120]/90 border border-white/10 hover:border-[#C59B27]/60 transition-all duration-300 shadow-xl hover:shadow-[#C59B27]/10 hover:-translate-y-1 group ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-5">
                  {/* Icon Header */}
                  <div className="w-13 h-13 rounded-xl bg-white/[0.04] border border-[#C59B27]/30 flex items-center justify-center p-3 shadow-md group-hover:bg-[#C59B27]/15 group-hover:border-[#C59B27] transition-all">
                    {getIcon(service.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight group-hover:text-[#DFB75A] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 pt-2 border-t border-white/5">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enquire Now CTA */}
                <div className="pt-6 mt-6 border-t border-white/10">
                  <button
                    id={`service-enquire-btn-${service.id}`}
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 px-4 rounded-lg bg-white/5 hover:bg-[#C59B27] text-slate-200 hover:text-[#070C16] font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer border border-white/10 hover:border-[#C59B27]"
                  >
                    <span>Enquire About {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice of compliance */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-xl mx-auto">
          Financial approvals and terms are subject to profile verification, partner institution criteria, and regulatory guidelines.
        </div>
      </div>
    </section>
  );
}
