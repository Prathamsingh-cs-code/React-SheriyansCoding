import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='text-xl bg-500 red flex items-center justify-between gap-10px text-white px-8 py-3'>
     <h2>Navbar</h2>
     <div className='flex gap-10px'></div>
    <h2 className='text-xl text-white'>About</h2>
    <h2 className='text-xl text-white'>Contact</h2>
    <h2 className='text-xl text-white'>Location</h2>
    <h2 className='text-xl text-white'>Product</h2>
      </div>
    </div>
  )
}

export default Navbar
