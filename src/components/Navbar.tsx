import React, { useState } from 'react';
import { studioConfig } from '../config/studioConfig';
import { Menu, X, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl, getGeneralBookingMessage } from '../utils/whatsapp';

interface NavbarProps {
  onOpenBookingModal: (initialService?: string) => void;
  onOpenDemoCustomizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBookingModal,
  onOpenDemoCustomizer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Discreet Stack & Pixel Sales Demo Top Ribbon */}
      <div className="bg-[#2E1F21] text-[#FAF8F5] text-xs py-2 px-4 border-b border-[#3D2B2E]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[#F4B8C5] font-semibold tracking-wider uppercase text-[11px]">
              Stack &amp; Pixel Demo
            </span>
            <span className="text-white/40 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-white/80 text-[11px]">
              Sales demo for Indian Nail Studios &amp; Academies (Baner, Pune)
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`tel:${studioConfig.contact.phone.replace(/\s+/g, '')}`}
              className="text-white/80 hover:text-[#F4B8C5] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#F4B8C5]" />
              <span>{studioConfig.contact.phone}</span>
            </a>
            <button
              onClick={onOpenDemoCustomizer}
              className="text-[#F4B8C5] hover:text-white underline underline-offset-2 transition-colors cursor-pointer flex items-center gap-1 font-medium"
            >
              <Sparkles className="w-3 h-3" />
              <span>Customise Studio Data</span>
            </button>
          </div>
        </div>
      </div>

      {/* Top Bar following Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Action) */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EFE8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Wordmark (Single text element in display serif face) */}
          <a
            href="#"
            className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#2E1F21] whitespace-nowrap shrink-0 hover:text-[#8B263E] transition-colors"
          >
            {studioConfig.brand.name}
          </a>

          {/* Zone 2: 4–5 single-line clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#5C4447]">
            <a
              href="#services"
              className="hover:text-[#2E1F21] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#F4B8C5]"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="hover:text-[#2E1F21] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#F4B8C5]"
            >
              Nail Art Gallery
            </a>
            <a
              href="#academy"
              className="hover:text-[#2E1F21] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#F4B8C5]"
            >
              Academy &amp; Courses
            </a>
            <a
              href="#packages"
              className="hover:text-[#2E1F21] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#F4B8C5]"
            >
              Packages
            </a>
            <a
              href="#about"
              className="hover:text-[#2E1F21] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#F4B8C5]"
            >
              About Studio
            </a>
            <a
              href="#contact"
              className="hover:text-[#2E1F21] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#F4B8C5]"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#2E1F21] hover:bg-[#4A2D39] rounded-lg shadow-sm transition-all duration-200 whitespace-nowrap shrink-0 hover:shadow"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-3 py-1.5 text-xs font-semibold uppercase text-white bg-[#2E1F21] rounded-md whitespace-nowrap"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2E1F21] hover:text-[#8B263E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B76E79] rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EFE8E1] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3 text-sm font-medium text-[#2E1F21]">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#EFE8E1]/60"
              >
                Nail Services &amp; Extensions
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#EFE8E1]/60"
              >
                Nail Art Portfolio
              </a>
              <a
                href="#academy"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#EFE8E1]/60"
              >
                Academy Courses &amp; Diplomas
              </a>
              <a
                href="#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#EFE8E1]/60"
              >
                Best-Selling Packages
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#EFE8E1]/60"
              >
                About &amp; Hygiene Standards
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#EFE8E1]/60"
              >
                Studio Location &amp; Directions
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-center text-white bg-[#2E1F21] rounded-lg shadow"
              >
                Book Appointment
              </button>
              <a
                href={buildWhatsAppUrl(getGeneralBookingMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-center text-[#1E4D2B] bg-[#E8F5E9] hover:bg-[#C8E6C9] rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
                <span>Instant WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
