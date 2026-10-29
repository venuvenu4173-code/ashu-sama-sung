import { useState, FormEvent, useEffect } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, Clock, MapPin, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { BRANCHES } from '../data/branches';
import { SERVICES } from '../data/services';
import { EnquiryFormData } from '../types';

interface ContactProps {
  initialLoanRequirement?: string;
}

export default function Contact({ initialLoanRequirement = '' }: ContactProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    mobileNumber: '',
    loanRequirement: initialLoanRequirement || 'Personal Loans',
    preferredBranch: 'Vijayawada (Main Branch)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Synchronize when parent passes a new selected service
  useEffect(() => {
    if (initialLoanRequirement) {
      setFormData((prev) => ({
        ...prev,
        loanRequirement: initialLoanRequirement,
      }));
    }
  }, [initialLoanRequirement]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!formData.fullName.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }

    if (!formData.mobileNumber.trim() || formData.mobileNumber.trim().length < 10) {
      setValidationError('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Build WhatsApp pre-filled text according to exact required specification
    const textLines = [
      'Hello Isha Associates,',
      '',
      'I would like to enquire about:',
      '',
      `Name: ${formData.fullName.trim()}`,
      `Mobile: ${formData.mobileNumber.trim()}`,
      `Loan Requirement: ${formData.loanRequirement}`,
      `Preferred Branch: ${formData.preferredBranch}`,
      formData.message.trim() ? `Message: ${formData.message.trim()}` : 'Message: Looking forward to discussing details.',
    ];

    const fullMessage = textLines.join('\n');
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab for user to review and manually press SEND
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/80 dark:bg-[#09101E]/80 border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100/70 dark:bg-[#C59B27]/10 border border-amber-300/80 dark:border-[#C59B27]/25 text-xs font-semibold uppercase tracking-widest text-[#8A5D14] dark:text-[#DFB75A]">
            Get In Touch
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Contact Isha Associates &amp; Direct Enquiry
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Reach out for reliable financial guidance. Fill in your details below to connect with us directly on WhatsApp or phone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Communication Channels & Office Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-white/10 space-y-6 shadow-md dark:shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display border-b border-slate-200 dark:border-white/10 pb-4">
                Immediate Assistance
              </h3>

              {/* Direct Phone Call Card */}
              <a
                id="contact-phone-card"
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] hover:bg-amber-50/50 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 hover:border-amber-400 dark:hover:border-[#C59B27]/50 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-[#C59B27]/15 border border-amber-200 dark:border-[#C59B27]/30 flex items-center justify-center text-[#B8861B] dark:text-[#DFB75A] group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                    Phone Support
                  </div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#B8861B] dark:group-hover:text-[#DFB75A] transition-colors">
                    {COMPANY_INFO.phoneDisplay}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Click to call our advisory desk</div>
                </div>
              </a>

              {/* Direct WhatsApp Card */}
              <a
                id="contact-whatsapp-card"
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Isha Associates, I would like to enquire about your loan services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 dark:bg-[#25D366]/10 hover:bg-emerald-100/50 dark:hover:bg-[#25D366]/20 border border-emerald-200 dark:border-[#25D366]/25 hover:border-[#25D366]/50 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#128C7E] dark:text-[#25D366] group-hover:scale-105 transition-transform shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#128C7E] dark:text-[#25D366] font-bold">
                    WhatsApp Chat
                  </div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#128C7E] dark:group-hover:text-[#25D366] transition-colors">
                    +{COMPANY_INFO.whatsappNumber}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Instant connection with our team</div>
                </div>
              </a>

              {/* Hours & Branches Brief */}
              <div className="pt-2 space-y-3 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#B8861B] dark:text-[#C59B27] shrink-0" />
                  <span>{COMPANY_INFO.operatingHours}</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B8861B] dark:text-[#C59B27] shrink-0 mt-0.5" />
                  <span>Branches in <strong>Vijayawada (Main Branch)</strong>, Nellore, and Kavali</span>
                </div>
              </div>
            </div>

            {/* Quick Assurance */}
            <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-3 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-[#B8861B] dark:text-[#C59B27] shrink-0" />
              <span>Zero obligation consultation. We protect your privacy and never spam your number.</span>
            </div>
          </div>

          {/* Right Column: Enquiry Form with WhatsApp Auto Pre-fill */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#0F172A] dark:to-[#070C16] border border-slate-200 dark:border-[#C59B27]/30 shadow-xl dark:shadow-2xl space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                  Submit Loan &amp; Financial Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Upon submitting, this form will open WhatsApp with your message already structured. Simply tap Send to connect.
                </p>
              </div>

              {validationError && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm space-y-1">
                  <div className="font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>WhatsApp Chat Opened!</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs">
                    Please press &quot;Send&quot; in WhatsApp to deliver your message. If it didn&apos;t open automatically, you can call us directly at <strong>{COMPANY_INFO.phoneDisplay}</strong>.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" id="enquiry-form">
                {/* Full Name */}
                <div>
                  <label htmlFor="form-fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Full Name <span className="text-[#B8861B] dark:text-[#DFB75A]">*</span>
                  </label>
                  <input
                    id="form-fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#070C16] border border-slate-300 dark:border-white/15 focus:border-[#B8861B] dark:focus:border-[#C59B27] focus:ring-1 focus:ring-[#B8861B] dark:focus:ring-[#C59B27] text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all outline-none"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="form-mobileNumber" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Mobile Number <span className="text-[#B8861B] dark:text-[#DFB75A]">*</span>
                  </label>
                  <input
                    id="form-mobileNumber"
                    type="tel"
                    required
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    placeholder="10-digit mobile number (e.g. 9052802898)"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#070C16] border border-slate-300 dark:border-white/15 focus:border-[#B8861B] dark:focus:border-[#C59B27] focus:ring-1 focus:ring-[#B8861B] dark:focus:ring-[#C59B27] text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all outline-none"
                  />
                </div>

                {/* Loan Requirement Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-loanRequirement" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Loan Requirement <span className="text-[#B8861B] dark:text-[#DFB75A]">*</span>
                    </label>
                    <select
                      id="form-loanRequirement"
                      value={formData.loanRequirement}
                      onChange={(e) => setFormData({ ...formData, loanRequirement: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#070C16] border border-slate-300 dark:border-white/15 focus:border-[#B8861B] dark:focus:border-[#C59B27] focus:ring-1 focus:ring-[#B8861B] dark:focus:ring-[#C59B27] text-sm text-slate-900 dark:text-white transition-all outline-none cursor-pointer"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title} className="bg-white dark:bg-[#0F172A] text-slate-900 dark:text-white">
                          {s.title}
                        </option>
                      ))}
                      <option value="Multiple Loan Services" className="bg-white dark:bg-[#0F172A] text-slate-900 dark:text-white">
                        Multiple Loan Services
                      </option>
                      <option value="General Financial Consultation" className="bg-white dark:bg-[#0F172A] text-slate-900 dark:text-white">
                        General Financial Consultation
                      </option>
                    </select>
                  </div>

                  {/* Preferred Branch */}
                  <div>
                    <label htmlFor="form-preferredBranch" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Preferred Branch <span className="text-[#B8861B] dark:text-[#DFB75A]">*</span>
                    </label>
                    <select
                      id="form-preferredBranch"
                      value={formData.preferredBranch}
                      onChange={(e) => setFormData({ ...formData, preferredBranch: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#070C16] border border-slate-300 dark:border-white/15 focus:border-[#B8861B] dark:focus:border-[#C59B27] focus:ring-1 focus:ring-[#B8861B] dark:focus:ring-[#C59B27] text-sm text-slate-900 dark:text-white transition-all outline-none cursor-pointer"
                    >
                      {BRANCHES.map((b) => (
                        <option key={b.id} value={`${b.name} ${b.isMainBranch ? '(Main Branch)' : ''}`} className="bg-white dark:bg-[#0F172A] text-slate-900 dark:text-white">
                          {b.name} {b.isMainBranch ? '(Main Branch)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="form-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Message / Query Details
                  </label>
                  <textarea
                    id="form-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your funding requirement or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#070C16] border border-slate-300 dark:border-white/15 focus:border-[#B8861B] dark:focus:border-[#C59B27] focus:ring-1 focus:ring-[#B8861B] dark:focus:ring-[#C59B27] text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  id="form-submit-whatsapp-btn"
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#DFB75A] via-[#C59B27] to-[#B8861B] hover:from-[#F0C86D] hover:to-[#DFB75A] text-[#070C16] font-bold text-sm uppercase tracking-wider shadow-xl shadow-[#C59B27]/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <MessageSquare className="w-4 h-4 fill-[#070C16]" />
                  <span>Send Enquiry via WhatsApp</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </form>

              <div className="text-center text-[11px] text-slate-500 pt-1">
                Central Contact Phone: <strong>{COMPANY_INFO.phoneDisplay}</strong> • WhatsApp Config: <code className="text-[#B8861B] dark:text-[#C59B27]">+{COMPANY_INFO.whatsappNumber}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
