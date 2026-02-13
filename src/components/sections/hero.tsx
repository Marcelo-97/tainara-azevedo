import React from 'react';
import Image from 'next/image';
import { Phone, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden clinical-gradient min-h-[850px] lg:min-h-[900px] flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle white wavy lines and circles are part of the .clinical-gradient or managed via bg images */}
        <div className="absolute top-[10%] right-[5%] w-64 h-64 border-[1px] border-white/20 rounded-full" />
        <div className="absolute bottom-[20%] right-[20%] w-4 h-4 bg-white rounded-full opacity-60" />
        <div className="absolute top-[40%] right-[10%] w-3 h-3 bg-white rounded-full opacity-60" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-1/2 text-center lg:text-left pt-10 lg:pt-0">
            <div className="mb-6">
              <span className="text-brand-blue font-bold tracking-[0.1em] text-[18px] sm:text-[20px] uppercase">
                FIND BALANCE, EMBRACE LIFE
              </span>
            </div>
            
            <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-black leading-[1.1] text-brand-dark mb-6">
              Caring for Your <span className="text-brand-blue">Inner</span> Peace
            </h1>

            <div className="w-[85%] lg:w-[450px] h-[2px] bg-white/50 mb-8 mx-auto lg:mx-0" />

            <p className="text-[18px] md:text-[20px] text-brand-dark/80 leading-relaxed mb-10 max-w-[600px] mx-auto lg:mx-0">
              Discover clarity, confidence, and emotional wellness through guided support that helps you manage stress,
              heal from within, and grow stronger in every aspect of your mental health journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a 
                href="/appointment" 
                className="btn-pill bg-brand-blue text-white hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/20"
              >
                Start A Checkup Now
              </a>
              
              <button className="flex items-center justify-center w-[54px] h-[54px] rounded-full bg-brand-pink text-white hover:scale-110 transition-transform duration-300">
                <Play className="fill-current ml-1" size={24} />
              </button>
            </div>
          </div>

          {/* Right Image/Visual Column */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-end h-full">
            <div className="relative mt-auto">
              {/* Main Professional Portrait */}
              <div className="relative z-20">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d006bdb-69fd-4590-a131-c6d4ed9d74be-nuro-widagdos-net/assets/images/office-lifestyle-business-and-people-concept-fri-2-2.png"
                  alt="Professional Therapist"
                  width={600}
                  height={800}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Badge: Reviews (Floating Left) */}
              <div className="absolute top-1/2 -left-10 lg:-left-20 transform -translate-y-1/2 z-30 hidden sm:block">
                <div className="bg-brand-pink text-white rounded-[24px] p-6 shadow-xl soft-shadow min-w-[160px] text-center">
                  <h2 className="text-[32px] font-black leading-none mb-1">4.9 /5</h2>
                  <p className="text-[14px] font-semibold opacity-90">Review on Google</p>
                </div>
              </div>

              {/* Badge: Phone Contact (Floating Top Right) */}
              <div className="absolute -top-4 -right-4 lg:right-0 z-30 hidden sm:flex items-center gap-4 bg-brand-blue text-white rounded-full py-3 px-6 shadow-xl soft-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                  <Phone className="text-brand-blue fill-current" size={20} />
                </div>
                <div className="text-left pr-2">
                  <p className="text-[12px] font-medium opacity-80 leading-none mb-1">Call us anytime</p>
                  <h3 className="text-[18px] font-bold leading-none">(555) 123-4567</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;