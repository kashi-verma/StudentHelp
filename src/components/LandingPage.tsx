
import React from 'react';
import Header from './Header';
import Logo from './Logo';
import Tagline from './Tagline';
import AuthButtons from './AuthButtons';
import FeaturesSection from './FeaturesSection';
import StatsSection from './StatsSection';
import TestimonialsSection from './TestimonialsSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#4F46E5]/20 to-[#22D3EE]/30">
      <Header />
      
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8 text-center animate-fade-in">
          <Logo />
          <Tagline />
          <AuthButtons />
        </div>
      </main>

      {/* Features Section */}
      <FeaturesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#4F46E5] to-[#22D3EE]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-in">
            Join thousands of students already buying and selling on StudentHelp
          </p>
          <div className="animate-scale-in">
            <AuthButtons />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
