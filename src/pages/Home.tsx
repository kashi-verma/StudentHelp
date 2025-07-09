
import React, { useState } from 'react';
import { Search, Menu, ChevronLeft, ChevronRight, Star, Users, Shield, Zap } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const slides = [
    {
      id: 1,
      title: "Buy & Sell with Confidence",
      description: "Connect with fellow students in Sikar for safe, reliable transactions",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Campus Community",
      description: "Join thousands of students already trading on our platform",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Easy & Fast",
      description: "List your items in seconds, get offers in minutes",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop"
    }
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
      title: "Student Community",
      description: "Connect with verified students from your area"
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
      title: "Safe & Secure",
      description: "Protected transactions with verified profiles"
    },
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
      title: "Quick Deals",
      description: "Fast listing and instant communication"
    },
    {
      icon: <Star className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
      title: "Trusted Platform",
      description: "Rated highly by thousands of students"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Shop", href: "#shop" },
    { name: "Sell", href: "#sell" },
    { name: "Rate Us", href: "#rate" }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add your search logic here
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 gap-4">
            {/* Left: Logo and Project Name */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-foreground">StudentHelp</h1>
            </div>

            {/* Center: Search Bar - Hidden on mobile, shown on larger screens */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search products, books, electronics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  />
                </div>
              </form>
            </div>

            {/* Right: Menu */}
            <div className="flex items-center">
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                >
                  <Menu className="w-5 h-5 text-muted-foreground" />
                </button>
                
                {/* Hamburger Dropdown */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                    <div className="py-2">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Search Bar - Shown only on mobile */}
          <div className="md:hidden pb-4">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products, books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>
            </form>
          </div>
        </div>
      </header>

      {/* Main Slideshow */}
      <section className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white px-4 max-w-4xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">{slide.title}</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slideshow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-1.5 sm:p-2 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-1.5 sm:p-2 transition-colors"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Motive Section */}
      <section className="py-12 sm:py-16 px-4 bg-accent/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Our Motive!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We created this platform to support the student community in Sikar. Our mission is to provide 
            a safe, reliable, and convenient marketplace where students can buy and sell items, 
            connect with each other, and build a stronger community together.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12">
            Why Choose StudentHelp?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 sm:p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 p-2 sm:p-3 bg-primary/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#about" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#shop" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">Shop</a></li>
                <li><a href="#sell" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">Sell Items</a></li>
                <li><a href="#contact" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#rate" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">Rate Us</a></li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Address</h3>
              <address className="text-sm sm:text-base text-muted-foreground not-italic">
                <p>StudentHelp Platform</p>
                <p>Sikar, Rajasthan</p>
                <p>India - 332001</p>
                <p className="mt-2">
                  Email: support@studenthelp.com<br />
                  Phone: +91 9876543210
                </p>
              </address>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 sm:pt-8 border-t border-border">
            <p className="text-sm sm:text-base text-muted-foreground">
              © 2025 StudentHelp. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
