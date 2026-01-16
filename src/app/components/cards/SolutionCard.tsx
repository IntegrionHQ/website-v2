import React from 'react'
import Image from 'next/image';

interface SolutionCardProps {
  title: string;
  description: string;
  className?: string;
  imageScreenshot?: string;
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
}

const SolutionCard = ({ className, title, description, imageScreenshot, size = 'medium' }: SolutionCardProps) => {
  // Size variants for bento grid
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1',
    large: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2',
    wide: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1',
    tall: 'col-span-1 row-span-1 md:col-span-1 md:row-span-2',
  };

  return (
    <div 
      className={`
        bg-white 
        flex flex-col 
        justify-between 
        border border-gray-300 
        shadow-[4px_4px_0px_0px] shadow-gray-300 
        hover:shadow-[6px_6px_0px_0px] 
        transition-shadow duration-300
        overflow-hidden
        p-6
        ${sizeClasses[size]}
        ${className || ''}
      `}
    >
      <div className='flex flex-col gap-3'>
        <h4 className='text-xl font-semibold text-black nav'>[{title}]</h4>
        <p className='text-gray-600 text-sm leading-relaxed'>{description}</p>
      </div>
      
      {imageScreenshot && (
        <div className='bg-gray-100 rounded-md mt-4 flex justify-center items-center overflow-hidden'>
          <Image 
            src={imageScreenshot} 
            alt={title} 
            width={300} 
            height={200} 
            className='object-cover w-full h-auto'
          />
        </div>
      )}
    </div>
  )
}

export default SolutionCard
