import React from 'react';
import { studioConfig } from '../config/studioConfig';
import { ArtisticNailVisual } from './ArtisticNailVisual';
import { ShieldCheck, Sparkles, Award, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="py-20 bg-[#FAF8F5] border-b border-[#EFE8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Philosophy & Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B263E] font-medium">
              <span>Studio Philosophy</span>
              <span aria-hidden="true">·</span>
              <span>Our Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#2E1F21] font-normal tracking-tight [text-wrap:balance]">
              {studioConfig.brand.storyHeadline}
            </h2>

            <p className="text-base text-[#5C4447] leading-relaxed">
              {studioConfig.brand.philosophy}
            </p>

            <p className="text-sm text-[#5C4447] leading-relaxed">
              Rooted in Baner, Pune, our studio was created to give discerning women a haven of calm sophistication. Rather than rushing 20 clients through assembly-line desks, we book deliberate, 1-on-1 private appointments where your cuticle health, nail bed curvature, and personal styling are given full artistic dedication.
            </p>

            {/* Fictional Lead Artist Persona Card */}
            <div className="p-5 rounded-2xl bg-white border border-[#EFE8E1] space-y-3 shadow-xs">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#2E1F21]">
                    {studioConfig.brand.directorPersona.name}
                  </h4>
                  <p className="text-xs text-[#8B263E] font-medium">
                    {studioConfig.brand.directorPersona.title}
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-wider bg-[#F5F0EA] text-[#7D6266] px-2.5 py-1 rounded-md border border-[#EFE8E1]">
                  Demo Persona
                </span>
              </div>
              <p className="text-xs text-[#5C4447] italic leading-relaxed">
                {studioConfig.brand.directorPersona.quote}
              </p>
            </div>
          </div>

          {/* Visual Showcase for Studio & Master Technique */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <ArtisticNailVisual
                  theme="studio-interior"
                  title="Baner Boutique Studio"
                  subtitle="Plush velvet armchairs, white marble stations, quiet dust extractors."
                  aspectRatio="4:3"
                  badgeText="STUDIO AMBIENCE"
                />
                <div className="p-4 bg-white rounded-xl border border-[#EFE8E1]">
                  <h5 className="font-serif text-sm font-semibold text-[#2E1F21]">
                    Serene Consultation
                  </h5>
                  <p className="text-xs text-[#7D6266] mt-1">
                    Relax with artisan herbal teas and bespoke bridal color palette swatches.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-0 sm:pt-8">
                <div className="p-4 bg-white rounded-xl border border-[#EFE8E1]">
                  <h5 className="font-serif text-sm font-semibold text-[#2E1F21]">
                    Russian E-File Tech
                  </h5>
                  <p className="text-xs text-[#7D6266] mt-1">
                    Zero cuts, zero harsh soaking, impeccable clean cuticle margins.
                  </p>
                </div>
                <ArtisticNailVisual
                  theme="academy-training"
                  title="Practical Masterclasses"
                  subtitle="Intimate 4-student batches with live model coaching."
                  aspectRatio="4:3"
                  badgeText="ACADEMY FLOORS"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Medical-Grade Hygiene & Standards Strip */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EFE8E1] shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#8B263E] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
              <span>Uncompromising Safety</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2E1F21] font-normal">
              Hospital-Grade Hygiene Protocols
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4447]">
              Your health is never a compromise. Here is how we guarantee complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioConfig.hygieneStandards.map((std, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EFE8E1] space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-medium text-[#2E1F21]">
                  {std.title}
                </h4>
                <p className="text-xs text-[#5C4447] leading-relaxed">
                  {std.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

interface AboutSectionProps {}
