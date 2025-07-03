
import React from 'react';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="w-32 h-32 rounded-full border-4 border-[#4F46E5] flex items-center justify-center bg-white shadow-xl relative overflow-hidden">
        <div className="flex flex-col items-center justify-center space-y-1">
          <GraduationCap className="w-10 h-10 text-[#4F46E5]" />
          <div className="flex items-center space-x-1">
            <BookOpen className="w-5 h-5 text-[#22D3EE]" />
            <Users className="w-4 h-4 text-[#6366F1]" />
          </div>
        </div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#4F46E5]/20 via-[#6366F1]/10 to-[#22D3EE]/20"></div>
      </div>
    </div>
  );
};

export default Logo;
