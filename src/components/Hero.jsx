import React from 'react'
import image from '../assets/Image1.png'
export default function Hero() {
  return (
    <div className="bg-bgBack pt-16">
      <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between lg:bg-Orange md:bg-Orange rounded-3xl w-11/12 lg:w-9/12 md:w-10/12 m-auto'>
        <div className='flex flex-col gap-4 items-start justify-center lg:ml-16 lg:pl-16 mb-16 lg:mb-0 md:mb-0'>
            <h2 className='p-1 font-semibold capitalize lg:text-6xl md:text-3xl text-3xl text-black md:text-white lg:text-white text-center lg:text-start'>Deliver food to your door step|</h2>
            <p className='text-black lg:text-lg md:text-2xl text-xl capitalize md:text-textCol lg:text-textCol text-center'>Authentic food| quick service,fast delivery</p>
        </div>
        <div className='bg-mBg md:bg-Orange lg:bg-Orange rounded-lg opacity-80'>
            <img src={image} className='h-full -mt-28 md:mt-0 lg:mt-0 md:-mb-1 lg:-mb-1'/>
        </div>
    </div>
    </div>
    
  )
}
