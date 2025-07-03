
import React from 'react';
import Header from './Header';
import Logo from './Logo';
import Tagline from './Tagline';
import AuthButtons from './AuthButtons';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#4F46E5]/20 to-[#22D3EE]/30 flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8 text-center">
          <Logo />
          <Tagline />
          <AuthButtons />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
