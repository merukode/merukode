import React from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import Navbar from "../Navbar/Navbar";
import items from "../project.json";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";


// AOS.init();



function page() {
  return (
    
    <>
      <div className="w-screen bg-cover p-10 bg-center bg-no-repeat bg-[url('https://raw.githubusercontent.com/ulrmdhn/me.portoflio/master/src/img/bg-color-grid.png')]">
        <Navbar />
        <h1 className="text-center text-white text-2xl font-bold mb-10 underline underline-offset-8">
          My Projects
        </h1>
        <div className="flex flex-col gap-5 flex-wrap md:flex-row items-center md:justify-center mt-10 lg:w-9/12 lg:m-auto">
          {items.map((item) => {
            return (
              <div key={item.id} data-aos="fade-up" className="flex transition rounded-xl flex-col w-72 h-96 gap-3 bg-white">
                <img className="w-72 rounded-t-lg" src={item.img} alt="img" />
                <span className="p-1">
                  <p className="text-lg font-bold mb-2 text-[#282A2B]">
                    {item.title}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {item.tech.map((tech, index) => <p className='p-2 border-2 border-gray text-black hover:bg-black hover:text-white' key={index}>{tech}</p>)}
                  </div>
                </span>
                <span className="mt-5 flex px-5 justify-end">
                <Link href={item.link} target='none'>
                  <FaArrowCircleRight className="text-[#333] text-4xl"/>
                </Link>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default page;
