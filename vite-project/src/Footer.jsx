import React from 'react'


const Footer = () => {
  return (
      <footer className=' mt-28 w-screen text-xs  xs:text-sm  p-10 sm:h-[48px] flex justify-between items-center px-4  '>
            <p className='mb-3'>&copy;2023 Copywright. <br />All rights reserved by QodeMatrix</p>
            <div className=' flex flex-col space-y-2 sm:space-y-0 sm:flex-row  space-x-8 px-4'>
                  <a href='#' className='opacity-80 hover:opacity-100'>Documentation</a>
                  <a href="#" className='opacity-80 hover:opacity-100'>Support</a>

            </div>

      </footer>
  )
}

export default Footer