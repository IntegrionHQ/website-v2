import React from 'react'
import Image from 'next/image';
import { cn } from '@/components/lib/utils';

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
      className={cn(
        `bg-white/80 backdrop-blur-sm
        flex flex-col 
        justify-between 
        p-6
        border border-gray-200
        hover:border-gray-400
        transition-colors duration-300
        relative group`,
        sizeClasses[size],
        className
      )}
    >
      {/* Corner accents on hover */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
