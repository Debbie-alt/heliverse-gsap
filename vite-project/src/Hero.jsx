import React from 'react'
import motionlogo from './assets/MotionArtEffect-logo.png'
const Hero = () => {
  return (
      <section className=' w-screen px-7 sm:px-4 py-[90px]'>
            <div className="flex flex-col md:flex-row justify-between w-full px-4">
                <img src={motionlogo} alt="" />

                <button className='mx-auto md:mx-0 hover:border-2 hover:border-white hover:bg-transparent hover:text-white text-black py-3 w-[200px] rounded-[5px] bg-white'>Purchase Now</button>
            </div>


            <section className=' w-[85vw] sm:w-[72vw] flex flex-col items-center sm:flex-row mt-20 sm:justify-between sm:space-x-24'>
                  <div className=' text-lg font-sora font-[700] w-[70%] sm:w-1/5  '>
                  <p className='text-gradient tracking-wide '>Transform  </p>
                  <p className='text-gradient tracking-wide'>Your  Website</p>
                  <p  className='font-light mt-2'>With Motion <br />Art Effect </p>

                  </div>

                  <div className=' w-[80vw] sm:w-4/5 space-y-5 '>
                     <h1 className=' text-slate-300 font-semibold text-5xl sm:text-7xl leading:[60px]  sm:leading-[90px] '>
                     Attract Your Visitors Attention With Colorful
                     </h1>
                   <h1 className="font-semibold font-sora text-6xl text-gradient leading-[90px]t">Motion Art Effect</h1>
                 <p className='text-lg text-gray-500 font-serif'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.</p>
                  </div>

            </section>

      </section>
  )
}

export default Hero