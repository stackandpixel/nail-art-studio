import React from 'react';
import { studioConfig } from '../config/studioConfig';
import { Star, MessageSquare } from 'lucide-react';
import { buildWhatsAppUrl, getGeneralBookingMessage } from '../utils/whatsapp';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#EFE8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#8B263E] font-medium">
            <span>Client Stories</span>
            <span aria-hidden="true">·</span>
            <span>Demonstration Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2E1F21] font-normal tracking-tight [text-wrap:balance]">
            Loved by Brides, Professionals &amp; Academy Graduates
          </h2>
          <p className="text-sm text-[#5C4447]">
            Sample reviews demonstrating how client feedback and social proof appear on the live website.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studioConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EFE8E1] flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="space-y-3">
                {/* Demo Notice Marker */}
                <div className="flex items-center justify-between text-[10px] text-[#7D6266] border-b border-[#EFE8E1] pb-2 font-mono">
                  <span>DEMO REVIEW</span>
                  <span>{t.date}</span>
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs text-[#2E1F21] leading-relaxed italic">
                  {t.quote}
                </p>
              </div>

              {/* Client Attributions */}
              <div className="pt-3 border-t border-[#EFE8E1]">
                <h4 className="font-serif text-sm font-semibold text-[#2E1F21]">
                  {t.clientName}
                </h4>
                <p className="text-[11px] text-[#8B263E] font-medium">
                  {t.occasion}
                </p>
                <div className="flex items-center justify-between text-[11px] text-[#7D6266] mt-1">
                  <span>{t.location}</span>
                  <span className="truncate max-w-[120px]">{t.serviceTaken}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo note */}
        <div className="mt-10 p-4 rounded-xl bg-[#F5F0EA] border border-[#EFE8E1] text-center text-xs text-[#7D6266] max-w-xl mx-auto">
          <span className="font-semibold text-[#2E1F21]">Stack &amp; Pixel Pre-Launch Note:</span> Fictional reviews shown above during development. Before going live, replace with your genuine Google Maps and Instagram reviews in <code className="text-[#8B263E]">studioConfig.ts</code>.
        </div>

      </div>
    </section>
  );
};
