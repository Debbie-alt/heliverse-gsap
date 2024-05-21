import React from 'react'
import motionlogo from './assets/MotionArtEffect-logo.png'
const Hero = () => {
  return (
      <section className=' w-screen px-4 py-8 '>
            <div className="flex justify-between w-full px-4">
                <img src={motionlogo} alt="" />

                <button className=' hover:border-2 hover:border-white hover:bg-transparent hover:text-white text-black py-3 w-[200px] rounded-[5px] bg-white'>Purchase Now</button>
            </div>


            <section className='w-[72vw] flex mt-20 justify-between space-x-24'>
                  <div className=' text-lg font-sora font-[700] w-1/5  '>
                  <p className='text-gradient tracking-wide '>Transform  </p>
                  <p className='text-gradient tracking-wide'>Your  Website</p>
                  <p  className='font-light mt-2'>With Motion <br />Art Effect </p>

                  </div>

                  <div className='w-4/5 space-y-5 '>
                     <h1 className=' text-slate-300 font-semibold  text-7xl leading-[90px] '>
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