import React from 'react';
import Typed from 'react-typed';
const Home =()=>{
  return(
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto mt-16 text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 text-3xl">Growing by Donating to Charity Organizations</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Fundraising Program</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold py-4">Contribute to Organizations like </p>
          <Typed className="md:text-3xl sm:text-2xl text-xl font-bold pl-2" strings={["NGOs","Orphanages","Old Age Homes"]} typeSpeed={120} bacSpeed={140} loop/>
        </div>

        <p className="md:text-2xl  text-xl font-bold text-gray-500 pt-2">Enlighten those lives that seek your help</p>
      </div>
    </div>

  )
}
export default Home;
