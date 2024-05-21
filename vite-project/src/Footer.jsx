import React from 'react'


const Footer = () => {
  return (
      <footer className=' mt-28 w-screen text-sm h-[48px] flex justify-between items-center px-4 '>
            <p>&copy;2023 Copywrite.All rights reserved by QodeMatrix</p>
            <div className='flex  space-x-8 px-4'>
                  <a href='#' className='opacity-80 hover:opacity-100'>Documentation</a>
                  <a href="#" className='opacity-80 hover:opacity-100'>Support</a>

            </div>

      </footer>
  )
}

export default Footer