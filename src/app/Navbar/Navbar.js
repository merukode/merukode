import React from 'react'

function Navbar() {
  return (
    <div className='w-80 m-auto justify-between p-3 flex items-center text-white md:w-3/4'>
        <div>
        <img className='w-12' src='https://raw.githubusercontent.com/ulrmdhn/me.portoflio/master/src/img/mini-avatar.png'/>
        </div>
        <div className='flex gap-4'>
        <p className='hidden md:block underline underline-offset-8'>Home</p>
        <p className='underline underline-offset-8'>Projects</p>
        </div>
    </div>
  )
}

export default Navbar