import React from 'react'

function Navbar() {
  return (
    <div className='w-80 m-auto justify-between p-3 flex items-center'>
        <div>
        <img className='w-12' src='https://raw.githubusercontent.com/ulrmdhn/me.portoflio/master/src/img/mini-avatar.png'/>
        </div>
        <p className='hidden'>Home</p>
        <p>Projects</p>
    </div>
  )
}

export default Navbar