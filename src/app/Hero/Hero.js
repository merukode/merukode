import React from 'react'

function Hero() {
  return (
    <div className='text-center h-3/4 p-3 flex flex-col justify-center items-center gap-4 md:flex-row md:justify-evenly md:w-9/12 md:m-auto '>
        <div className='md:text-left md:w-2/4 md:flex md:flex-col md:gap-5 '>
        <h1 className='font-extrabold text-4xl text-white md:text-5xl'>Hi, im <span className='md:hidden'>Rama</span> <span className='hidden md:block'>Aulia Ramadhan</span></h1>
        <p className='text-gray-200/50'>Im a Front-End Web Developer with a passion for creating visually appealing and user-friendly websites.</p>
        <div>
        <button className='bg-white p-3 rounded-lg hover:bg-slate-200 hover:translate-y-2'>
            <p className='text-[#282A2B] font-medium '>About Me !</p>
        </button>
        </div>
        </div>
        <div className='hidden md:block'>
            <img className='w-72 hover:translate-y-2 transition' src='https://raw.githubusercontent.com/ulrmdhn/me.portoflio/master/src/img/avatar.png' alt='Avatar'/>
        </div>
    </div>
  )
}

export default Hero