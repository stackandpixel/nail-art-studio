import React, { useState, useEffect } from 'react';
import { studioConfig } from '../config/studioConfig';
import { X, Calendar, MessageSquare, CheckCircle2, AlertCircle, Send, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelection?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialSelection,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectionType, setSelectionType] = useState<'service' | 'course'>('service');
  const [selectedItem, setSelectedItem] = useState(initialSelection || studioConfig.services[0].name);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialSelection) {
      setSelectedItem(initialSelection);
      const isCourse = studioConfig.courses.some(c => c.name === initialSelection);
      if (isCourse) {
        setSelectionType('course');
      } else {
        setSelectionType('service');
      }
    }
  }, [initialSelection]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }

    if (!phone.trim() || phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit Indian phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // If Formspree endpoint is configured, send payload
    if (studioConfig.forms.formspreeEndpoint && studioConfig.forms.formspreeEndpoint.startsWith('http')) {
      try {
        const response = await fetch(studioConfig.forms.formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            fullName,
            phone,
            email,
            selectionType,
            selectedItem,
            preferredDate,
            preferredTime,
            notes,
            source: 'Modal Booking Form',
            timestamp: new Date().toISOString(),
          }),
        });

        if (response.ok) {
          setIsSuccess(true);
        } else {
          setErrorMessage('Could not deliver form. Please proceed via WhatsApp below.');
        }
      } catch (err) {
        setErrorMessage('Network error. Please use our WhatsApp desk directly.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Demo simulator mode
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 600);
    }
  };

  const getWhatsAppBookingUrl = () => {
    const msg = `Hi ${studioConfig.brand.name}, I want to book an appointment:
- Name: ${fullName || 'Guest'}
- Contact: ${phone || 'Not provided'}
- Selected: ${selectedItem}
- Date: ${preferredDate || 'Earliest available'} (${preferredTime})
- Notes: ${notes || 'Standard booking'}

Could you please confirm the slot?`;
    return buildWhatsAppUrl(msg);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#EFE8E1] relative">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-[#EFE8E1] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8B263E]" />
            <h3 className="font-serif text-lg font-semibold text-[#2E1F21]">
              Book Appointment / Course
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#7D6266] hover:text-[#2E1F21] rounded-full hover:bg-[#FAF8F5] transition-colors cursor-pointer"
            aria-label="Close Booking Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="font-serif text-2xl text-[#2E1F21] font-semibold">
                Request Recorded!
              </h4>

              <p className="text-xs text-[#5C4447] leading-relaxed max-w-xs mx-auto">
                Thank you, {fullName}. Our studio front desk in Baner will reach out on +91 {phone} to confirm your appointment slot.
              </p>

              <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EFE8E1] text-xs text-left space-y-1 font-mono">
                <p><strong className="text-[#2E1F21]">Item:</strong> {selectedItem}</p>
                <p><strong className="text-[#2E1F21]">Date:</strong> {preferredDate || 'Earliest available'} ({preferredTime})</p>
                <p><strong className="text-[#2E1F21]">Status:</strong> Awaiting studio confirmation</p>
              </div>

              <div className="pt-3 space-y-2">
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E7D32] hover:bg-[#1B5E20] rounded-xl transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm on WhatsApp Instantly</span>
                </a>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="w-full py-2.5 text-xs text-[#7D6266] hover:text-[#2E1F21] cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Type toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#FAF8F5] rounded-xl border border-[#EFE8E1]">
                <button
                  type="button"
                  onClick={() => {
                    setSelectionType('service');
                    setSelectedItem(studioConfig.services[0].name);
                  }}
                  className={`py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    selectionType === 'service'
                      ? 'bg-[#2E1F21] text-white shadow-xs'
                      : 'text-[#5C4447]'
                  }`}
                >
                  Nail Salon Service
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectionType('course');
                    setSelectedItem(studioConfig.courses[0].name);
                  }}
                  className={`py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    selectionType === 'course'
                      ? 'bg-[#2E1F21] text-white shadow-xs'
                      : 'text-[#5C4447]'
                  }`}
                >
                  Academy Course
                </button>
              </div>

              {/* Service/Course Dropdown */}
              <div>
                <label className="block text-xs font-medium text-[#2E1F21] mb-1">
                  {selectionType === 'service' ? 'Choose Service' : 'Choose Course'}
                </label>
                <select
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#EFE8E1] rounded-xl text-xs text-[#2E1F21] focus:outline-none focus:border-[#8B263E]"
                >
                  {selectionType === 'service'
                    ? studioConfig.services.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} (₹{s.priceINR.toLocaleString('en-IN')})
                        </option>
                      ))
                    : studioConfig.courses.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name} (₹{c.feeINR.toLocaleString('en-IN')})
                        </option>
                      ))}
                </select>
              </div>

              {/* Name field */}
              <div>
                <label className="block text-xs font-medium text-[#2E1F21] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#EFE8E1] rounded-xl text-xs text-[#2E1F21] focus:outline-none focus:border-[#8B263E]"
                />
              </div>

              {/* Phone field */}
              <div>
                <label className="block text-xs font-medium text-[#2E1F21] mb-1">
                  WhatsApp Contact (+91) *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-[#7D6266] font-mono">+91</span>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-11 pr-3.5 py-2.5 bg-[#FAF8F5] border border-[#EFE8E1] rounded-xl text-xs text-[#2E1F21] focus:outline-none focus:border-[#8B263E]"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#2E1F21] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#EFE8E1] rounded-xl text-xs text-[#2E1F21] focus:outline-none focus:border-[#8B263E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2E1F21] mb-1">
                    Preferred Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#EFE8E1] rounded-xl text-xs text-[#2E1F21] focus:outline-none focus:border-[#8B263E]"
                  >
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="01:30 PM">01:30 PM</option>
                    <option value="03:30 PM">03:30 PM</option>
                    <option value="05:30 PM">05:30 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-medium text-[#2E1F21] mb-1">
                  Specific Requests (e.g. Bridal theme, extensions removal)
                </label>
                <textarea
                  rows={2}
                  placeholder="Optional details..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#EFE8E1] rounded-xl text-xs text-[#2E1F21] focus:outline-none focus:border-[#8B263E]"
                />
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-red-50 text-red-700 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E1F21] hover:bg-[#4A2D39] disabled:opacity-50 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#F4B8C5]" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Booking Request'}</span>
                </button>

                <div className="relative py-1 flex items-center justify-center">
                  <div className="border-t border-[#EFE8E1] w-full" />
                  <span className="bg-white px-2 text-[10px] uppercase tracking-wider text-[#7D6266] absolute font-medium">
                    Or Instant WhatsApp
                  </span>
                </div>

                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#1B5E20] bg-[#E8F5E9] hover:bg-[#C8E6C9] rounded-xl transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#2E7D32]" />
                  <span>Book Directly via WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
