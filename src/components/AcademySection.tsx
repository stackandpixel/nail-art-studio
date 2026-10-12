import React, { useState } from 'react';
import { studioConfig, CourseItem } from '../config/studioConfig';
import { ArtisticNailVisual } from './ArtisticNailVisual';
import { GraduationCap, Clock, Award, BookOpen, Package, Check, MessageSquare, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl, getCourseEnquiryMessage, formatINR } from '../utils/whatsapp';

interface AcademySectionProps {
  onSelectCourseForEnquiry: (courseName: string) => void;
}

export const AcademySection: React.FC<AcademySectionProps> = ({
  onSelectCourseForEnquiry,
}) => {
  const [expandedCourseId, setExpandedCourseId] = useState<string>('course-master-technician');

  const toggleExpand = (id: string) => {
    setExpandedCourseId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="academy" className="py-20 bg-white border-b border-[#EFE8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B263E] font-medium mb-2">
              <span>Blush &amp; Bloom Academy</span>
              <span aria-hidden="true">·</span>
              <span>Pune, Maharashtra</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2E1F21] font-normal tracking-tight [text-wrap:balance]">
              Professional Nail Technician &amp; Artistry Diplomas
            </h2>
            <p className="text-sm sm:text-base text-[#5C4447] mt-3 leading-relaxed">
              Launch your salon career or private studio enterprise. Our syllabus combines rigorous chemical knowledge, Russian dry prep, form sculpting, and Instagram client acquisition strategies.
            </p>
          </div>

          {/* Quick Academy Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-[#FAF8F5] p-5 rounded-2xl border border-[#EFE8E1] shrink-0">
            <div>
              <p className="font-serif text-2xl font-semibold text-[#2E1F21] tabular-nums">500+</p>
              <p className="text-[11px] text-[#7D6266]">Graduates Trained</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-semibold text-[#2E1F21] tabular-nums">1:4</p>
              <p className="text-[11px] text-[#7D6266]">Student-Teacher Ratio</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-serif text-2xl font-semibold text-[#2E1F21] tabular-nums">100%</p>
              <p className="text-[11px] text-[#7D6266]">Hands-on Practical</p>
            </div>
          </div>
        </div>

        {/* Featured Flagship Course Spotlight */}
        {(() => {
          const flagship = studioConfig.courses.find(c => c.featured);
          if (!flagship) return null;
          const whatsappUrl = buildWhatsAppUrl(
            getCourseEnquiryMessage(flagship.name, flagship.level, flagship.feeINR)
          );

          return (
            <div className="mb-14 rounded-2xl bg-gradient-to-br from-[#2E1F21] via-[#432C3A] to-[#2E1F21] text-white p-6 sm:p-10 shadow-xl border border-[#432C3A] relative overflow-hidden">
              <div className="absolute right-0 top-0 w-96 h-96 bg-[#8B263E] rounded-full blur-3xl opacity-20 pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F4B8C5] font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Flagship Career Builder Diploma</span>
                    <span aria-hidden="true">·</span>
                    <span>Most Popular</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white [text-wrap:balance]">
                    {flagship.name}
                  </h3>

                  <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
                    {flagship.summary} Includes full business launch coaching, photography light setups, client consultation contracts, and our 40+ item Master Nail Kit.
                  </p>

                  {/* Badges / Key Specs */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-white/90 pt-2">
                    <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                      <Clock className="w-3.5 h-3.5 text-[#F4B8C5]" />
                      <span>{flagship.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                      <GraduationCap className="w-3.5 h-3.5 text-[#F4B8C5]" />
                      <span>{flagship.handsOnHours}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                      <Package className="w-3.5 h-3.5 text-[#F4B8C5]" />
                      <span>Master 40-Pc Kit Included</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/15 space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/70">Total Course Investment</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#F4B8C5] tabular-nums">
                        {formatINR(flagship.feeINR)}
                      </span>
                    </div>
                    <p className="text-[11px] text-white/70 mt-1">
                      {flagship.feeNote}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <button
                      onClick={() => onSelectCourseForEnquiry(flagship.name)}
                      className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#2E1F21] bg-white hover:bg-[#FDF2F4] rounded-lg transition-colors cursor-pointer shadow-sm text-center"
                    >
                      Enroll in Upcoming Batch
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E7D32] hover:bg-[#1B5E20] rounded-lg transition-colors flex items-center justify-center gap-2 text-center"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Syllabus PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* All Courses Accordion List */}
        <div className="space-y-4">
          <h3 className="font-serif text-2xl text-[#2E1F21] font-medium mb-6">
            Complete Academy Curriculum &amp; Workshops
          </h3>

          {studioConfig.courses.map((course) => {
            const isExpanded = expandedCourseId === course.id;
            const whatsappUrl = buildWhatsAppUrl(
              getCourseEnquiryMessage(course.name, course.level, course.feeINR)
            );

            return (
              <div
                key={course.id}
                className="border border-[#EFE8E1] rounded-2xl bg-[#FAF8F5] overflow-hidden transition-all duration-200"
              >
                {/* Course Bar Header */}
                <div
                  onClick={() => toggleExpand(course.id)}
                  className="p-6 cursor-pointer hover:bg-[#F5F0EA] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-[#7D6266] font-medium">
                      <span className="uppercase text-[#8B263E] font-semibold">
                        {course.level} Level
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#B76E79]" />
                        {course.duration}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{course.schedule}</span>
                    </div>

                    <h4 className="font-serif text-xl text-[#2E1F21] font-medium">
                      {course.name}
                    </h4>
                  </div>

                  <div className="flex items-center gap-6 shrink-0 justify-between md:justify-end">
                    <div className="text-right">
                      <span className="font-serif text-xl font-semibold text-[#2E1F21] tabular-nums">
                        {formatINR(course.feeINR)}
                      </span>
                      {course.feeNote && (
                        <p className="text-[11px] text-[#7D6266] -mt-1">{course.feeNote}</p>
                      )}
                    </div>
                    <div className="p-2 rounded-full bg-white border border-[#EFE8E1] text-[#2E1F21]">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="p-6 border-t border-[#EFE8E1] bg-white space-y-6 animate-in fade-in duration-200">
                    <p className="text-sm text-[#5C4447] leading-relaxed">
                      {course.summary}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Learning Modules */}
                      <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EFE8E1]">
                        <h5 className="font-serif text-sm font-semibold text-[#2E1F21] mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-[#8B263E]" />
                          <span>Curriculum &amp; Technical Modules</span>
                        </h5>
                        <ul className="space-y-2">
                          {course.modules.map((mod, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#5C4447]">
                              <Check className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                              <span>{mod}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Certification & Kit */}
                      <div className="space-y-4">
                        <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EFE8E1]">
                          <h5 className="font-serif text-sm font-semibold text-[#2E1F21] mb-1 flex items-center gap-2">
                            <Award className="w-4 h-4 text-[#D4AF37]" />
                            <span>Certification Awarded</span>
                          </h5>
                          <p className="text-xs text-[#5C4447]">
                            {course.certification}
                          </p>
                          <p className="text-[11px] text-[#7D6266] mt-1 font-mono">
                            Hands-on: {course.handsOnHours}
                          </p>
                        </div>

                        <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EFE8E1]">
                          <h5 className="font-serif text-sm font-semibold text-[#2E1F21] mb-2 flex items-center gap-2">
                            <Package className="w-4 h-4 text-[#B76E79]" />
                            <span>Kit &amp; Material Provision</span>
                          </h5>
                          <ul className="space-y-1">
                            {course.kitDetails.map((kit, idx) => (
                              <li key={idx} className="text-xs text-[#5C4447] flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-[#8B263E]" />
                                <span>{kit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-[#EFE8E1] flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onSelectCourseForEnquiry(course.name)}
                        className="py-2.5 px-5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E1F21] hover:bg-[#4A2D39] rounded-lg transition-colors cursor-pointer shadow-sm"
                      >
                        Enroll / Batch Enquiry
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-5 text-xs font-semibold uppercase tracking-wider text-[#1B5E20] bg-[#E8F5E9] hover:bg-[#C8E6C9] rounded-lg transition-colors flex items-center gap-2"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#2E7D32]" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Demo Disclaimer */}
        <div className="mt-8 text-center text-xs text-[#7D6266]">
          All course dates, kit inclusions, and fees are demonstration configurations and require confirmation from the actual studio owner. Easily customize batch times in <code className="bg-[#FAF8F5] px-1 py-0.5 rounded border border-[#EFE8E1]">src/config/studioConfig.ts</code>.
        </div>

      </div>
    </section>
  );
};
