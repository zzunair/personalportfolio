import React from 'react';
import Image from 'next/image';
import logo from '../public/images/image.jpeg';

const HeroBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-black text-white px-8 md:px-16 lg:px-24">
      {/* Left Content - Text */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
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
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[420px] lg:w-[400px] lg:h-[500px] rounded-lg overflow-hidden border-4 border-gray-800">
          <Image 
            src={logo} 
            alt="Zunair Shahid" 
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;