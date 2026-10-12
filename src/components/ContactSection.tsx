import React, { useState } from 'react';
import { studioConfig } from '../config/studioConfig';
import { MapPin, Phone, Mail, Instagram, Clock, MessageSquare, Send, CheckCircle2, AlertCircle, Compass } from 'lucide-react';
import { buildWhatsAppUrl, getGeneralBookingMessage } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    bookingType: 'service', // 'service' | 'course'
    selectedItem: studioConfig.services[0].name,
    preferredDate: '',
    preferredTime: '11:00 AM',
    notes: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setStatusMessage('Please enter your full name.');
      setFormStatus('error');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 10) {
      setStatusMessage('Please enter a valid 10-digit Indian phone number.');
      setFormStatus('error');
      return;
    }

    setFormStatus('loading');

    // Check if real Formspree endpoint is configured
    if (studioConfig.forms.formspreeEndpoint && studioConfig.forms.formspreeEndpoint.startsWith('http')) {
      try {
        const response = await fetch(studioConfig.forms.formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        });

        if (response.ok) {
          setFormStatus('success');
          setSubmittedData(formData);
          setStatusMessage('Your enquiry has been successfully sent to Blush & Bloom! We will call or WhatsApp you within 2 business hours.');
        } else {
          setFormStatus('error');
          setStatusMessage('Delivery service returned an error. Please contact us directly via WhatsApp.');
        }
      } catch (err) {
        setFormStatus('error');
        setStatusMessage('Network connection error. Please enquire directly on WhatsApp.');
      }
    } else {
      // Intelligent Demo Mode Simulator with clear transparency
      setTimeout(() => {
        setFormStatus('success');
        setSubmittedData(formData);
        setStatusMessage(
          'Enquiry recorded in Demo Mode! (Formspree endpoint unconfigured in sales demo). In production, this emails the studio owner automatically.'
        );
      }, 700);
    }
  };

  const getWhatsAppFromForm = () => {
    if (!submittedData) return '';
    const msg = `Hi ${studioConfig.brand.name}, I just submitted an appointment enquiry on your website:
- Name: ${submittedData.fullName}
- Phone: ${submittedData.phone}
- Request: ${submittedData.selectedItem} (${submittedData.bookingType === 'service' ? 'Salon Service' : 'Academy Course'})
- Preferred Date: ${submittedData.preferredDate || 'Earliest available'} (${submittedData.preferredTime})
- Notes: ${submittedData.notes || 'None'}

Could you please confirm slot availability?`;
    return buildWhatsAppUrl(msg);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-[#EFE8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B263E] font-medium">
            <span>Find Us in Baner</span>
            <span aria-hidden="true">·</span>
            <span>Reserve A Table</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2E1F21] font-normal tracking-tight [text-wrap:balance]">
            Visit the Studio &amp; Book an Appointment
          </h2>
          <p className="text-sm text-[#5C4447]">
            Drop by our serene Pune studio for an indulgent manicure, or connect with our admissions desk to plan your professional technician course.
          </p>
        </div>

        {/* Split Grid: Details & Map vs Appointment Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact details & Interactive Map (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EFE8E1] space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#FCE7EC] flex items-center justify-center text-[#8B263E] mb-2">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-semibold text-[#2E1F21]">
                  Studio Address
                </h4>
                <p className="text-xs text-[#5C4447] leading-relaxed">
                  {studioConfig.contact.address}
                </p>
                <p className="text-[11px] text-[#8B263E] font-medium pt-1">
                  Landmark: {studioConfig.contact.landmark}
                </p>
              </div>

              {/* Business Hours */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EFE8E1] space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#FCE7EC] flex items-center justify-center text-[#8B263E] mb-2">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-semibold text-[#2E1F21]">
                  Operating Hours
                </h4>
                <p className="text-xs text-[#5C4447] leading-relaxed">
                  {studioConfig.contact.openingHours.weekdays}
                </p>
                <p className="text-[11px] text-[#7D6266] pt-1">
                  {studioConfig.contact.openingHours.sunday}
                </p>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EFE8E1] space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] mb-2">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-semibold text-[#2E1F21]">
                  WhatsApp Desk
                </h4>
                <p className="text-xs text-[#5C4447]">
                  Instant reply for slot bookings &amp; reference pictures.
                </p>
                <a
                  href={buildWhatsAppUrl(getGeneralBookingMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#2E7D32] hover:underline flex items-center gap-1 pt-1"
                >
                  <span>Chat on {studioConfig.contact.phone}</span>
                </a>
              </div>

              {/* Email & Instagram */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EFE8E1] space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#FCE7EC] flex items-center justify-center text-[#8B263E] mb-2">
                  <Mail className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-semibold text-[#2E1F21]">
                  Email &amp; Social
                </h4>
                <p className="text-xs text-[#5C4447]">
                  {studioConfig.contact.email}
                </p>
                <a
                  href={studioConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#8B263E] hover:underline flex items-center gap-1 pt-1"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>{studioConfig.contact.instagramHandle}</span>
                </a>
              </div>

            </div>

            {/* Google Maps Embed & Directions Block */}
            <div className="rounded-2xl border border-[#EFE8E1] overflow-hidden bg-[#FAF8F5]">
              <div className="p-4 border-b border-[#EFE8E1] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#2E1F21]">
                    Location Map — Baner High Street, Pune
                  </h4>
                  <p className="text-[11px] text-[#7D6266]">
                    5 mins from Balewadi High Street / Highway Exit
                  </p>
                </div>

                <a
                  href={studioConfig.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-[#2E1F21] hover:bg-[#4A2D39] rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Compass className="w-3.5 h-3.5 text-[#F4B8C5]" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Map Viewport / Mock */}
              <div className="relative aspect-[16/9] w-full bg-[#EFE8E1] flex items-center justify-center overflow-hidden">
                <iframe
                  title="Blush and Bloom Nail Studio Location Map"
                  src={studioConfig.contact.googleMapsEmbedUrl}
                  className="w-full h-full border-0 filter contrast-95"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  allowFullScreen
                />
              </div>
            </div>

          </div>

          {/* Right Column: Appointment & Academy Enquiry Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#EFE8E1] shadow-xs">
              
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8B263E]">
                  Direct Booking Desk
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#2E1F21] mt-1">
                  Request an Appointment or Course Batch
                </h3>
                <p className="text-xs text-[#5C4447] mt-1">
                  Fill in your details below. We review requests daily and confirm via phone call or WhatsApp message.
                </p>
              </div>

              {formStatus === 'success' ? (
                <div className="p-6 rounded-2xl bg-white border border-[#2E7D32]/30 space-y-4 animate-in fade-in">
                  <div className="flex items-center gap-2 text-[#2E7D32] font-semibold text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Booking Request Received!</span>
                  </div>

                  <p className="text-xs text-[#5C4447] leading-relaxed">
                    {statusMessage}
                  </p>

                  <div className="p-4 bg-[#F5F0EA] rounded-xl text-xs space-y-1.5 font-mono text-[#2E1F21]">
                    <p><span className="text-[#7D6266]">Name:</span> {submittedData?.fullName}</p>
                    <p><span className="text-[#7D6266]">Selection:</span> {submittedData?.selectedItem}</p>
                    <p><span className="text-[#7D6266]">Contact:</span> +91 {submittedData?.phone}</p>
                    <p><span className="text-[#7D6266]">Preferred:</span> {submittedData?.preferredDate || 'Earliest available'} ({submittedData?.preferredTime})</p>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <a
                      href={getWhatsAppFromForm()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E7D32] hover:bg-[#1B5E20] rounded-lg transition-colors flex items-center justify-center gap-2 text-center shadow-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up: Send This Over WhatsApp Now</span>
                    </a>

                    <button
                      onClick={() => {
                        setFormStatus('idle');
                        setSubmittedData(null);
                      }}
                      className="w-full py-2 text-xs text-[#7D6266] hover:text-[#2E1F21] underline text-center cursor-pointer"
                    >
                      Submit Another Booking Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Booking type toggle */}
                  <div className="grid grid-cols-2 gap-2 p-1 bg-white rounded-xl border border-[#EFE8E1]">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          bookingType: 'service',
                          selectedItem: studioConfig.services[0].name,
                        });
                      }}
                      className={`py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                        formData.bookingType === 'service'
                          ? 'bg-[#2E1F21] text-white shadow-xs'
                          : 'text-[#5C4447] hover:text-[#2E1F21]'
                      }`}
                    >
                      Studio Nail Service
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          bookingType: 'course',
                          selectedItem: studioConfig.courses[0].name,
                        });
                      }}
                      className={`py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                        formData.bookingType === 'course'
                          ? 'bg-[#2E1F21] text-white shadow-xs'
                          : 'text-[#5C4447] hover:text-[#2E1F21]'
                      }`}
                    >
                      Academy Course
                    </button>
                  </div>

                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-medium text-[#2E1F21] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anjali Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#EFE8E1] rounded-xl text-xs text-[#2E1F21] focus:outline-none focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E]"
                    />
                  </div>

                  {/* Phone & Email fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#2E1F21] mb-1">
                        Contact Number (+91) *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-xs text-[#7D6266] font-mono">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          placeholder="98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#EFE8E1] rounded-xl text-xs text-[#2E1F21] focus:outline-none focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#2E1F21] mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="anjali@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-[#EFE8E1] rounded-xl text-xs text-[#2E1F21] focus:outline-none focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E]"
                      />
                    </div>
                  </div>

                  {/* Service / Course Selector */}
                  <div>
                    <label className="block text-xs font-medium text-[#2E1F21] mb-1">
                      {formData.bookingType === 'service' ? 'Select Nail Service' : 'Select Academy Course'} *
                    </label>
                    <select
                      value={formData.selectedItem}
                      onChange={(e) => setFormData({ ...formData, selectedItem: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#EFE8E1] rounded-xl text-xs text-[#2E1F21] focus:outline-none focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E]"
                    >
                      {formData.bookingType === 'service'
                        ? studioConfig.services.map((s) => (
                            <option key={s.id} value={s.name}>
                              {s.name} — ₹{s.priceINR.toLocaleString('en-IN')}
                            </option>
                          ))
                        : studioConfig.courses.map((c) => (
                            <option key={c.id} value={c.name}>
                              {c.name} ({c.level}) — ₹{c.feeINR.toLocaleString('en-IN')}
                            </option>
                          ))}
                    </select>
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#2E1F21] mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-[#EFE8E1] rounded-xl text-xs text-[#2E1F21] focus:outline-none focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#2E1F21] mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-[#EFE8E1] rounded-xl text-xs text-[#2E1F21] focus:outline-none focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E]"
                      >
                        <option value="10:30 AM">Morning: 10:30 AM</option>
                        <option value="12:00 PM">Noon: 12:00 PM</option>
                        <option value="02:30 PM">Afternoon: 02:30 PM</option>
                        <option value="04:30 PM">Evening: 04:30 PM</option>
                        <option value="06:30 PM">Late Evening: 06:30 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional notes */}
                  <div>
                    <label className="block text-xs font-medium text-[#2E1F21] mb-1">
                      Notes or Custom Requests (e.g., Bridal lehenga matching, nail repair)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us if you have natural extensions to remove, reference art photos, or specific questions..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#EFE8E1] rounded-xl text-xs text-[#2E1F21] focus:outline-none focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E]"
                    />
                  </div>

                  {/* Error display */}
                  {formStatus === 'error' && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-700 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E1F21] hover:bg-[#4A2D39] disabled:opacity-50 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {formStatus === 'loading' ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[#F4B8C5]" />
                        <span>Submit Appointment Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#7D6266]">
                    Prefer instant assistance? Tap the floating WhatsApp button anytime.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
