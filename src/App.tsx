/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BankingPartners from './components/BankingPartners';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Branches from './components/Branches';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import LegalModal from './components/LegalModal';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Personal Loans');
  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms' | 'disclaimer' | null;
  }>({
    isOpen: false,
    type: null,
  });

  const handleEnquireClick = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLegal = (type: 'privacy' | 'terms' | 'disclaimer') => {
    setLegalModal({ isOpen: true, type });
  };

  const handleCloseLegal = () => {
    setLegalModal({ isOpen: false, type: null });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 dark:bg-[#070C16] dark:text-[#E2E8F0] flex flex-col selection:bg-[#C59B27]/30 selection:text-slate-900 dark:selection:text-white antialiased pb-20 md:pb-0 transition-colors duration-300">
        {/* Sticky Responsive Navbar with Theme Toggle */}
        <Navbar onEnquireClick={() => handleEnquireClick()} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero onEnquireClick={() => handleEnquireClick()} />

          {/* About Us Section */}
          <About />

          {/* Loan Services Section */}
          <Services onSelectService={(title) => handleEnquireClick(title)} />

          {/* Dedicated Banking Partners Section */}
          <BankingPartners />

          {/* 4-Step How It Works Process */}
          <HowItWorks />

          {/* Why Choose Us Pillars */}
          <WhyChooseUs />

          {/* Branch Offices with Vijayawada as MAIN BRANCH */}
          <Branches />

          {/* Contact & Enquiry Section with WhatsApp Auto Pre-Fill */}
          <Contact initialLoanRequirement={selectedService} />
        </main>

        {/* Premium Footer */}
        <Footer
          onOpenLegal={handleOpenLegal}
          onSelectService={(title) => handleEnquireClick(title)}
        />

        {/* Mobile Fixed Action Bar with Call, WhatsApp, Enquire & Theme Toggle */}
        <MobileBottomBar onEnquireClick={() => handleEnquireClick()} />

        {/* Legal Information Modal */}
        <LegalModal
          isOpen={legalModal.isOpen}
          type={legalModal.type}
          onClose={handleCloseLegal}
        />
      </div>
    </ThemeProvider>
  );
}
