
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      university: "MIT",
      text: "StudentHelp made it so easy to sell my old textbooks and buy new ones at great prices!",
      rating: 5
    },
    {
      name: "Mike Chen",
      university: "Stanford",
      text: "I've saved hundreds of dollars buying electronics from other students. Amazing platform!",
      rating: 5
    },
    {
      name: "Emma Davis",
      university: "Harvard",
      text: "The student community is so helpful and trustworthy. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 animate-fade-in">
            What Students Say
          </h2>
          <p className="text-lg text-[#0F172A]/70 animate-fade-in">
            Real experiences from real students
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-[#4F46E5] mb-4" />
              
              <p className="text-[#0F172A]/80 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div>
                <div className="font-semibold text-[#0F172A]">
                  {testimonial.name}
                </div>
                <div className="text-[#0F172A]/60 text-sm">
                  {testimonial.university}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
