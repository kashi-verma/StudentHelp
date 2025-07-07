
import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: "10K+", label: "Active Students" },
    { number: "50K+", label: "Items Sold" },
    { number: "200+", label: "Universities" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#4F46E5]/10 to-[#22D3EE]/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 animate-fade-in">
            Trusted by Students Everywhere
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#4F46E5] mb-2">
                {stat.number}
              </div>
              <div className="text-[#0F172A]/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
