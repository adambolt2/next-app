'use client';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import MYIMAGE from './profilePic.jpg';
import GAMINGImg from './gamingimg.jpg';
import GuitarImg from './Guitarimage.jpg'
import GYMImg from './gymPic.jpg';
import CODINGImg from './codingImg.png';

const images = [MYIMAGE, GAMINGImg, GYMImg, CODINGImg,GuitarImg];

const MyImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="container mt-7 flex flex-col items-center animate-fadeInInner">
      <h1 className="text-center font-bold text-xl">Adam Eltarzi</h1>
      <h1 className="mb-4 text-center font-semibold">Junior Software Engineer</h1>
      <img
        className="w-64 h-64 rounded-full object-cover"
        src={images[currentImageIndex].src}
        alt="Adam Eltarzi Picture"
      />
      <div className="flex mt-4 space-x-4">
        <FaArrowLeft 
          onClick={handlePrevImage} 
          className="text-4xl cursor-pointer bg-black  dark:bg-gray-100 dark:hover:bg-gray-600 rounded-full p-2 hover:bg-gray-300"
        />
        <FaArrowRight 
          onClick={handleNextImage} 
          className="text-4xl cursor-pointer  bg-black dark:bg-gray-100 rounded-full p-2 dark:hover:bg-gray-600 hover:bg-gray-300"
        />
      </div>
    </div>
  );
};

export default MyImage;
