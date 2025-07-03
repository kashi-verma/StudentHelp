
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button = ({ children, onClick, variant = 'primary', className = '' }: ButtonProps) => {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50";
  
  const variantClasses = {
    primary: "bg-[#4F46E5] hover:bg-[#22D3EE] focus:ring-[#22D3EE]",
    secondary: "bg-[#22D3EE] hover:bg-[#4F46E5] focus:ring-[#4F46E5]"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
