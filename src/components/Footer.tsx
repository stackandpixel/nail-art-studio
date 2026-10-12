import React from 'react';
import { studioConfig } from '../config/studioConfig';
import { Instagram, Phone, Mail, MapPin, MessageSquare, Heart, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl, getGeneralBookingMessage } from '../utils/whatsapp';

interface FooterProps {
  onOpenDemoCustomizer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemoCustomizer }) => {
  return (
    <footer className="bg-[#241719] text-[#FAF8F5] pt-16 pb-12 border-t border-[#3D2B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-[#FAF8F5] tracking-tight">
              {studioConfig.brand.name}
            </h3>
            <p className="text-xs text-white/70 italic font-serif">
              “{studioConfig.brand.tagline}”
            </p>
            <p className="text-xs text-white/75 leading-relaxed max-w-sm">
              Baner's premier boutique nail art atelier and professional training academy. Specializing in Russian e-file preparation, structured BIAB overlays, bridal couture sets, and certified nail technician career diplomas.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={studioConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8B263E] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={buildWhatsAppUrl(getGeneralBookingMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2E7D32] flex items-center justify-center text-white transition-colors"
                aria-label="WhatsApp Desk"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${studioConfig.contact.email}`}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Email Studio"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F4B8C5]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li><a href="#services" className="hover:text-white transition-colors">Nail Services</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Nail Art Gallery</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Bridal Packages</a></li>
              <li><a href="#academy" className="hover:text-white transition-colors">Academy Courses</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Hygiene Standards</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Directions &amp; Map</a></li>
            </ul>
          </div>

          {/* Services Menu (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F4B8C5]">
              Popular Sets
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li><span>Sculpted Gel Extensions</span></li>
              <li><span>Builder Gel (BIAB)</span></li>
              <li><span>Glazed Chrome Powder</span></li>
              <li><span>Velvet Cat-Eye</span></li>
              <li><span>Indian Bridal Heirlooms</span></li>
              <li><span>Safe E-File Removal</span></li>
            </ul>
          </div>

          {/* Location & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F4B8C5]">
              Baner Studio
            </h4>
            <div className="text-xs text-white/75 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F4B8C5] shrink-0 mt-0.5" />
                <span>{studioConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F4B8C5] shrink-0" />
                <span>{studioConfig.contact.phone}</span>
              </div>
              <div className="pt-1 text-[11px] text-white/60">
                <p>{studioConfig.contact.openingHours.weekdays}</p>
                <p>{studioConfig.contact.openingHours.sunday}</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemoCustomizer}
                className="w-full py-2 px-3 text-[11px] font-medium text-[#F4B8C5] bg-white/5 hover:bg-white/10 rounded-lg border border-[#F4B8C5]/30 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3 h-3" />
                <span>Stack &amp; Pixel Customizer</span>
              </button>
            </div>
          </div>

        </div>

        {/* Legal & Sales Demo Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
          <p>
            © {new Date().getFullYear()} Blush &amp; Bloom Nail Studio &amp; Academy. Fictional demonstration project for sales evaluation.
          </p>
          <div className="flex items-center gap-4">
            <span>Built by <strong className="text-white/80">Stack &amp; Pixel</strong></span>
            <span aria-hidden="true">·</span>
            <a href="#services" className="hover:text-white transition-colors">Privacy &amp; Terms Placeholder</a>
            <span aria-hidden="true">·</span>
            <a href="#contact" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
