import React from 'react';
import { JournalText, PeopleFill, Headset, Tools } from 'lucide-react';

interface FeatureCardProps {
  title: React.ReactNode;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  iconBgColor: string;
  delay: string;
}

const FeatureCard = ({ title, description, icon, bgColor, iconBgColor, delay }: FeatureCardProps) => (
  <div 
    className={`${bgColor} text-white p-8 rounded-[40px] h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between`}
    style={{ transitionDelay: delay }}
  >
    <div>
      <div className="flex items-center gap-4 mb-8">
        <div className={`flex items-center justify-center ${iconBgColor} rounded-full w-[60px] h-[60px] shrink-0`}>
          {icon}
        </div>
        <span className="font-bold text-[18px] leading-[1.3] text-white">
          {title}
        </span>
      </div>
      <p className="mt-4 text-[16px] leading-[1.6] opacity-90">
        {description}
      </p>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      title: <>Personalized<br />Wellness Plans</>,
      description: "Tailored guidance crafted to meet your unique needs and goals effectively.",
      icon: <JournalText size={28} />,
      bgColor: "bg-[#ef96ab]",
      iconBgColor: "bg-[#f8c8d4]/30",
      delay: "250ms"
    },
    {
      title: <>Expert-Led<br />Counseling Sessions</>,
      description: "Professional support designed to guide emotional well-being every single day.",
      icon: <PeopleFill size={28} />,
      bgColor: "bg-[#f8c8d4]",
      iconBgColor: "bg-[#ef96ab]/30",
      delay: "300ms"
    },
    {
      title: <>24/7 Support<br />Community</>,
      description: "Always-connected space offering care, encouragement, and shared growth.",
      icon: <Headset size={28} />,
      bgColor: "bg-[#1d4ed8]",
      iconBgColor: "bg-[#6b87d1]/30",
      delay: "350ms"
    },
    {
      title: <>Interactive<br />Self-Care Tools</>,
      description: "Empowering digital resources to build healthy habits independently.",
      icon: <Tools size={28} />,
      bgColor: "bg-[#6b87d1]",
      iconBgColor: "bg-[#1d4ed8]/30",
      delay: "400ms"
    }
  ];

  // Using real Lucide icons as replacements for the bootstrap icons in the original
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-width-[1320px]" style={{ maxWidth: '1320px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="h-full">
              <FeatureCard 
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                bgColor={feature.bgColor}
                iconBgColor={feature.iconBgColor}
                delay={feature.delay}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;