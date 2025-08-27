import React from 'react'
import Link from "next/link"
const Footer = () => {
  return (
    <div className='flex flex-col justify-between items-center w-full py-6 px-10 border-t border-gray-500'>
      <div className='flex md:flex-row flex-col items-center justify-between w-full'>
        <div className='flex items-center font-graphik'>
          <Link href='/features' className='text-gray-300 hover:text-white mx-4'>Terms and Conditions</Link>
          <Link href='/pricing' className='text-gray-300 hover:text-white mx-4'>Privacy Policy</Link>
        </div>
        <div className='flex justify-center  items-center gap-3 font-graphik'>
      <span className='text-gray-300 text-sm'>&copy; Copyright 2025. All rights reserved.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
