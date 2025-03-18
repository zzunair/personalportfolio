import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { BiHomeAlt2 } from 'react-icons/bi';
import { FiUser, FiFileText, FiBriefcase, FiMail } from 'react-icons/fi';
import { RiServiceLine } from 'react-icons/ri';
import logo from '../public/images/image.jpeg';

const Header = () => {
  return (
    <header className="fixed left-0 top-0 h-full w-[286px] bg-gradient-to-b from-black to-red-600 text-white flex flex-col items-center py-8 z-50">
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
          <Link href="https://linkedin.com/">
            <div className="w-8 h-8 rounded-full bg-[#1E2A3A] flex items-center justify-center hover:bg-blue-600 transition-colors">
              <FaLinkedinIn />
            </div>
          </Link>
          <Link href="https://github.com/">
            <div className="w-8 h-8 rounded-full bg-[#1E2A3A] flex items-center justify-center hover:bg-gray-700 transition-colors">
              <FaGithub />
            </div>
          </Link>
          <Link href="https://facebook.com/">
            <div className="w-8 h-8 rounded-full bg-[#1E2A3A] flex items-center justify-center hover:bg-blue-800 transition-colors">
              <FaFacebookF />
            </div>
          </Link>
          <Link href="https://instagram.com/">
            <div className="w-8 h-8 rounded-full bg-[#1E2A3A] flex items-center justify-center hover:bg-pink-600 transition-colors">
              <FaInstagram />
            </div>
          </Link>
          <Link href="https://twitter.com/">
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
            <Link href="/about">
              <div className="flex items-center justify-center w-[220px] px-8 py-3 transition-colors">
                <FiUser className="mr-3 text-xl" />
                <span>About</span>
              </div>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link href="/">
              <div className="flex items-center justify-center w-[220px] px-8 py-3 transition-colors">
                <FiFileText className="mr-3 text-xl" />
                <span>Resume</span>
              </div>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link href="#">
              <div className="flex items-center justify-center w-[220px] px-8 py-3 transition-colors">
                <FiBriefcase className="mr-3 text-xl" />
                <span>Portfolio</span>
              </div>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link href="/services">
              <div className="flex items-center justify-center w-[220px] px-8 py-3 transition-colors">
                <RiServiceLine className="mr-3 text-xl" />
                <span>Services</span>
              </div>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link href="/contact">
              <div className="flex items-center justify-center w-[220px] px-8 py-3 transition-colors">
                <FiMail className="mr-3 text-xl" />
                <span>Contact</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;