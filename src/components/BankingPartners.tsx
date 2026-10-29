import { useState, useMemo } from 'react';
import { Search, X, Building, Landmark, CheckCircle, ShieldCheck } from 'lucide-react';
import { BANKING_PARTNERS } from '../data/partners';
import { PartnerCategory } from '../types';

export default function BankingPartners() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | PartnerCategory>('ALL');

  // Filter partners based on search and selected category
  const filteredPartners = useMemo(() => {
    return BANKING_PARTNERS.filter((partner) => {
      const matchesSearch =
        partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        partner.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (partner.tagline && partner.tagline.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'ALL' || partner.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const bankCount = useMemo(
    () => BANKING_PARTNERS.filter((p) => p.category === 'Bank').length,
    []
  );
  const nbfcCount = useMemo(
    () => BANKING_PARTNERS.filter((p) => p.category === 'NBFC').length,
    []
  );

  return (
    <section id="partners" className="py-20 lg:py-28 bg-[#09101E]/70 border-y border-white/5 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C59B27]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C59B27]/10 border border-[#C59B27]/25 text-xs font-semibold uppercase tracking-widest text-[#DFB75A]">
            <Landmark className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Institutional Network</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Banking &amp; Financial Partners
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We collaborate with India’s leading scheduled commercial banks and premier regulated NBFCs to facilitate the most suitable financing for you.
          </p>

          {/* Verification Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{BANKING_PARTNERS.length} Empanelled Financial Institutions</span>
          </div>
        </div>

        {/* Filter Controls Bar: Category Tabs & Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 p-3 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <button
              id="filter-all-btn"
              type="button"
              onClick={() => setSelectedCategory('ALL')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'ALL'
                  ? 'bg-gradient-to-r from-[#DFB75A] to-[#B8861B] text-[#070C16] shadow-md shadow-[#C59B27]/20'
                  : 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10'
              }`}
            >
              All Partners ({BANKING_PARTNERS.length})
            </button>

            <button
              id="filter-banks-btn"
              type="button"
              onClick={() => setSelectedCategory('Bank')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'Bank'
                  ? 'bg-gradient-to-r from-[#DFB75A] to-[#B8861B] text-[#070C16] shadow-md shadow-[#C59B27]/20'
                  : 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10'
              }`}
            >
              <Landmark className="w-3.5 h-3.5" />
              <span>Banks ({bankCount})</span>
            </button>

            <button
              id="filter-nbfc-btn"
              type="button"
              onClick={() => setSelectedCategory('NBFC')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'NBFC'
                  ? 'bg-gradient-to-r from-[#DFB75A] to-[#B8861B] text-[#070C16] shadow-md shadow-[#C59B27]/20'
                  : 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10'
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              <span>NBFCs &amp; Financial ({nbfcCount})</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="partner-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search bank or NBFC..."
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-[#070C16] border border-white/15 focus:border-[#C59B27] focus:outline-none focus:ring-1 focus:ring-[#C59B27] text-xs sm:text-sm text-white placeholder-slate-500 transition-all"
            />
            {searchQuery && (
              <button
                id="partner-search-clear-btn"
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Results Count Banner */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
          <span>
            Showing <strong className="text-white">{filteredPartners.length}</strong> of {BANKING_PARTNERS.length} institutions
          </span>
          {searchQuery && (
            <span>
              Search query: &quot;{searchQuery}&quot;
            </span>
          )}
        </div>

        {/* Partners Grid: 2 cols mobile, 3 cols tablet, 4 cols desktop */}
        {filteredPartners.length > 0 ? (
          <div
            id="partners-grid"
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {filteredPartners.map((partner) => {
              const isBank = partner.category === 'Bank';
              return (
                <div
                  key={partner.slug}
                  id={`partner-card-${partner.slug}`}
                  className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-gradient-to-b from-[#0F172A] to-[#070C16] border border-white/10 hover:border-[#C59B27]/50 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#C59B27]/5 hover:-translate-y-1"
                >
                  {/* Category Pill Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isBank
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}
                    >
                      {partner.category}
                    </span>

                    <span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Partner
                    </span>
                  </div>

                  {/* Institution Official Logo Container */}
                  <div className="h-20 sm:h-24 w-full flex items-center justify-center p-2 rounded-lg bg-black/40 border border-white/5 group-hover:border-white/10 transition-colors my-auto overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      loading="lazy"
                      className="max-h-16 sm:max-h-18 max-w-[88%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Institution Name & Info */}
                  <div className="pt-3 border-t border-white/5 mt-3">
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#DFB75A] transition-colors line-clamp-1">
                      {partner.name}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                      {partner.categoryLabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-16 text-center space-y-3 bg-white/[0.02] border border-white/5 rounded-2xl">
            <Building className="w-10 h-10 text-slate-600 mx-auto" />
            <div className="text-base font-semibold text-white">
              No institution found matching &quot;{searchQuery}&quot;
            </div>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Try searching by a different bank or NBFC name, or reset your filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('ALL');
              }}
              className="mt-2 px-4 py-2 rounded-lg bg-[#C59B27]/20 text-[#DFB75A] text-xs font-semibold hover:bg-[#C59B27]/30 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Future maintenance guidance notice */}
        <div className="mt-12 text-center text-[11px] text-slate-400">
          Source of truth: Uploaded partner documentation. Logos and trademarks belong to their respective institutions.
        </div>
      </div>
    </section>
  );
}
