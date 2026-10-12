import React, { useState } from 'react';
import { studioConfig, GalleryItem } from '../config/studioConfig';
import { ArtisticNailVisual } from './ArtisticNailVisual';
import { Instagram, Eye, X, MessageSquare, Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface GallerySectionProps {
  onSelectLookForBooking: (lookTitle: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onSelectLookForBooking,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterCategories = [
    { id: 'all', label: 'All Designs' },
    { id: 'bridal', label: 'Indian Bridal & Dulhan' },
    { id: 'chrome', label: 'Glazed & Chrome' },
    { id: 'french', label: 'Modern French & Micro' },
    { id: 'minimal', label: 'Minimalist & Nude' },
    { id: 'festive', label: 'Festive & Utsav' },
    { id: 'creative', label: '3D Sculptural & Avant-Garde' },
  ];

  const filteredItems = activeFilter === 'all'
    ? studioConfig.gallery
    : studioConfig.gallery.filter(item => item.category === activeFilter);

  const getVisualThemeForCategory = (cat: string) => {
    switch (cat) {
      case 'bridal': return 'royal-bridal';
      case 'chrome': return 'glazed-pearl';
      case 'french': return 'ivory-minimal';
      case 'festive': return 'festive-gold';
      case 'creative': return 'sculptural-3d';
      default: return 'rose-nude';
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#FAF8F5] border-b border-[#EFE8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Instagram link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B263E] font-medium mb-2">
              <span>Haute Couture Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Lookbook</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2E1F21] font-normal tracking-tight [text-wrap:balance]">
              Nail Art Gallery &amp; Runway Sets
            </h2>
            <p className="text-sm sm:text-base text-[#5C4447] mt-3 leading-relaxed">
              From mirror-like chrome glazed finishes to kundan-studded bridal heirlooms. Tap any design to inspect techniques, swatch palettes, and book the look.
            </p>
          </div>

          <a
            href={studioConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-[#8B263E] hover:text-[#501321] bg-white px-4 py-2.5 rounded-lg border border-[#EFE8E1] shadow-sm transition-colors shrink-0"
          >
            <Instagram className="w-4 h-4 text-[#E07A94]" />
            <span>Follow {studioConfig.contact.instagramHandle}</span>
          </a>
        </div>

        {/* Filter Bar (Segmented Controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterCategories.map((cat) => (
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl bg-white border border-[#EFE8E1] p-3 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <ArtisticNailVisual
                  theme={getVisualThemeForCategory(item.category)}
                  title={item.title}
                  subtitle={item.technique}
                  aspectRatio="4:3"
                  badgeText={item.category.toUpperCase()}
                  className="rounded-xl overflow-hidden"
                />
                
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#8B263E]">
                      {item.category}
                    </span>
                    <span className="text-[11px] text-[#7D6266] flex items-center gap-1 group-hover:text-[#2E1F21]">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-[#2E1F21] group-hover:text-[#8B263E] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#5C4447] line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Tags line (Clean unboxed tags with typographic separator) */}
              <div className="px-4 pb-3 pt-2 border-t border-[#F5F0EA] flex items-center gap-2 text-[11px] text-[#7D6266] flex-wrap">
                {item.tags.map((tag, idx) => (
                  <React.Fragment key={idx}>
                    <span>#{tag}</span>
                    {idx < item.tags.length - 1 && <span aria-hidden="true">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Demo Notice */}
        <div className="mt-8 text-center text-xs text-[#7D6266]">
          Note: Artistic compositions shown are demonstration representations for the Stack &amp; Pixel portfolio template. Actual studio client photos can be loaded directly from your Instagram feed or image folders.
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-white/20 relative">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Box */}
            <div className="p-4 bg-[#FAF8F5]">
              <ArtisticNailVisual
                theme={getVisualThemeForCategory(selectedItem.category)}
                title={selectedItem.title}
                subtitle={selectedItem.technique}
                aspectRatio="16:9"
                badgeText={selectedItem.category.toUpperCase()}
              />
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8B263E]">
                    {selectedItem.category} Lookbook
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#2E1F21] mt-0.5">
                    {selectedItem.title}
                  </h3>
                </div>
              </div>

              <div className="p-3 bg-[#F5F0EA] rounded-xl space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7D6266]">
                  Sculpting &amp; Art Technique
                </span>
                <p className="text-xs text-[#2E1F21] font-medium">
                  {selectedItem.technique}
                </p>
              </div>

              <p className="text-sm text-[#5C4447] leading-relaxed">
                {selectedItem.caption}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#EFE8E1] flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onSelectLookForBooking(title);
                  }}
                  className="w-full sm:w-1/2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E1F21] hover:bg-[#4A2D39] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-[#F4B8C5]" />
                  <span>Book This Exact Look</span>
                </button>

                <a
                  href={buildWhatsAppUrl(
                    `Hi Blush & Bloom, I saw the "${selectedItem.title}" look in your gallery (${selectedItem.technique}). Can I book an appointment to get this design created on my hands?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#1B5E20] bg-[#E8F5E9] hover:bg-[#C8E6C9] rounded-lg transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
