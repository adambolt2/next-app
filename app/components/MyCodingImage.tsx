import React from 'react'
import myCode from './WhatCodingLooksLike.gif'
const MyCodingImage = () => {
  return (
    <div className="flex flex-col items-center animate-fadeInInner">
    <img className="w-96 h-32 rounded-full object-cover" src={myCode.src} alt="Adam Eltarzi Picture" />
    </div>
  )
}

export default MyCodingImage