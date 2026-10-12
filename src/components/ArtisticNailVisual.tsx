import React, { useState } from 'react';
import { Sparkles, Gem, Heart, Award, Eye, ShieldCheck, Flame } from 'lucide-react';

interface ArtisticNailVisualProps {
  theme: string;
  title: string;
  subtitle?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '3:4';
  className?: string;
  badgeText?: string;
  imgSrc?: string;
}

export const ArtisticNailVisual: React.FC<ArtisticNailVisualProps> = ({
  theme,
  title,
  subtitle,
  aspectRatio = '4:3',
  className = '',
  badgeText,
  imgSrc,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Aspect ratio class calculation
  const aspectClass =
    aspectRatio === '16:9'
      ? 'aspect-video'
      : aspectRatio === '1:1'
      ? 'aspect-square'
      : aspectRatio === '3:4'
      ? 'aspect-[3/4]'
      : 'aspect-[4/3]';

  // Aesthetic palette and graphic motif based on theme
  const getThemeStyling = () => {
    switch (theme) {
      case 'royal-bridal':
        return {
          bgGradient: 'from-[#501321] via-[#8B263E] to-[#D4AF37]/30',
          accentColor: '#D4AF37',
          icon: Gem,
          motif: 'kundan-bridal',
          patternOpacity: 'opacity-25',
          textureTone: 'bg-[radial-gradient(#D4AF37_1px,transparent_1px)]',
          pillNote: 'Royal Dulhan Suite',
        };
      case 'glazed-pearl':
        return {
          bgGradient: 'from-[#FDFBF7] via-[#F4E3E7] to-[#E3C5CE]',
          accentColor: '#B76E79',
          icon: Sparkles,
          motif: 'glazed-pearl',
          patternOpacity: 'opacity-30',
          textureTone: 'bg-[radial-gradient(#B76E79_1.5px,transparent_1.5px)]',
          pillNote: 'High-Gloss Glaze',
        };
      case 'velvet-cat-eye':
        return {
          bgGradient: 'from-[#1C141E] via-[#3B2238] to-[#8C6246]',
          accentColor: '#E6C687',
          icon: Eye,
          motif: 'cat-eye',
          patternOpacity: 'opacity-35',
          textureTone: 'bg-[radial-gradient(#E6C687_1px,transparent_1px)]',
          pillNote: '9D Magnetic Velvet',
        };
      case 'sculptural-3d':
        return {
          bgGradient: 'from-[#2B1B22] via-[#4A2D39] to-[#996277]',
          accentColor: '#F2C4CE',
          icon: Sparkles,
          motif: 'sculptural-3d',
          patternOpacity: 'opacity-25',
          textureTone: 'bg-[radial-gradient(#F2C4CE_1.5px,transparent_1.5px)]',
          pillNote: 'Swarovski & 3D Relief',
        };
      case 'festive-gold':
        return {
          bgGradient: 'from-[#611629] via-[#A83248] to-[#D99B26]',
          accentColor: '#FFD700',
          icon: Flame,
          motif: 'festive-gold',
          patternOpacity: 'opacity-30',
          textureTone: 'bg-[radial-gradient(#FFD700_1px,transparent_1px)]',
          pillNote: 'Festive Utsav Suite',
        };
      case 'academy-training':
        return {
          bgGradient: 'from-[#231A24] via-[#432C3A] to-[#6E4858]',
          accentColor: '#E7BDC8',
          icon: Award,
          motif: 'academy',
          patternOpacity: 'opacity-20',
          textureTone: 'bg-[radial-gradient(#E7BDC8_1px,transparent_1px)]',
          pillNote: 'Master Certification',
        };
      case 'studio-interior':
        return {
          bgGradient: 'from-[#241A1C] via-[#3F2B30] to-[#78535A]',
          accentColor: '#F4B8C5',
          icon: Sparkles,
          motif: 'studio',
          patternOpacity: 'opacity-20',
          textureTone: 'bg-[radial-gradient(#F4B8C5_1px,transparent_1px)]',
          pillNote: 'Luxe Baner Salon',
        };
      case 'care-safe':
      case 'care-refill':
        return {
          bgGradient: 'from-[#2C2224] via-[#48373B] to-[#70555A]',
          accentColor: '#9BB0A5',
          icon: ShieldCheck,
          motif: 'care',
          patternOpacity: 'opacity-20',
          textureTone: 'bg-[radial-gradient(#9BB0A5_1px,transparent_1px)]',
          pillNote: 'Medical Autoclave Safe',
        };
      default:
        return {
          bgGradient: 'from-[#3A2228] via-[#5C3B43] to-[#8C5D69]',
          accentColor: '#F4B8C5',
          icon: Sparkles,
          motif: 'default',
          patternOpacity: 'opacity-20',
          textureTone: 'bg-[radial-gradient(#F4B8C5_1px,transparent_1px)]',
          pillNote: 'Blush & Bloom Signature',
        };
    }
  };

  const styleConfig = getThemeStyling();
  const IconComponent = styleConfig.icon;

  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden rounded-xl bg-gradient-to-br ${styleConfig.bgGradient} shadow-sm group select-none ${className}`}
    >
      {/* Optional real image if provided and loaded successfully */}
      {imgSrc && !imageError && (
        <img
          src={imgSrc}
          alt={title}
          referrerPolicy="no-referrer"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      )}

      {/* Styled Luxury CSS/SVG Artwork Container (renders as fallback or base art) */}
      <div className={`absolute inset-0 flex flex-col justify-between p-5 transition-opacity duration-300 ${imgSrc && imageLoaded ? 'bg-gradient-to-t from-black/85 via-black/35 to-transparent' : ''}`}>
        
        {/* Subtle geometric dot grid pattern */}
        <div className={`absolute inset-0 ${styleConfig.textureTone} [background-size:16px_16px] ${styleConfig.patternOpacity} pointer-events-none`} />

        {/* Dynamic Architectural Geometric Silhouette Motif */}
        <svg
          className="absolute right-0 bottom-0 w-48 h-48 sm:w-64 sm:h-64 opacity-20 pointer-events-none transform translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-700"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Almond nail curve & floral petal vectors */}
          <path
            d="M100 20 C130 50 160 90 160 140 C160 170 135 190 100 190 C65 190 40 170 40 140 C40 90 70 50 100 20 Z"
            stroke={styleConfig.accentColor}
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />
          <circle cx="100" cy="115" r="45" stroke={styleConfig.accentColor} strokeWidth="1.5" />
          <circle cx="100" cy="115" r="25" stroke={styleConfig.accentColor} strokeWidth="1" />
          <path
            d="M100 70 L100 160 M55 115 L145 115"
            stroke={styleConfig.accentColor}
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>

        {/* Top bar with clean unboxed label and subtle icon */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-white/90 drop-shadow-sm">
            <IconComponent className="w-3.5 h-3.5 text-[#F4B8C5]" />
            <span>{badgeText || styleConfig.pillNote}</span>
          </div>
          <span className="text-[11px] font-mono tracking-widest text-white/60">
            01 / LUXE
          </span>
        </div>

        {/* Center Editorial Motif if standalone artwork */}
        {(!imgSrc || imageError || !imageLoaded) && (
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-4">
            <div className="w-14 h-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center mb-3 shadow-inner group-hover:border-[#F4B8C5]/60 transition-colors">
              <IconComponent className="w-6 h-6 text-[#F4B8C5]" />
            </div>
            <p className="font-serif italic text-white/80 text-sm tracking-wide">
              Blush & Bloom Signature
            </p>
          </div>
        )}

        {/* Bottom card title & subtle technique line */}
        <div className="relative z-10 mt-auto">
          <h4 className="font-serif text-lg sm:text-xl font-medium text-white tracking-tight leading-snug drop-shadow-sm">
            {title}
          </h4>
          {subtitle && (
            <p className="text-xs text-white/75 mt-1 line-clamp-2 max-w-sm font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
