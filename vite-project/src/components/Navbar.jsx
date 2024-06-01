import React from 'react'
import leaf from '../assets/motionarteffect-img2.png'

const Navbar = () => {
  return (
    <nav className='fixed w-screen px-4 xs:px-7 bg-neutral-800  h-[60px] py-2 flex justify-between items-center '>
      <div className='flex'>
      <img src={leaf} alt="logo" width={40} />
         <a href="#" className=' text-[1.3em] xs:text-[1.5em] tracking-tight  text-white font-[400]'>envato<span className='  text-lime-500 font-light'>market</span></a>
      </div>
      
         <button className='text-white bg-lime-600 text-xs xs:text-sm rounded-[4px] px-4 py-2 '>Buy now</button>
    </nav>
  )
}

export default Navbar