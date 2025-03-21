import React from 'react';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';
import mainImage from '../public/images/main.png';

const HeroBanner = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-black text-white px-8 md:px-16 lg:px-24 w-full">
      {/* Left Content - Text */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 mt-16 md:mt-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Zunair Shahid
        </h1>
        <h2 className="text-xl md:text-2xl text-red-600 font-semibold mb-6">
          Full Stack Developer
        </h2>
        <p className="text-gray-300 mb-8 text-lg max-w-lg">
          I'm a passionate developer specializing in creating beautiful, functional, 
          and user-friendly websites and applications. With expertise in both frontend 
          and backend technologies, I deliver complete solutions that meet client needs.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md font-medium transition-colors">
          Contact Me
        </button>
      </div>

      {/* Right Content - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-center">
        <div className="relative w-[380px] h-[480px] md:w-[320px] md:h-[420px] lg:w-[400px] lg:h-[700px] rounded-lg overflow-hidden">
          <Image 
            src={mainImage} 
            alt="Zunair Shahid" 
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce"
        aria-label="Scroll to About section"
      >
        <FiChevronDown size={32} />
      </button>
    </div>
  );
};

export default HeroBanner;