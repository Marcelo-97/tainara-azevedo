import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: "Individual Therapy",
    description: "Tailored guidance crafted to meet your unique needs and goals effectively.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d006bdb-69fd-4590-a131-c6d4ed9d74be-nuro-widagdos-net/assets/images/female-college-student-meeting-with-campus-counsel-6.jpg",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d006bdb-69fd-4590-a131-c6d4ed9d74be-nuro-widagdos-net/assets/icons/Icon1-1.png",
    link: "/service-detail",
  },
  {
    title: "Elderly Support",
    description: "Professional support designed to guide emotional well-being every single day.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d006bdb-69fd-4590-a131-c6d4ed9d74be-nuro-widagdos-net/assets/images/a-portrait-of-young-depressed-woman-during-group-t-7.jpg",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d006bdb-69fd-4590-a131-c6d4ed9d74be-nuro-widagdos-net/assets/icons/Icon2-2.png",
    link: "/service-detail",
  },
  {
    title: "Stress Management",
    description: "Empowering digital resources to build healthy habits independently.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d006bdb-69fd-4590-a131-c6d4ed9d74be-nuro-widagdos-net/assets/images/unhappy-woman-attending-self-help-therapy-group-me-8.jpg",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d006bdb-69fd-4590-a131-c6d4ed9d74be-nuro-widagdos-net/assets/icons/Icon3-3.png",
    link: "/service-detail",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1320px] text-center">
        <span className="text-[20px] text-brand-blue font-semibold mb-2 block tracking-wide uppercase">
          OUR SERVICES
        </span>
        <h2 className="text-[36px] md:text-[48px] font-black text-brand-dark mb-12 sm:mb-16 leading-[1.2] tracking-tight">
          Breaking Stigmas, Building Strength
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[40px] overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Image Container with Hover Effect */}
              <div className="relative h-[300px] w-full overflow-hidden group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content Area */}
              <div className="bg-[#fdf2f8] p-8 sm:p-10 text-left relative flex-grow pt-16">
                {/* Floating Icon Wrapper */}
                <div className="absolute -top-12 left-8 w-24 h-24 sm:w-[100px] sm:h-[100px] z-10">
                  <Image
                    src={service.icon}
                    alt=""
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>

                {/* Read More Button - Styled to match screenshot badge positioning */}
                <div className="absolute -top-6 right-8 z-10">
                  <a
                    href={service.link}
                    className="bg-brand-dark text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-brand-blue transition-colors duration-300 shadow-lg block"
                  >
                    Read More
                  </a>
                </div>

                <h3 className="text-[24px] font-extrabold text-brand-dark mb-4 mt-2">
                  {service.title}
                </h3>
                
                <hr className="border-brand-blue opacity-20 w-full mb-6" />

                <p className="text-[#4b5563] text-base leading-relaxed mb-0">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}