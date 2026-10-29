import { Phone, MessageSquare, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface MobileBottomBarProps {
  onEnquireClick: () => void;
}

export default function MobileBottomBar({ onEnquireClick }: MobileBottomBarProps) {
  return (
    <aside
      id="mobile-bottom-action-bar"
      aria-label="Quick Mobile Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#070C16]/98 backdrop-blur-lg border-t border-slate-200 dark:border-[#C59B27]/30 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_-8px_25px_rgba(0,0,0,0.7)] transition-colors duration-300"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* CALL button */}
        <a
          id="mobile-bar-call"
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-amber-400 dark:hover:border-[#C59B27]/50 active:bg-slate-200 dark:active:bg-white/10 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#B8861B] dark:text-[#DFB75A] mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Call
          </span>
        </a>

        {/* WHATSAPP button */}
        <a
          id="mobile-bar-whatsapp"
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Isha Associates, I would like to enquire about your loan services.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 dark:bg-[#25D366]/15 border border-emerald-200 dark:border-[#25D366]/30 active:bg-emerald-100 dark:active:bg-[#25D366]/25 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#128C7E] dark:text-[#25D366] mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#128C7E] dark:text-[#25D366]">
            WhatsApp
          </span>
        </a>

        {/* ENQUIRE button */}
        <button
          id="mobile-bar-enquire"
          type="button"
          onClick={onEnquireClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#DFB75A] to-[#B8861B] text-[#070C16] font-bold shadow-md shadow-[#C59B27]/25 active:brightness-95 transition-all cursor-pointer"
        >
          <Send className="w-4 h-4 fill-[#070C16] mb-1" />
          <span className="text-[10px] font-black uppercase tracking-wider">
            Enquire
          </span>
        </button>
      </div>
    </aside>
  );
}
