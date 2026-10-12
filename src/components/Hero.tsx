import React from 'react';
import { studioConfig } from '../config/studioConfig';
import { Sparkles, Calendar, GraduationCap, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { buildWhatsAppUrl, getGeneralBookingMessage } from '../utils/whatsapp';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-10 pb-16 sm:pb-24 border-b border-[#EFE8E1]">
      {/* Background ambient lighting blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FCE7EC] rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#EFE8E1] rounded-full blur-3xl opacity-40 pointer-events-none translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Hero Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Kicker (Unboxed text with typographic separator, zero pills) */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B263E] font-medium">
              <span>Nail Art Studio</span>
              <span aria-hidden="true">·</span>
              <span>Professional Academy</span>
              <span aria-hidden="true">·</span>
              <span>Baner, Pune</span>
            </div>

            {/* Display Headline with balanced wrap */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2E1F21] tracking-tight leading-[1.12] [text-wrap:balance]">
              Beautiful Nails. <br />
              <span className="italic font-light text-[#8B263E]">Bold Confidence.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5C4447] max-w-xl font-normal leading-relaxed">
              {studioConfig.brand.heroSubtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBookingModal}
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#2E1F21] hover:bg-[#4A2D39] rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#F4B8C5]" />
                <span>Book Your Appointment</span>
              </button>

              <a
                href="#academy"
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#2E1F21] bg-white hover:bg-[#FDF2F4] border border-[#D8C7B8] rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-[#8B263E]" />
                <span>Explore Our Courses</span>
              </a>

              <a
                href={buildWhatsAppUrl(getGeneralBookingMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#1B5E20] hover:text-[#0D3813] transition-colors flex items-center gap-1.5"
                title="Chat with our front desk in Pune"
              >
                <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
                <span>Enquire on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Trust Markers Bar (Clean unboxed statistics with tabular numerals) */}
            <div className="pt-8 border-t border-[#EFE8E1] grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <p className="font-serif text-2xl font-semibold text-[#2E1F21] tabular-nums">
                  100%
                </p>
                <p className="text-xs text-[#7D6266] mt-0.5">Autoclave Sterilized</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-[#2E1F21] tabular-nums">
                  120+
                </p>
                <p className="text-xs text-[#7D6266] mt-0.5">Couture Gel Shades</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-[#2E1F21] tabular-nums">
                  ₹499
                </p>
                <p className="text-xs text-[#7D6266] mt-0.5">Services Starting At</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-[#2E1F21] tabular-nums">
                  500+
                </p>
                <p className="text-xs text-[#7D6266] mt-0.5">Certified Students</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative frame */}
              <div className="p-3 bg-white/80 rounded-2xl shadow-xl border border-[#EFE8E1] backdrop-blur-sm">
                
                {/* Main Visual Presentation */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-[#2E1F21] via-[#5C2434] to-[#B76E79] text-white p-6 flex flex-col justify-between">
                  
                  {/* Subtle Geometric Graphic Grid Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#F4B8C5_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

                  {/* Top editorial stamp */}
                  <div className="relative z-10 flex items-center justify-between text-xs tracking-widest uppercase">
                    <span className="text-[#F4B8C5] font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Couture Nail Art
                    </span>
                    <span className="text-white/60 font-mono text-[11px]">PUNE, IN</span>
                  </div>

                  {/* Hand Silhouette Graphic SVG */}
                  <div className="relative z-10 my-auto flex flex-col items-center text-center py-4">
                    <svg
                      className="w-40 h-40 text-[#F4B8C5] opacity-90 transition-transform duration-700 hover:scale-105"
                      viewBox="0 0 160 160"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Elegant hand with almond nails outline */}
                      <path
                        d="M80 15 C88 35 92 60 92 90 C92 120 78 145 60 150 C50 148 45 130 50 110 C54 92 65 50 80 15 Z"
                        stroke="#F4B8C5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M92 40 C102 55 106 75 106 100 C106 125 96 142 82 148"
                        stroke="#E07A94"
                        strokeWidth="1.5"
                        strokeDasharray="2 3"
                      />
                      <circle cx="80" cy="18" r="4" fill="#D4AF37" />
                      <circle cx="92" cy="42" r="3.5" fill="#D4AF37" />
                      <circle cx="68" cy="48" r="3" fill="#D4AF37" />
                      <path
                        d="M50 75 C60 70 70 72 80 75 C90 78 100 74 110 70"
                        stroke="#F4B8C5"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                    </svg>

                    <p className="font-serif italic text-2xl font-light text-white tracking-wide mt-2">
                      “Your Nails. Your Canvas.”
                    </p>
                    <p className="text-xs text-[#F4B8C5] uppercase tracking-widest mt-1">
                      Blush &amp; Bloom Studio
                    </p>
                  </div>

                  {/* Bottom showcase details */}
                  <div className="relative z-10 p-4 rounded-lg bg-black/30 backdrop-blur-md border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/80">Signature Bridal &amp; Chrome Sets</span>
                      <span className="font-semibold text-[#F4B8C5] tabular-nums">From ₹1,499</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-white/70">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#9BB0A5]" />
                      <span>Medical-grade autoclave sterilization guarantee</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-[#EFE8E1] max-w-[240px] hidden sm:block">
                <div className="flex items-center gap-1 text-[#D4AF37] text-xs">
                  {'★'.repeat(5)}
                </div>
                <p className="text-xs text-[#2E1F21] font-medium mt-1">
                  “Best bridal nail art in Pune. Lasted 4 weeks without a chip!”
                </p>
                <p className="text-[10px] text-[#7D6266] mt-0.5">
                  Pooja K. · Baner, Pune
                </p>
              </div>

              {/* Floating Academy Badge */}
              <div className="absolute -top-4 -right-4 bg-[#2E1F21] text-white px-3.5 py-2 rounded-lg shadow-md border border-[#3D2B2E] text-xs flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#F4B8C5]" />
                <span className="font-medium text-[11px] tracking-wide">
                  Govt-Recognized Syllabi
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
