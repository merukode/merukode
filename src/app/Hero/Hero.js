import React from 'react'

function Hero() {
  return (
    <div className='text-center h-3/4 p-3 flex flex-col justify-center items-center gap-4'>
        <h1 className='font-extrabold text-4xl text-white'>Hi, im Rama</h1>
        <p className='text-gray-200/50'>I'm a Front-End Web Developer with a passion for creating visually appealing and user-friendly websites.</p>
        <div>
        <button className='bg-white p-3 rounded-lg'>
            <p className='text-[#282A2B] font-medium'>About Me !</p>
        </button>
        </div>
    </div>
  )
}

export default Hero