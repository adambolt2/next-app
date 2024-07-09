import React from 'react'
import myGamingImage from './myGamingExperience.gif'

const MyGamingImage = () => {
  return (
    <div className="flex flex-col items-center animate-fadeInInner">
    <img className="w-96 h-32 rounded-full" src={myGamingImage.src} alt="Adam Eltarzi Picture" />
    </div>
  )
}

export default MyGamingImage