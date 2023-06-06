import React from "react";
import Navbar from "../Navbar/Navbar";
import items from '../project.json'

function page() {
  return (
    <>
      <div className="w-screen bg-cover bg-center bg-no-repeat h-screen bg-[url('https://raw.githubusercontent.com/ulrmdhn/me.portoflio/master/src/img/bg-color-grid.png')]">
        <Navbar />

      {
        items.map( item => {
          return(
            <div className="flex">
              <div className="flex flex-col w-72 gap-3 border-2 border-black bg-white">
              <img className="w-full" src={item.img} alt="img"/>
              <span className="p-3">
              <p className="text-lg font-bold mb-2 text-[#282A2B]">{item.title}</p>
              <p className="text-sm font-medium mb-2 text-gray-600">{item.desc}</p>
              <button className="text-white bg-[#282A2B] px-5 py-2 rounded-md font-bold">Visit</button>
              </span>
              </div>
            </div>
          )
        })
      }
      </div>
    </>
  );
}

export default page;
