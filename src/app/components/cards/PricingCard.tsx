import React from 'react';
import { EncryptedText } from '@/components/core/ui/EncryptedText';
import { cn } from '@/components/lib/utils';
import { CheckIcon } from '@heroicons/react/24/outline';

interface PricingCardProps {
  tier: string;
  price: string;
  description: string;
  features: string[];
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string; // Expect styling classes
  isPopular?: boolean;
}

export const PricingCard = ({
  tier,
  price,
  description,
  features,
  ctaText = 'Get Started',
  onCtaClick,
  className,
  isPopular = false,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        `bg-white/80 backdrop-blur-sm flex flex-col justify-between p-6 relative 
        border border-gray-200 hover:border-black transition-colors duration-300`,
        className
      )}
    >
      {/* Dashed connector line effect on left (optional for 'flow' feel) */}
      <div className="absolute top-1/2 -left-4 w-4 border-t border-dashed border-gray-300 hidden md:block" />

      {isPopular && (
        <div className="absolute top-0 right-0 bg-black text-white text-xs font-mono uppercase px-2 py-1">
          Most Popular
        </div>
      )}

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-semibold text-black nav uppercase">
            [{tier}]
          </h4>
           <div className="flex items-baseline gap-1">
             <span className="text-3xl font-bold font-aeonik-bold">{price}</span>
            </div>
           <p className="text-gray-600 text-sm leading-relaxed min-h-[40px]">
            {description}
          </p>
        </div>

        <hr className="border-gray-200 border-dashed" />

        <ul className="flex flex-col gap-2">
          {features.map((feature, i) => (
            <li key={i} className="flex gap-2 items-start text-sm text-gray-700">
              <CheckIcon className="w-4 h-4 mt-0.5 text-black shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <button
          onClick={onCtaClick}
          className="w-full px-4 py-3 text-white bg-black text-sm font-mono uppercase shadow-[3px_3px_0px_0px] shadow-gray-600 hover:shadow-none transition-shadow duration-300"
        >
            <EncryptedText
                text={` [ ${ctaText} ]`}
                encryptedClassName="text-neutral-500"
                revealedClassName="dark:text-white text-white"
                revealDelayMs={120}
            />
        </button>
      </div>
    </div>
  );
};
