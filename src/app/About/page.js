import Link from 'next/link'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Social from '../Social/Social'

function page() {
  return (
    <div className="w-screen h-full 3xl:h-screen bg-cover bg-center bg-no-repeat bg-[url('https://raw.githubusercontent.com/ulrmdhn/me.portoflio/master/src/img/bg-color-grid.png')]">
      <Navbar/>

      <div className='section p-3 lg:w-3/4 lg:m-auto lg:justify-around text-white'>
        <h1 className='underline underline-offset-8 text-2xl font-bold py-3'>About</h1>
        <aside className='float-right hidden md:block md:w-72'>
          <img className='hover:translate-y-2 transition'
            src="https://raw.githubusercontent.com/ulrmdhn/me.portoflio/master/src/img/avatar.png"
            alt='Avatar Profile'
          />
        </aside>
        <p className='mb-5'>As a Junior Front-End Web Developer with a passion for creating visually appealing and user friendly websites. I am always eager to learn new thing to improve my programming skills to make a meaningful impact in the industry.</p>
        <p className='mb-5'>For developing a website. I often use ReactJs and TailwindCss. I also use NodeJS and Axios quite often. I am excited to learn new things like React Native for android programming and Typescript.</p>
        <p className='mb-5'>Outside of programming, i really love listening to music. When i run out of ideas to create something, music always helps me find the idea.</p>
        <p className='mb-5'>I alsro really like reading. Comics, novels, news, and others. Reading keeps me updated with new things, and make me learn many things. When i am bored i will also look for books that i can read.</p>
        <h1 className='underline underline-offset-8 text-2xl font-bold py-3'>
          Skills & Tools
        </h1>
        <div>
          <ul>
            <li>- HTML</li>
            <li>- CSS/SCSS</li>
            <li>- TypeScript</li>
            <li>- Javascript</li>
            <li>- TailwindCss</li>
            <li>- Material UI</li>
            <li>- Charkra UI</li>
            <li>- Bootstrap</li>
            <li>- React</li>
            <li>- Next.js</li>
            <li>- Framer</li>
            <li>- VS code</li>
            <li>- Node.js</li>
            <li>- Git</li>
            <li>- Figma</li>
            <li>- Inkscape</li>
          </ul>
        </div>
      </div>
      <Social className=""/>
    </div>
    
  )
}

export default page