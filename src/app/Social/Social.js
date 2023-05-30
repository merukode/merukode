import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

function Social() {
  return (
    <div className='flex justify-center items-center text-3xl gap-4 text-white'>
        <AiOutlineGithub/>
        <AiOutlineInstagram/>
        <AiOutlineLinkedin/>
    </div>
  )
}

export default Social