
import React from 'react';
import { User, BookOpen } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="w-32 h-32 rounded-full border-4 border-[#4F46E5] flex items-center justify-center bg-white shadow-lg relative">
        <div className="flex items-center justify-center space-x-2">
          <User className="w-8 h-8 text-[#4F46E5]" />
          <BookOpen className="w-6 h-6 text-[#22D3EE]" />
        </div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#22D3EE] opacity-10"></div>
      </div>
    </div>
  );
};

export default Logo;
