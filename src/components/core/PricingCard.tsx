import React from 'react'

interface PricingCardProps {
  tag: string;
  subtitle: string;
  amount: string;
  period?: string;
  features: string[];
  CTA: React.ReactNode;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ tag, subtitle, amount, period = "per month", features, CTA, className }) => {
  return (
    <div className={`flex flex-col justify-between items-start gap-5 border border-gray-500 p-7  min-w-[260px] bg-[#10111b] ${className || ''}`}>
      <div className="flex flex-col gap-1">
        <span className="text-lg text-gray-500 font-base">{tag}</span>
        <span className="text-sm font-graphik text-gray-200">{subtitle}</span>
      </div>
      <span className="text-white text-6xl font-medium inline-flex mt-2">
        <sup className="font-graphik text-sm text-white">USD</sup>
        {amount}
        <sup className="font-graphik text-sm text-gray-400 ml-1">{period}</sup>
      </span>
      <ul className="flex flex-col gap-3 mt-4 w-full">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-gray-200 text-base font-graphik">
            <span className="inline-block w-4 h-4  mr-2 bg-white"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-4 w-full">{CTA}</div>
    </div>
  );
};

export default PricingCard;

