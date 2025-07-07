
import React from 'react';
import { ShoppingBag, Users, Shield, Zap } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-[#4F46E5]" />,
      title: "Buy & Sell Easily",
      description: "List your items in seconds and discover amazing deals from fellow students"
    },
    {
      icon: <Users className="w-8 h-8 text-[#22D3EE]" />,
      title: "Student Community",
      description: "Connect with students from your university and nearby campuses"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#4F46E5]" />,
      title: "Safe & Secure",
      description: "Verified student profiles and secure payment options for peace of mind"
    },
    {
      icon: <Zap className="w-8 h-8 text-[#22D3EE]" />,
      title: "Quick Transactions",
      description: "Fast messaging and instant notifications to close deals quickly"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 animate-fade-in">
            Why Choose StudentHelp?
          </h2>
          <p className="text-lg text-[#0F172A]/70 animate-fade-in">
            The ultimate marketplace designed specifically for students
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-[#0F172A]/70 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
