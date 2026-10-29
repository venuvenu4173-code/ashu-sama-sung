import { X, AlertCircle } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'disclaimer' | null;
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen || !type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      text: [
        'Notice for Client Review: This is a placeholder statement for Isha Associates legal review.',
        'At Isha Associates, we respect customer privacy. Any personal information, contact numbers, or loan requirement details submitted through our contact channels or WhatsApp are utilized solely for responding to your direct financial enquiries.',
        'We do not sell, rent, or distribute personal customer data to third-party marketing brokers. All data handling complies with applicable Indian legal guidelines.',
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      text: [
        'Notice for Client Review: This is a placeholder statement for Isha Associates legal review.',
        'Isha Associates operates as an independent financial solution and loan advisory service helping clients connect with banks and non-banking financial companies (NBFCs).',
        'Loan approvals, interest rates, sanctions, and disbursals are solely at the discretion of the respective lending institutions and governed by their underwriting norms and regulatory frameworks.',
      ],
    },
    disclaimer: {
      title: 'Disclaimer',
      text: [
        'Notice for Client Review: This is a placeholder statement for Isha Associates legal review.',
        'Isha Associates is a financial facilitator and channel partner. We do not provide guaranteed loan approvals or make unverified promises. Logos and trademarks displayed on this website belong entirely to their respective banks and financial institutions.',
        'Prospective borrowers are encouraged to read all loan-related terms and documentation carefully before entering into any lending agreement.',
      ],
    },
  };

  const current = contentMap[type];

  return (
    <div
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div
        id="legal-modal-card"
        className="w-full max-w-xl rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#C59B27]/40 p-6 sm:p-8 shadow-2xl space-y-5 relative text-left transition-colors duration-300"
      >
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
            {current.title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Client review banner */}
        <div className="p-3 rounded-lg bg-amber-50 dark:bg-[#C59B27]/10 border border-amber-200 dark:border-[#C59B27]/30 text-xs text-[#8A5D14] dark:text-[#DFB75A] flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Placeholder Document — Pending final review and customization by Isha Associates.</span>
        </div>

        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 max-h-[55vh] overflow-y-auto pr-2">
          {current.text.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
