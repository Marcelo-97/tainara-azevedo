import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const AboutUsSection = () => {
  return (
    <section className="section py-20 my-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1320px]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Side: Overlapping Images */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-[550px] aspect-[429/450]">
              
              {/* Primary Image - Rectangular with rounded corners */}
              <div className="relative w-full h-[450px] rounded-[40px] overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.02]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d006bdb-69fd-4590-a131-c6d4ed9d74be-nuro-widagdos-net/assets/images/people-attending-support-group-meeting-for-mental--3.jpg"
                  alt="About Us"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Circle Image - Overlapping */}
              <div className="absolute -top-12 -left-12 sm:-left-16 w-48 h-48 sm:w-60 sm:h-60 rounded-full border-[6px] border-white shadow-xl overflow-hidden z-20 hidden md:block">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d006bdb-69fd-4590-a131-c6d4ed9d74be-nuro-widagdos-net/assets/images/men-and-women-sitting-in-a-circle-during-group-the-4.jpg"
                  alt="Counseling Session"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Experience Label Badge */}
              <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4 bg-[#ef96ab] text-white px-8 py-5 rounded-[24px] shadow-lg z-30 text-center min-w-[160px]">
                <div className="font-sans text-3xl font-black leading-none">10+ Years</div>
                <div className="font-sans text-lg font-medium mt-1">Of Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content Side: Information */}
          <div className="flex flex-col text-center xl:text-left">
            <span className="text-[#1d4ed8] font-bold tracking-wider text-sm uppercase mb-3 block">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-[40px] font-black text-[#1f2937] leading-[1.2] mb-6">
              Your Journey To Mental Wellness Starts Here
            </h2>
            <p className="text-[#6b7280] text-lg leading-relaxed mb-8">
              Every small step toward better mental health is a significant achievement in our lives. With the right
              support, each individual can find the strength to face challenges, manage stress, and build positive
              habits. We believe that everyone deserves the opportunity to grow, thrive, and experience inner peace.
            </p>

            {/* Specialty Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 justify-center xl:justify-start">
                  <CheckCircle2 className="text-[#1d4ed8] w-6 h-6 flex-shrink-0" />
                  <span className="text-xl font-bold text-[#1f2937]">Free Consultation</span>
                </li>
                <li className="flex items-center gap-3 justify-center xl:justify-start">
                  <CheckCircle2 className="text-[#1d4ed8] w-6 h-6 flex-shrink-0" />
                  <span className="text-xl font-bold text-[#1f2937]">Emergency Service</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 justify-center xl:justify-start">
                  <CheckCircle2 className="text-[#1d4ed8] w-6 h-6 flex-shrink-0" />
                  <span className="text-xl font-bold text-[#1f2937]">Mental Satisfaction</span>
                </li>
                <li className="flex items-center gap-3 justify-center xl:justify-start">
                  <CheckCircle2 className="text-[#1d4ed8] w-6 h-6 flex-shrink-0" />
                  <span className="text-xl font-bold text-[#1f2937]">Psychologists Services</span>
                </li>
              </ul>
            </div>

            {/* Quote/Motto */}
            <p className="italic font-bold text-xl text-[#1f2937] leading-tight mb-10 xl:pr-12">
              &quot;Healing doesn’t mean the damage never existed; it means the strength to rise is greater than the pain&quot;
            </p>

            {/* Signature and CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-8">
              <div className="relative h-16 w-32">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d006bdb-69fd-4590-a131-c6d4ed9d74be-nuro-widagdos-net/assets/images/Signature-5.png"
                  alt="Founder Signature"
                  fill
                  className="object-contain"
                />
              </div>
              <a 
                href="/about-us" 
                className="bg-[#1d4ed8] text-white px-10 py-4 rounded-full font-bold transition-all duration-300 hover:bg-[#163cb3] hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;