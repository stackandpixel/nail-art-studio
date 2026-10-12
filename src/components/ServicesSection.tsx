import React, { useState } from 'react';
import { studioConfig, ServiceItem } from '../config/studioConfig';
import { ArtisticNailVisual } from './ArtisticNailVisual';
import { Clock, MessageSquare, Calendar, Sparkles, Check } from 'lucide-react';
import { buildWhatsAppUrl, getServiceEnquiryMessage, formatINR } from '../utils/whatsapp';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'extensions', label: 'Gel & Acrylic Extensions' },
    { id: 'gel-art', label: 'Gel Art & Chrome' },
    { id: 'bridal-festive', label: 'Bridal & Festive' },
    { id: 'manicures', label: 'Classic Manicures' },
    { id: 'care', label: 'Refills & Safe Removal' },
  ];

  const filteredServices = activeFilter === 'all'
    ? studioConfig.services
    : studioConfig.services.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="py-20 bg-[#FAF8F5] border-b border-[#EFE8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B263E] font-medium mb-2">
              <span>Couture Menu</span>
              <span aria-hidden="true">·</span>
              <span>Pune Studio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2E1F21] font-normal tracking-tight [text-wrap:balance]">
              Artisanal Nail Services &amp; Sculpted Extensions
            </h2>
            <p className="text-sm sm:text-base text-[#5C4447] mt-3 leading-relaxed">
              Every appointment features thorough Russian dry cuticle prep, medical autoclave sterilization, and gentle non-acid bonders to safeguard natural nail longevity.
            </p>
          </div>

          <div className="text-xs text-[#7D6266] bg-[#F5F0EA] p-3 rounded-lg border border-[#EFE8E1] max-w-xs shrink-0">
            <span className="font-medium text-[#2E1F21]">Indicative Demo Pricing:</span> All prices are sample illustrative values for the sales demo.
          </div>
        </div>

        {/* Category Filter Tabs (Functional segmented buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-[#2E1F21] text-white shadow-sm'
                  : 'bg-white text-[#5C4447] hover:bg-[#F5F0EA] border border-[#EFE8E1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid (3-columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const whatsappUrl = buildWhatsAppUrl(
              getServiceEnquiryMessage(service.name, service.priceINR)
            );

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-[#EFE8E1] overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  {/* Visual Header */}
                  <div className="p-3">
                    <ArtisticNailVisual
                      theme={service.visualTheme}
                      title={service.name}
                      subtitle={service.bestFor}
                      aspectRatio="16:9"
                      badgeText={service.popular ? 'Most Popular' : undefined}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="px-6 pt-3 pb-4">
                    {/* Unboxed Metadata Line */}
                    <div className="flex items-center justify-between text-xs text-[#7D6266] mb-2 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#B76E79]" />
                        <span>{service.duration}</span>
                      </div>
                      <span className="capitalize text-[#8B263E]">
                        {service.category.replace('-', ' ')}
                      </span>
                    </div>

                    {/* Title & Price Line */}
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3 className="font-serif text-xl font-medium text-[#2E1F21] leading-tight group-hover:text-[#8B263E] transition-colors">
                        {service.name}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="font-serif text-lg font-semibold text-[#2E1F21] tabular-nums">
                          {formatINR(service.priceINR)}
                        </span>
                        {service.priceNote && (
                          <span className="text-[11px] text-[#7D6266] block -mt-1">
                            {service.priceNote}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#5C4447] leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Key features bullets */}
                    <div className="space-y-1.5 pt-3 border-t border-[#F5F0EA] mb-2">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-[#7D6266]">
                          <Check className="w-3 h-3 text-[#2E7D32] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-3 border-t border-[#FAF8F5]">
                  <button
                    onClick={() => onSelectServiceForBooking(service.name)}
                    className="w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E1F21] hover:bg-[#4A2D39] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#F4B8C5]" />
                    <span>Book Slot</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#1B5E20] bg-[#E8F5E9] hover:bg-[#C8E6C9] rounded-lg transition-colors flex items-center justify-center gap-1.5 text-center"
                    title={`Enquire on WhatsApp about ${service.name}`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#2E7D32]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Custom Nail Art Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FCE7EC] via-[#FAF8F5] to-[#FCE7EC] border border-[#EFE8E1] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-xl text-[#2E1F21] font-medium">
              Have an inspiration picture from Pinterest or Instagram?
            </h4>
            <p className="text-xs text-[#5C4447]">
              Send your reference screenshot directly to our WhatsApp consultation line for an instant price quote and time estimate.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl("Hi Blush & Bloom, I have an inspiration reference image from Instagram/Pinterest for custom nail art. Can I send it over for an estimated quote?")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E1F21] hover:bg-[#4A2D39] rounded-lg transition-all shadow-sm shrink-0 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#F4B8C5]" />
            <span>Send Reference on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
