import React from 'react'
import leaf from '../assets/motionarteffect-img2.png'

const Navbar = () => {
  return (
    <nav className='sticky w-screen px-7 bg-neutral-800  py-2 flex justify-between items-center '>
      <div className='flex'>
      <img src={leaf} alt="logo" width={40} />
         <a href="#" className='text-[1.5em] tracking-tight  text-white font-[400]'>envato<span className='  text-lime-500 font-light'>market</span></a>
      </div>
      
         <button className='text-white bg-lime-600 text-sm rounded-[4px] px-5 py-2 '>Buy now</button>
    </nav>
  )
}

export default Navbar