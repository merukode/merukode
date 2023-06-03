import Link from 'next/link'
import React from 'react'
import Navbar from '../Navbar/Navbar'

function page() {
  return (
    <div className="w-screen bg-cover bg-center bg-no-repeat bg-[url('https://raw.githubusercontent.com/ulrmdhn/me.portoflio/master/src/img/bg-color-grid.png')]">
      <Navbar/>

      <div className='section p-3 '>
        <h1 className='text-center text-2xl font-bold py-3'>About</h1>
        <p className='mb-5'>As a Junior Front-End Web Developer with a passion for creating visually appealing and user friendly websites. I am always eager to learn new thing to improve my programming skills to make a meaningful impact in the industry.</p>
        <p className='mb-5'>For developing a website. I often use ReactJs and TailwindCss. I also use NodeJS and Axios quite often. I am excited to learn new things like React Native for android programming and Typescript.</p>
        <p className='mb-5'>Outside of programming, i really love listening to music. When i run out of ideas to create something, music always helps me find the idea.</p>
        <p className='mb-5'>I alsro really like reading. Comics, novels, news, and others. Reading keeps me updated with new things, and make me learn many things. When i am bored i will also look for books that i can read.</p>
      </div>
    </div>
  )
}

export default page