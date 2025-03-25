import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { BiHomeAlt2, BiMenu } from 'react-icons/bi';
import { FiUser, FiFileText, FiBriefcase, FiMail, FiX } from 'react-icons/fi';
import { RiServiceLine } from 'react-icons/ri';
import logo from '../public/images/image.jpeg';
import { useNavigation } from '../context/NavigationContext';
import { SiUpwork } from 'react-icons/si';

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

  const { scrollToSection } = useNavigation();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      scrollToSection(sectionId);
    }
    if (isMobile) {
      setIsOpen(false);
    }
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
                  <a 
                    href="https://www.linkedin.com/in/zunair-shahid/" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1E2A3A] flex items-center justify-center hover:bg-blue-600 transition-colors">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a 
                    href="https://github.com/zzunair/" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1E2A3A] flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <FaGithub />
                    </div>
                  </a>
                  <a 
                    href="https://wa.me/+923224703700" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1E2A3A] flex items-center justify-center hover:bg-green-600 transition-colors">
                      <FaWhatsapp />
                    </div>
                  </a>
                  <a 
                    href="https://www.upwork.com/freelancers/~0129309c6c512e86ea" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1E2A3A] flex items-center justify-center hover:bg-[#6fda44] transition-colors">
                      <SiUpwork />
                    </div>
                  </a>
                  <a 
                    href="https://x.com/zunair_says" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1E2A3A] flex items-center justify-center hover:bg-blue-400 transition-colors">
                      <FaTwitter />
                    </div>
                  </a>
                </div>
        </div>
        
        {/* Navigation Menu */}
        <nav className="w-full mt-1">
          <ul className="flex flex-col space-y-4">
            <li className="flex justify-center">
              <a 
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className="flex items-center w-[220px] px-8 py-3 transition-colors hover:text-red-600 group"
              >
                <BiHomeAlt2 className="w-5 text-xl" />
                <span className="ml-2">Home</span>
              </a>
            </li>
            <li className="flex justify-center">
              <a 
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="flex items-center w-[220px] px-8 py-3 transition-colors hover:text-red-600 group"
              >
                <FiUser className="w-5 text-xl" />
                <span className="ml-2">About</span>
              </a>
            </li>
            <li className="flex justify-center">
              <a 
                href="#resume"
                onClick={(e) => handleNavClick(e, 'resume')}
                className="flex items-center w-[220px] px-8 py-3 transition-colors"
              >
                <FiFileText className="mr-3 text-xl" />
                <span>Resume</span>
              </a>
            </li>
            <li className="flex justify-center">
              <a 
                href="#portfolio"
                onClick={(e) => handleNavClick(e, 'portfolio')}
                className="flex items-center w-[220px] px-8 py-3 transition-colors"
              >
                <FiBriefcase className="mr-3 text-xl" />
                <span>Portfolio</span>
              </a>
            </li>
            <li className="flex justify-center">
              <a 
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className="flex items-center w-[220px] px-8 py-3 transition-colors"
              >
                <RiServiceLine className="mr-3 text-xl" />
                <span>Services</span>
              </a>
            </li>
            <li className="flex justify-center">
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="flex items-center w-[220px] px-8 py-3 transition-colors"
              >
                <FiMail className="mr-3 text-xl" />
                <span>Contact</span>
              </a>
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
