import React from 'react';

/**
 * HowWeWork Section
 * 
 * Clinical process section featuring a dark gradient background, 
 * bold typography with "Soft Clinical" aesthetic, and numbered steps.
 */
const HowWeWork = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24 text-white">
      {/* Background Gradient - Matches the "clinical-gradient" but adapted for a darker tone as seen in screenshots */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: 'linear-gradient(135deg, #a5b4fc 0%, #fbcfe8 50%, #e0e7ff 100%)',
          opacity: 0.9 
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-[1320px]">
        {/* Header Row */}
        <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start text-center xl:text-left mb-16">
          <div className="max-w-[700px] mb-8 xl:mb-0">
            <span className="inline-block text-[#1d4ed8] font-bold tracking-wider text-sm sm:text-base mb-4 uppercase">
              HOW WE WORK ?
            </span>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[54px] font-black leading-[1.1] tracking-tight text-[#1f2937] mb-6">
              Here For Your <span className="text-[#1d4ed8]">Health</span>,<br />
              <span className="text-[#1d4ed8]">Here</span> For Your Heart
            </h2>
          </div>
          
          <div className="max-w-[450px] xl:pt-10">
            <p className="text-[#4b5563] text-lg leading-relaxed mb-8">
              We offer compassionate care, combining physical and emotional support to help you thrive in every aspect.
            </p>
            <div className="flex justify-center xl:justify-start">
              <a 
                href="/contact-us" 
                className="inline-flex items-center justify-center bg-[#1d4ed8] text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
              >
                Get Consult Now
              </a>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="border-white/40 border-t-2 mb-16 lg:mb-20" />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 pb-8">
          {/* Step 01 */}
          <div 
            className="group relative"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <div className="flex flex-col">
              <div className="mb-4">
                <span className="text-[72px] sm:text-[86px] font-black text-[#1d4ed8]/20 leading-none select-none transition-colors duration-300 group-hover:text-[#1d4ed8]/30">
                  01
                </span>
              </div>
              <h4 className="text-2xl sm:text-[28px] font-extrabold text-[#1f2937] mb-4">
                Listen & Understand
              </h4>
              <p className="text-[#4b5563] text-lg leading-relaxed max-w-[380px]">
                Your wellness journey matters. We’re dedicated to supporting both your mental clarity and emotional strength every step forward.
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div 
            className="group relative"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex flex-col">
              <div className="mb-4">
                <span className="text-[72px] sm:text-[86px] font-black text-[#1d4ed8]/20 leading-none select-none transition-colors duration-300 group-hover:text-[#1d4ed8]/30">
                  02
                </span>
              </div>
              <h4 className="text-2xl sm:text-[28px] font-extrabold text-[#1f2937] mb-4">
                Create A Tailored Plan
              </h4>
              <p className="text-[#4b5563] text-lg leading-relaxed max-w-[380px]">
                From everyday stress to life’s hardest moments, our team stands ready to support your healing and overall well-being.
              </p>
            </div>
          </div>

          {/* Step 03 */}
          <div 
            className="group relative"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="flex flex-col">
              <div className="mb-4">
                <span className="text-[72px] sm:text-[86px] font-black text-[#1d4ed8]/20 leading-none select-none transition-colors duration-300 group-hover:text-[#1d4ed8]/30">
                  03
                </span>
              </div>
              <h4 className="text-2xl sm:text-[28px] font-extrabold text-[#1f2937] mb-4">
                Support & Empower
              </h4>
              <p className="text-[#4b5563] text-lg leading-relaxed max-w-[380px]">
                Empowering you to live well with care that nurtures your body, mind, and emotional peace every single day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;