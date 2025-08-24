import React from 'react'


interface FeatureCardProps{
  title: string;
  description: string;
  icon:React.ReactNode;
}
const Features:React.FC<FeatureCardProps>= ({title, description, icon}) => {
  return (
    <div className='border border-gray-500 p-5 space-y-4 primary-button'>
      <div className=' border border-gray-500 px-2 py-3 w-14 flex items-center justify-center '>
         {icon}
      </div>
      <h4 className='text-white font-light text-xl'>{title}</h4>
      <p className='text-sm leading-6 text-gray-300 font-light font-graphik'>{description}</p>
    </div>
  )
}

export default Features

