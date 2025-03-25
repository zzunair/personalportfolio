import React from 'react';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';
import mainImage from '../public/images/main.png';
import TypeWriter from './TypeWriter';

const StatBubble = ({ value, label, className }) => (
  <div className={`absolute bg-black/80 rounded-full p-3 backdrop-blur-sm ${className} stat-bubble w-[100px] h-[100px] flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:shadow-[0_0_20px_rgba(239,68,68,0.7)] transition-shadow duration-300`}>
    <div className="text-center">
      <div className="text-red-600 font-bold text-xl">{value}</div>
      <div className="text-xs text-gray-300 whitespace-nowrap">{label}</div>
    </div>
  </div>
);

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
        <h2 className="text-gray-300 mb-2">HELLO I'M Zunair Shahid</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          A <TypeWriter />
        </h1>
        <p className="text-gray-300 mb-8 text-lg max-w-lg">
          I'm a passionate developer specializing in creating beautiful, functional, 
          and user-friendly websites and applications. With expertise in both frontend 
          and backend technologies, I deliver complete solutions that meet client needs.
        </p>
        <button 
          onClick={() => {
            const portfolioSection = document.querySelector('#portfolio');
            if (portfolioSection) {
              portfolioSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md font-medium transition-colors mr-4"
        >
          VIEW PORTFOLIO
        </button>
        <button 
          onClick={() => {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md font-medium transition-colors"
        >
          REQUEST SERVICES
        </button>
      </div>

      {/* Right Content - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-center relative">
        <div className="relative w-[380px] h-[480px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]">
          {/* Glowing circle background */}
          <div className="absolute inset-0 rounded-full bg-red-600 opacity-20 blur-3xl"></div>
          
          {/* Main image */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image 
              src={mainImage} 
              alt="Zunair Shahid" 
              fill
              className="object-cover"
            />
          </div>

          {/* Stat bubbles */}
          <StatBubble 
            value="100+"
            label="Projects Completed"
            className="bottom-20 -right-5"
          />
          <StatBubble 
            value="8+"
            label="Years Experience"
            className="-top-5 left-1/2 -translate-x-1/2"
          />
          <StatBubble 
            value="50+"
            label="Happy Clients"
            className="bottom-60 -left-5"
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