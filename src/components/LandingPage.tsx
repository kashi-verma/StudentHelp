
import React from 'react';
import Header from './Header';
import Logo from './Logo';
import Tagline from './Tagline';
import AuthButtons from './AuthButtons';
import { ShoppingBag, Users, Shield, Zap, Star, MessageCircle, TrendingUp } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-[#4F46E5]" />,
      title: "Buy & Sell Instantly",
      description: "Turn your unused items into cash in minutes. From textbooks to tech gadgets, everything finds a new home!"
    },
    {
      icon: <Users className="w-8 h-8 text-[#22D3EE]" />,
      title: "Campus Community",
      description: "Connect with students from your university. Local deals, trusted sellers, familiar faces."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#4F46E5]" />,
      title: "100% Safe & Secure",
      description: "Verified student profiles, secure payments, and campus-based transactions you can trust."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#22D3EE]" />,
      title: "Lightning Fast",
      description: "Post in 30 seconds, get offers in minutes. The fastest way to buy and sell on campus."
    }
  ];

  const stats = [
    { number: "15K+", label: "Happy Students", icon: <Users className="w-6 h-6" /> },
    { number: "75K+", label: "Items Sold", icon: <ShoppingBag className="w-6 h-6" /> },
    { number: "300+", label: "Universities", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "99%", label: "Success Rate", icon: <Star className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      text: "Sold my calculus textbook in 2 hours! Made enough to buy coffee for a whole semester 😄",
      author: "Sarah M.",
      role: "Business Major, UCLA",
      rating: 5
    },
    {
      text: "Found the perfect dorm furniture at amazing prices. StudentHelp saved me hundreds!",
      author: "Mike T.",
      role: "Engineering Student, MIT",
      rating: 5
    },
    {
      text: "The app is so easy to use. Posted my old laptop and got 5 offers within an hour!",
      author: "Emma L.",
      role: "Art Student, NYU",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#4F46E5]/20 to-[#22D3EE]/30">
      <Header />
      
      {/* Enhanced Hero Section */}
      <main className="flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl space-y-12 text-center">
          <div className="animate-fade-in">
            <Logo />
          </div>
          
          <div className="animate-fade-in space-y-6" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] leading-tight">
              Your Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#22D3EE]">Marketplace</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#0F172A]/80 max-w-3xl mx-auto">
              Transform your unused items into cash and discover amazing deals from fellow students. 
              <span className="font-semibold text-[#4F46E5]"> Join 15,000+ students</span> already trading on StudentHelp!
            </p>
          </div>
          
          <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <AuthButtons />
            <p className="text-sm text-[#0F172A]/60 mt-4">
              ✨ Free to join • 🚀 Start selling in 30 seconds • 💯 Trusted by students nationwide
            </p>
          </div>
        </div>
      </main>

      {/* Enhanced Features Section */}
      <section className="py-20 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
              Why Students <span className="text-[#4F46E5]">Love</span> Us
            </h2>
            <p className="text-xl text-[#0F172A]/70 max-w-2xl mx-auto">
              Built by students, for students. Every feature designed to make campus trading effortless.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in border-2 border-transparent hover:border-[#4F46E5]/20"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-r from-[#4F46E5]/10 to-[#22D3EE]/10 rounded-xl">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4 text-center group-hover:text-[#4F46E5] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#0F172A]/70 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#4F46E5]/10 to-[#22D3EE]/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 animate-fade-in">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#22D3EE]">Movement</span>
            </h2>
            <p className="text-xl text-[#0F172A]/70 animate-fade-in">
              Thousands of students are already saving money and making cash
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group animate-scale-in hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4 text-[#4F46E5] group-hover:text-[#22D3EE] transition-colors">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-bold text-[#4F46E5] mb-2 group-hover:text-[#22D3EE] transition-colors">
                  {stat.number}
                </div>
                <div className="text-[#0F172A]/70 font-semibold text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 animate-fade-in">
              Real Stories, Real <span className="text-[#4F46E5]">Results</span>
            </h2>
            <p className="text-xl text-[#0F172A]/70 animate-fade-in">
              See what your fellow students are saying about StudentHelp
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-l-4 border-[#4F46E5]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-[#0F172A]/80 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#4F46E5] to-[#22D3EE] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F172A]">{testimonial.author}</div>
                    <div className="text-[#0F172A]/60 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#4F46E5] to-[#22D3EE] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Start Your <br />
              <span className="text-yellow-300">Success Story?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of students who've already discovered the smartest way to buy and sell on campus. 
              Your next great deal is just a click away!
            </p>
          </div>
          
          <div className="animate-scale-in space-y-6" style={{ animationDelay: '0.3s' }}>
            <AuthButtons />
            <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>24/7 Student Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Secure Transactions</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Instant Notifications</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
