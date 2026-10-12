import React, { useState } from 'react';
import { studioConfig } from '../config/studioConfig';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'appointments', label: 'Bookings & Policies' },
    { id: 'care', label: 'Nail Care & Longevity' },
    { id: 'bridal', label: 'Bridal & Custom Designs' },
    { id: 'academy', label: 'Academy & Certification' },
  ];

  const filteredFaqs = categoryFilter === 'all'
    ? studioConfig.faqs
    : studioConfig.faqs.filter(f => f.category === categoryFilter);

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#EFE8E1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#8B263E] font-medium">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2E1F21] font-normal tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#5C4447]">
            Everything you need to know about preparing for your manicure or enrolling in our technician courses.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setCategoryFilter(c.id);
                setOpenIdx(null);
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                categoryFilter === c.id
                  ? 'bg-[#2E1F21] text-white shadow-xs'
                  : 'bg-white text-[#5C4447] hover:bg-[#F5F0EA] border border-[#EFE8E1]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#EFE8E1] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FDFBF7] transition-colors"
                >
                  <span className="font-serif text-base text-[#2E1F21] font-medium leading-snug">
                    {faq.question}
                  </span>
                  <div className="p-1.5 rounded-full bg-[#FAF8F5] text-[#2E1F21] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#5C4447] leading-relaxed border-t border-[#FAF8F5] animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
