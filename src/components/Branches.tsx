import { MapPin, Phone, Navigation, Star, Building } from 'lucide-react';
import { BRANCHES } from '../data/branches';

export default function Branches() {
  return (
    <section id="branches" className="py-20 lg:py-28 relative bg-white dark:bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100/70 dark:bg-[#C59B27]/10 border border-amber-300/80 dark:border-[#C59B27]/25 text-xs font-semibold uppercase tracking-widest text-[#8A5D14] dark:text-[#DFB75A]">
            <Building className="w-3.5 h-3.5 text-[#B8861B] dark:text-[#C59B27]" />
            <span>Our Presence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Branch Locations Across Andhra Pradesh
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Visit us at any of our offices across Andhra Pradesh for in-person consultation and dedicated financial guidance.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BRANCHES.map((branch) => {
            const isMain = branch.isMainBranch;

            return (
              <div
                key={branch.id}
                id={`branch-card-${branch.id}`}
                className={`relative rounded-2xl flex flex-col justify-between p-7 sm:p-8 transition-all duration-300 shadow-lg ${
                  isMain
                    ? 'bg-gradient-to-b from-amber-50/80 via-white to-amber-50/40 dark:from-[#132238] dark:via-[#0F1A2C] dark:to-[#09111D] border-2 border-[#B8861B] dark:border-[#C59B27] shadow-xl shadow-amber-900/5 dark:shadow-2xl dark:shadow-[#C59B27]/10 md:-translate-y-2'
                    : 'bg-slate-50/80 dark:bg-[#0F172A]/80 border border-slate-200 dark:border-white/10 hover:border-amber-400 dark:hover:border-[#C59B27]/40'
                }`}
              >
                {/* Visual Highlight Badge for MAIN BRANCH */}
                {isMain && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#DFB75A] via-[#C59B27] to-[#B8861B] text-[#070C16] text-[11px] font-black tracking-widest uppercase shadow-md shadow-[#C59B27]/30 flex items-center gap-1.5 whitespace-nowrap">
                    <Star className="w-3.5 h-3.5 fill-[#070C16]" />
                    <span>MAIN BRANCH</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Branch Name Header */}
                  <div className="flex items-start justify-between gap-3 pt-2">
                    <div>
                      <div className="text-xs uppercase tracking-wider font-bold text-[#B8861B] dark:text-[#DFB75A] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#B8861B] dark:text-[#C59B27]" />
                        <span>{branch.city} Office</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display mt-1">
                        {branch.name}
                      </h3>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300">
                      <Building className="w-5 h-5 text-[#B8861B] dark:text-[#C59B27]" />
                    </div>
                  </div>

                  {/* Address Box */}
                  <div className="p-4 rounded-xl bg-white dark:bg-black/30 border border-slate-200 dark:border-white/5 space-y-1 shadow-xs">
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1">
                      Office Address
                    </div>
                    {branch.addressLines.map((line, i) => (
                      <div key={i} className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-snug">
                        {line}
                      </div>
                    ))}
                  </div>

                  {/* Phone Information */}
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-white/5 flex items-center justify-center text-[#B8861B] dark:text-[#DFB75A] shrink-0 border border-amber-200/50 dark:border-transparent">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">Direct Phone</div>
                      <a
                        href={`tel:${branch.phoneRaw}`}
                        className="font-bold text-slate-900 dark:text-white hover:text-[#B8861B] dark:hover:text-[#DFB75A] transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Branch Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-200 dark:border-white/10">
                  {/* Call Button */}
                  <a
                    id={`branch-call-btn-${branch.id}`}
                    href={`tel:${branch.phoneRaw}`}
                    className="py-2.5 px-3 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-amber-400 dark:hover:border-[#C59B27]/40 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B8861B] dark:text-[#DFB75A]" />
                    <span>Call</span>
                  </a>

                  {/* Get Directions Button */}
                  <a
                    id={`branch-directions-btn-${branch.id}`}
                    href={branch.mapQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-2.5 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isMain
                        ? 'bg-gradient-to-r from-[#DFB75A] to-[#B8861B] text-[#070C16] hover:brightness-105 shadow-sm'
                        : 'bg-slate-200 dark:bg-white/10 hover:bg-[#B8861B] dark:hover:bg-[#C59B27] text-slate-800 dark:text-white hover:text-white dark:hover:text-[#070C16] border border-slate-300 dark:border-white/10'
                    }`}
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
