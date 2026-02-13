import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Blur/Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(29, 78, 216, 0.1), rgba(29, 78, 216, 0.1)), url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d006bdb-69fd-4590-a131-c6d4ed9d74be-nuro-widagdos-net/assets/images/multiethnic-women-with-tattoo-and-coffee-to-go-hol-20.jpg")',
          filter: 'blur(2px)'
        }}
      />
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <span className="text-brand-blue font-semibold uppercase tracking-wider text-sm">GET A QUOTE</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mt-2 text-balance">
            Take <span className="text-brand-blue">The first step</span> toward a <span className="text-brand-blue">healthier</span> mind. <br />
            Join us today and start your journey to <span className="text-brand-blue">well-being!</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Left Side: Form */}
          <div className="flex-[1.2] p-8 md:p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-brand-dark font-bold text-sm">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name here" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-brand-dark font-bold text-sm">Email</label>
                <input 
                  type="email" 
                  placeholder="Your email here" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-brand-dark font-bold text-sm">Phone</label>
                <input 
                  type="tel" 
                  placeholder="Your phone number" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-brand-dark font-bold text-sm">Date</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-brand-dark font-bold text-sm">Time</label>
                <input 
                  type="time" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-brand-dark font-bold text-sm">Subject</label>
                <input 
                  type="text" 
                  placeholder="Your subject." 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all text-sm"
                />
              </div>
              <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
                <label className="text-brand-dark font-bold text-sm">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us your story" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all text-sm resize-none"
                ></textarea>
              </div>
              <div className="col-span-1 md:col-span-2 mt-2">
                <button 
                  type="submit" 
                  className="w-full bg-brand-blue text-white font-bold py-4 px-8 rounded-full hover:bg-opacity-90 transition-all"
                >
                  Make An Appointment
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Info Card */}
          <div className="flex-1 bg-brand-soft-pink p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-black text-brand-dark mb-6">Need Any Help ? Get In Touch With Us</h3>
            <p className="text-brand-dark/70 text-sm mb-10 leading-relaxed">
              Every small step counts. We’re committed to walking with you through difficult moments, 
              encouraging progress, and nurturing your journey toward lasting mental and emotional recovery.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white shrink-0">
                  <Phone size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-brand-blue text-sm font-semibold uppercase">Call us anytime</p>
                  <p className="text-brand-dark font-bold text-lg">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white shrink-0">
                  <Mail size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-brand-blue text-sm font-semibold uppercase">Email us</p>
                  <p className="text-brand-dark font-bold text-lg">Info@Yourmail.Com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white shrink-0">
                  <MapPin size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-brand-blue text-sm font-semibold uppercase">Our location</p>
                  <p className="text-brand-dark font-bold text-base leading-snug">
                    123 Serenity Lane, Blissfield, CA 90210, US.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;