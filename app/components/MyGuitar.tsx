import React from 'react'
import myGuitarImage from './playingGuitar.gif'
const MyGuitar = () => {
  return (
    <div className="flex flex-col items-center animate-fadeInInner">
    <img className="w-96 h-32 rounded-full object-cover" src={myGuitarImage.src} alt="Adam Eltarzi Picture" />
    </div>  )
}

export default MyGuitar