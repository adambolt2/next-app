'use client';
import React from 'react'
import Northumbria from './Northumbria.jpeg'


const MyUniversity = () => {
  return (
<div className="flex container mt-4 flex-col items-center animate-fadeInInner">
      <h1 className=" text-center font-bold mt-10 mb-2">Northumbria University</h1>
      <h1 className=" text-center font-bold mb-6">From: 2020 To: 2023</h1>

      <img  loading='lazy' className="w-64 h-64 rounded-full object-cover" src={Northumbria.src} alt="Northumbria University Picture" />



</div>
)
}

export default MyUniversity