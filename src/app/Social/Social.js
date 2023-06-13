import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import Link from 'next/link';

function Social() {
  return (
    <div className='flex justify-center items-center text-3xl gap-4 text-white'>
        <Link href="https://github.com/sayarama/sayarama" target='none'>
        <AiOutlineGithub/>
        </Link>
        <Link href="https://www.instagram.com/ul.ramadhan/" target='none'>
        <AiOutlineInstagram/>
        </Link>
        <Link href="https://www.linkedin.com/in/aulia-ramadhan-9b9586262/" target='none'>
        <AiOutlineLinkedin/>
        </Link>
    </div>
  )
}

export default Social