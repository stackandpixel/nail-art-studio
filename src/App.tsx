import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PackagesSection } from './components/PackagesSection';
import { GallerySection } from './components/GallerySection';
import { AcademySection } from './components/AcademySection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { DemoCustomizerDrawer } from './components/DemoCustomizerDrawer';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);
  const [demoCustomizerOpen, setDemoCustomizerOpen] = useState(false);

  const handleOpenBooking = (initialItem?: string) => {
    setSelectedServiceForModal(initialItem);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2E1F21] flex flex-col selection:bg-[#F4B8C5] selection:text-[#2E1F21]">
      
      {/* Top Bar following 3-Zone Contract */}
      <Navbar
        onOpenBookingModal={() => handleOpenBooking()}
        onOpenDemoCustomizer={() => setDemoCustomizerOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBookingModal={() => handleOpenBooking()} />

        {/* Featured Nail Services & Extensions */}
        <ServicesSection onSelectServiceForBooking={(name) => handleOpenBooking(name)} />

        {/* Best-Selling Packages & Pricing */}
        <PackagesSection onSelectPackageForBooking={(name) => handleOpenBooking(name)} />

        {/* Haute Couture Nail Art Lookbook & Gallery */}
        <GallerySection onSelectLookForBooking={(title) => handleOpenBooking(title)} />

        {/* Professional Academy & Diplomas */}
        <AcademySection onSelectCourseForEnquiry={(courseName) => handleOpenBooking(courseName)} />

        {/* About Studio Philosophy, Lead Artist & Medical-Grade Hygiene */}
        <AboutSection />

        {/* Client & Graduate Testimonials (Demo Content) */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact, Directions, Google Maps & Direct Booking Desk */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenDemoCustomizer={() => setDemoCustomizerOpen(true)} />

      {/* Global Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Interactive Booking & Course Enquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialSelection={selectedServiceForModal}
      />

      {/* Stack & Pixel Sales Demo Customizer Drawer */}
      <DemoCustomizerDrawer
        isOpen={demoCustomizerOpen}
        onClose={() => setDemoCustomizerOpen(false)}
      />

    </div>
  );
}
