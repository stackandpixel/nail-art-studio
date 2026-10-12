import React, { useState } from 'react';
import { studioConfig } from '../config/studioConfig';
import { MessageSquare, X, Send, Sparkles, Phone } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    {
      title: 'Book Studio Appointment',
      msg: `Hi ${studioConfig.brand.name}, I would like to book a nail appointment at your Baner studio. What slots are available this week?`,
    },
    {
      title: 'Bridal Nail Consultation',
      msg: `Hi Blush & Bloom, I am looking for bridal nail extensions for my wedding. Can we schedule a consultation?`,
    },
    {
      title: 'Academy Course Prospectus',
      msg: `Hi Blush & Bloom Academy, please send the syllabus details and next batch dates for the Professional Nail Tech Diploma.`,
    },
    {
      title: 'Get Price Quote for Photo',
      msg: `Hi Blush & Bloom, I have an inspiration photo from Pinterest. Can I share it here for an estimated price quote?`,
    },
  ];

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    const url = buildWhatsAppUrl(customMsg);
    window.open(url, '_blank', 'noopener,noreferrer');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-white shadow-2xl border border-[#EFE8E1] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-[#1E4D2B] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-sm leading-tight">
                  {studioConfig.brand.name}
                </h4>
                <p className="text-[11px] text-[#A5D6A7]">
                  Baner Desk · Typically replies in 15 mins
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close WhatsApp Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick choices body */}
          <div className="p-4 bg-[#FAF8F5] space-y-2 max-h-72 overflow-y-auto">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7D6266] mb-2">
              Select an enquiry topic:
            </p>
            {quickPrompts.map((p, idx) => (
              <a
                key={idx}
                href={buildWhatsAppUrl(p.msg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block p-2.5 rounded-xl bg-white hover:bg-[#F5F0EA] border border-[#EFE8E1] text-xs text-[#2E1F21] transition-all hover:border-[#8B263E]/40"
              >
                <div className="font-medium text-[#2E1F21]">{p.title}</div>
                <div className="text-[11px] text-[#7D6266] truncate mt-0.5">
                  {p.msg}
                </div>
              </a>
            ))}
          </div>

          {/* Custom text input */}
          <form onSubmit={handleSendCustom} className="p-3 bg-white border-t border-[#EFE8E1] flex items-center gap-2">
            <input
              type="text"
              placeholder="Or type a custom message..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="flex-1 px-3 py-2 text-xs bg-[#FAF8F5] border border-[#EFE8E1] rounded-lg focus:outline-none focus:border-[#2E7D32]"
            />
            <button
              type="submit"
              className="p-2 rounded-lg bg-[#2E7D32] hover:bg-[#1B5E20] text-white transition-colors cursor-pointer"
              aria-label="Send WhatsApp Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Demo phone display */}
          <div className="px-4 py-2 bg-[#F5F0EA] text-[10px] text-[#7D6266] flex items-center justify-between">
            <span>Official Desk: +91 {studioConfig.contact.whatsappNumber.slice(2)}</span>
            <span className="text-[#8B263E] font-medium">Baner, Pune</span>
          </div>

        </div>
      )}

      {/* Primary Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer ring-4 ring-white/80"
        aria-label="Open WhatsApp Support and Bookings"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-7 h-7" />
        )}
      </button>
    </div>
  );
};
