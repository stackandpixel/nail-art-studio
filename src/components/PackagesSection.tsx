import React from 'react';
import { studioConfig } from '../config/studioConfig';
import { Check, Clock, MessageSquare, Calendar, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl, getPackageEnquiryMessage, formatINR } from '../utils/whatsapp';

interface PackagesSectionProps {
  onSelectPackageForBooking: (packageName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackageForBooking,
}) => {
  return (
    <section id="packages" className="py-20 bg-white border-b border-[#EFE8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#8B263E] font-medium">
            <span>Curated Rituals</span>
            <span aria-hidden="true">·</span>
            <span>Bundled Value</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2E1F21] font-normal tracking-tight [text-wrap:balance]">
            Signature Studio Packages
          </h2>
          <p className="text-sm sm:text-base text-[#5C4447] leading-relaxed">
            Thoughtfully packaged combinations of Russian cuticle treatments, extension sculpting, and signature nail art designed for weddings, vacations, and daily luxury.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studioConfig.packages.map((pkg) => {
            const whatsappUrl = buildWhatsAppUrl(
              getPackageEnquiryMessage(pkg.name, pkg.priceINR)
            );

            return (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.isBestseller
                    ? 'bg-[#FAF8F5] border-2 border-[#8B263E] shadow-md ring-1 ring-[#8B263E]/20'
                    : 'bg-white border border-[#EFE8E1] hover:border-[#D8C7B8] hover:shadow-sm'
                }`}
              >
                {/* Bestseller Badge (Unboxed text tag) */}
                {pkg.isBestseller && (
                  <div className="absolute -top-3 left-6 bg-[#8B263E] text-white px-3 py-0.5 rounded-full text-[10px] uppercase font-semibold tracking-widest shadow-sm">
                    Most Popular Ritual
                  </div>
                )}

                <div>
                  {/* Title & Tagline */}
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-medium text-[#2E1F21]">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#7D6266] mt-1 line-clamp-2">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price display with tabular nums */}
                  <div className="py-4 border-y border-[#EFE8E1] mb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-3xl font-semibold text-[#2E1F21] tabular-nums">
                        {formatINR(pkg.priceINR)}
                      </span>
                      {pkg.originalPriceINR && (
                        <span className="text-xs text-[#7D6266] line-through tabular-nums">
                          {formatINR(pkg.originalPriceINR)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#7D6266] mt-1">
                      <Clock className="w-3 h-3 text-[#B76E79]" />
                      <span>{pkg.duration} appointment</span>
                    </div>
                  </div>

                  {/* Recommended for note */}
                  <div className="mb-5 bg-[#F5F0EA]/70 p-3 rounded-lg text-[11px] text-[#5C4447]">
                    <span className="font-semibold text-[#2E1F21]">Best For: </span>
                    {pkg.recommendedFor}
                  </div>

                  {/* Inclusions list */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#2E1F21]">
                      What's Included:
                    </p>
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#5C4447]">
                        <Check className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Buttons */}
                <div className="space-y-2 pt-4 border-t border-[#EFE8E1]">
                  <button
                    onClick={() => onSelectPackageForBooking(pkg.name)}
                    className="w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E1F21] hover:bg-[#4A2D39] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#F4B8C5]" />
                    <span>Select Package</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 text-xs font-semibold uppercase tracking-wider text-[#1B5E20] bg-[#E8F5E9] hover:bg-[#C8E6C9] rounded-lg transition-colors flex items-center justify-center gap-1.5 text-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#2E7D32]" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Fictional demo notice disclaimer */}
        <p className="text-center text-xs text-[#7D6266] mt-10">
          * Fictional demonstration pricing for the sales prototype. Final pricing, discounts, and custom inclusions can be configured in <code className="bg-[#FAF8F5] px-1 py-0.5 rounded border border-[#EFE8E1] text-[#2E1F21]">studioConfig.ts</code>.
        </p>

      </div>
    </section>
  );
};
