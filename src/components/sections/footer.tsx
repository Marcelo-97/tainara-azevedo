import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#1d4ed8] text-white overflow-hidden pt-20">
      {/* Background Overlay Decor (Subtle image as seen in screenshots) */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('https://nuro.widagdos.net/assets/img/office-lifestyle-business-and-people-concept-fri-2023-11-27-04-54-20-utc.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <a href="/">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d006bdb-69fd-4590-a131-c6d4ed9d74be-nuro-widagdos-net/assets/images/Footer-Logo-17.png"
                  alt="Nuro Psychology Logo"
                  className="h-[63px] w-auto brightness-0 invert"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
            <p className="text-white/80 text-base leading-relaxed mb-8 max-w-sm">
              Professional, responsive, and soothing design for therapists, counselors, and life coaches.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-[#ef96ab] flex items-center justify-center transition-transform hover:scale-110 active:scale-95">
                <Facebook size={18} fill="currentColor" stroke="none" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#ef96ab] flex items-center justify-center transition-transform hover:scale-110 active:scale-95">
                <Twitter size={18} fill="currentColor" stroke="none" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#ef96ab] flex items-center justify-center transition-transform hover:scale-110 active:scale-95">
                <Linkedin size={18} fill="currentColor" stroke="none" />
              </a>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-[#ef96ab]">Contact</h3>
            <div className="space-y-4 text-white/90">
              <div className="flex flex-col">
                <p className="mb-0 text-sm font-medium opacity-70">Our location</p>
                <span className="text-base">123 Serenity Lane, Blissfield, CA 90210, United States</span>
              </div>
              <div className="flex flex-col border-t border-white/10 pt-4">
                <p className="mb-0 text-sm font-medium opacity-70">Email us</p>
                <a href="mailto:Info@yourmail.com" className="hover:text-[#ef96ab] transition-colors">Info@yourmail.com</a>
              </div>
              <div className="flex flex-col border-t border-white/10 pt-4">
                <p className="mb-0 text-sm font-medium opacity-70">Call us anytime</p>
                <a href="tel:5551234567" className="text-lg font-bold hover:text-[#ef96ab] transition-colors">(555) 123-4567</a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-[#ef96ab]">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-white/80 hover:text-[#ef96ab] transition-colors">Homepage</a></li>
              <li><a href="/services" className="text-white/80 hover:text-[#ef96ab] transition-colors">Services</a></li>
              <li><a href="/appointment" className="text-white/80 hover:text-[#ef96ab] transition-colors">Appointment</a></li>
              <li><a href="/blogs" className="text-white/80 hover:text-[#ef96ab] transition-colors">Blogs</a></li>
              <li><a href="/faqs" className="text-white/80 hover:text-[#ef96ab] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-[#ef96ab]">Newsletter</h3>
            <p className="text-white/80 mb-6 text-sm">
              Get the latest news other tips.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email here" 
                className="w-full h-12 px-6 rounded-full bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-[#ef96ab] text-sm"
              />
              <button 
                type="submit" 
                className="w-full h-12 bg-[#ef96ab] hover:bg-[#ef96ab]/90 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 group"
              >
                <span>Subscribe now</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/20 py-8 text-center">
          <p className="text-white/70 text-sm mb-0">
            Copyright © 2025 Widagdos. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;