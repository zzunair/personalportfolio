import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { BiHomeAlt2, BiMenu } from 'react-icons/bi';
import { FiUser, FiFileText, FiBriefcase, FiMail, FiX } from 'react-icons/fi';
import { RiServiceLine } from 'react-icons/ri';
import logo from '../public/images/image.jpeg';

// Update the Header component to accept isOpen and setIsOpen props
const Header = ({ isOpen: propIsOpen, setIsOpen: propSetIsOpen }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Use props if provided, otherwise use internal state
  const isOpen = propIsOpen !== undefined ? propIsOpen : internalIsOpen;
  const setIsOpen = propSetIsOpen || setInternalIsOpen;

  // Check if we're on mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991);
      if (window.innerWidth > 991) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, [setIsOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <button 
          onClick={toggleMenu} 
          className="fixed top-4 left-4 z-[60] bg-red-600 text-white p-3 rounded-full shadow-lg"
        >
          {isOpen ? <FiX size={24} /> : <BiMenu size={24} />}
        </button>
      )}

      {/* Header/Sidebar */}
      <header 
        className={`fixed left-0 top-0 h-full w-[286px] bg-gradient-to-b from-black to-red-600 text-white flex flex-col items-center py-8 z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden mb-4 border-4 border-gray-700">
            <Image 
              src={logo} 
              alt="Zunair Shahid" 
              width={140} 
              height={140}
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mb-4">Zunair Shahid</h1>
          
          {/* Social Media Links */}
          <div className="flex space-x-3">
            <Link href="https://www.linkedin.com/in/zunair-shahid/" target='_blank'>
              <div className="w-8 h-8 rounded-full bg-[#1E2A3A] flex items-center justify-center hover:bg-blue-600 transition-colors">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/zzunair/">
              <div className="w-8 h-8 rounded-full bg-[#1E2A3A] flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaGithub />
              </div>
            </Link>
            <Link href="https://www.facebook.com/ZzunairShahid/">
              <div className="w-8 h-8 rounded-full bg-[#1E2A3A] flex items-center justify-center hover:bg-blue-800 transition-colors">
                <FaFacebookF />
              </div>
            </Link>
            {/* <Link href="https://instagram.com/">
              <div className="w-8 h-8 rounded-full bg-[#1E2A3A] flex items-center justify-center hover:bg-pink-600 transition-colors">
                <FaInstagram />
              </div>
            </Link> */}
            <Link href="https://x.com/zunair_says">
              <div className="w-8 h-8 rounded-full bg-[#1E2A3A] flex items-center justify-center hover:bg-blue-400 transition-colors">
                <FaTwitter />
              </div>
            </Link>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <nav className="w-full mt-1">
          <ul className="flex flex-col space-y-4">
            <li className="flex justify-center">
              <Link href="/">
                <div className="flex items-center justify-center w-[220px] px-8 py-1 text-blue-400 transition-colors">
                  <BiHomeAlt2 className="mr-3 text-xl" />
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li className="flex justify-center">
              <Link href="#about">
                <div className="flex items-center justify-center w-[220px] px-8 py-3 transition-colors">
                  <FiUser className="mr-3 text-xl" />
                  <span>About</span>
                </div>
              </Link>
            </li>
            <li className="flex justify-center">
              <Link href="#resume">
                <div className="flex items-center justify-center w-[220px] px-8 py-3 transition-colors">
                  <FiFileText className="mr-3 text-xl" />
                  <span>Resume</span>
                </div>
              </Link>
            </li>
            <li className="flex justify-center">
              <Link href="#portfolio">
                <div className="flex items-center justify-center w-[220px] px-8 py-3 transition-colors">
                  <FiBriefcase className="mr-3 text-xl" />
                  <span>Portfolio</span>
                </div>
              </Link>
            </li>
            <li className="flex justify-center">
              <Link href="#services">
                <div className="flex items-center justify-center w-[220px] px-8 py-3 transition-colors">
                  <RiServiceLine className="mr-3 text-xl" />
                  <span>Services</span>
                </div>
              </Link>
            </li>
            <li className="flex justify-center">
              <Link href="#contact">
                <div className="flex items-center justify-center w-[220px] px-8 py-3 transition-colors">
                  <FiMail className="mr-3 text-xl" />
                  <span>Contact</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Overlay for mobile when menu is open */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Header;