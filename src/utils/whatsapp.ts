import { studioConfig } from '../config/studioConfig';

/**
 * Builds a direct WhatsApp click-to-chat URL with properly encoded message
 */
export function buildWhatsAppUrl(message: string, overrideNumber?: string): string {
  const phone = overrideNumber || studioConfig.contact.whatsappNumber;
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}?text=${encodedText}`;
}

/**
 * Generates an enquiry message for a specific nail service
 */
export function getServiceEnquiryMessage(serviceName: string, priceINR?: number): string {
  const priceSnippet = priceINR ? ` (₹${priceINR.toLocaleString('en-IN')})` : '';
  return `Hi ${studioConfig.brand.name}, I would like to enquire about your "${serviceName}"${priceSnippet}. Could you please share available appointments this week and the latest details? Thank you!`;
}

/**
 * Generates an enquiry message for a package
 */
export function getPackageEnquiryMessage(packageName: string, priceINR: number): string {
  return `Hi ${studioConfig.brand.name}, I'm interested in booking the "${packageName}" package (₹${priceINR.toLocaleString('en-IN')}). Please let me know the upcoming time slots and customisation options.`;
}

/**
 * Generates an enquiry message for an academy course
 */
export function getCourseEnquiryMessage(courseName: string, level: string, feeINR: number): string {
  return `Hi Blush & Bloom Academy, I would like details about the "${courseName}" (${level} level, ₹${feeINR.toLocaleString('en-IN')}). Could you please share the upcoming batch dates, syllabus PDF, and enrollment procedure?`;
}

/**
 * Generates a general booking enquiry message
 */
export function getGeneralBookingMessage(): string {
  return `Hi ${studioConfig.brand.name}, I would like to book an appointment at your Baner, Pune studio. Please let me know your available slots today or tomorrow!`;
}

/**
 * Format Indian Rupee currency with standard formatting (e.g. ₹1,499)
 */
export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}
