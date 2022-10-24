import React from 'react';
import Donate from './donate.jpg';
const About =()=>{
  return(
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={About} alt="abc"/>
        <div>
          <p>Decentralized Charity System</p>
          <h1>Donate through ethereum</h1>
          <p>
          Track your donations and get a clear idea of how your donations are creating an impact
          and helping others. Ensuring transparency, we ensure that thr funds you send reach the right people</p>
      </div>
    </div>
  )
}
