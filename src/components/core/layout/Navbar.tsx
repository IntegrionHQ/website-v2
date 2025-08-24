import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col justify-between items-center w-full py-6 px-10 border-b border-gray-500'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center'>
          <img src='/logo.svg' alt='Logo' className='h-8' />
          <span className='text-white text-lg font-semibold ml-2 leading-10'>Integrion</span>
        </div>
        <div className='flex items-center font-graphik'>
          <a href='/features' className='text-gray-300 hover:text-white mx-4'>Features</a>
          <a href='/pricing' className='text-gray-300 hover:text-white mx-4'>Pricing</a>
          <a href='/docs' className='text-gray-300 hover:text-white mx-4'>Docs</a>
        </div>
        <div className='flex justify-center  items-center gap-3 font-graphik'>
          <button className="secondary-button text-white text-sm font-medium px-4 py-3 cursor-pointer">Log in</button>
      <button className="primary-button flex justify-center items-center gap-2 text-white border  border-white  text-sm font-medium px-4 py-3 cursor-pointer">Sign up
    
      </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
