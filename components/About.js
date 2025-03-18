import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const About = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-2">About</h2>
        <div className="w-16 h-1 bg-red-600 mb-8"></div>
        
        <div className="mb-10">
          <p className="text-gray-300 mb-6">
            I am a professional web developer with specialization in e-commerce. My passion lies in assisting individuals to launch their online businesses by developing their websites and providing them with guidance to create a positive impression on their customers. My core competencies include expertise in Shopify, WordPress, Bigcommerce, and website design. Although I have a considerable amount of experience in website design, I understand the importance of staying up-to-date with the constantly evolving technological landscape. I am committed to continuously learning and staying curious.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Shopify, Bigcommerce & ReactJs Developer.</h3>
          <p className="text-gray-400 italic mb-8">E-commerce specialist and web developer creating beautiful online experiences.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <FiArrowRight className="text-red-600 mr-2" />
                <span className="font-medium">Birthday:</span>
                <span className="ml-2">26 April 1995</span>
              </div>
              <div className="flex items-center mb-4">
                <FiArrowRight className="text-red-600 mr-2" />
                <span className="font-medium">Website:</span>
                <span className="ml-2">zunairsportfolio.com</span>
              </div>
              <div className="flex items-center mb-4">
                <FiArrowRight className="text-red-600 mr-2" />
                <span className="font-medium">Phone:</span>
                <span className="ml-2">+92322 4703700</span>
              </div>
              <div className="flex items-center mb-4">
                <FiArrowRight className="text-red-600 mr-2" />
                <span className="font-medium">City:</span>
                <span className="ml-2">Lahore, Pakistan</span>
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <FiArrowRight className="text-red-600 mr-2" />
                <span className="font-medium">Age:</span>
                <span className="ml-2">29</span>
              </div>
              <div className="flex items-center mb-4">
                <FiArrowRight className="text-red-600 mr-2" />
                <span className="font-medium">Degree:</span>
                <span className="ml-2">Masters in Computer Science</span>
              </div>
              <div className="flex items-center mb-4">
                <FiArrowRight className="text-red-600 mr-2" />
                <span className="font-medium">Email:</span>
                <span className="ml-2">zunair700@gmail.com</span>
              </div>
              <div className="flex items-center mb-4">
                <FiArrowRight className="text-red-600 mr-2" />
                <span className="font-medium">Freelance:</span>
                <span className="ml-2">Available</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <p className="text-gray-300">
            Beyond just delivering exceptional results, I am passionate about providing guidance and support to my clients throughout the development process, ensuring that they feel confident and in control every step of the way. With a commitment to ongoing learning and curiosity, I am constantly seeking out new technologies and best practices to incorporate into my work, ensuring that my clients are always at the forefront of digital innovation. Whether you're just starting out or looking to take your existing online business to the next level, I am here to help you achieve your goals and make your vision a reality. So why not get in touch today and let's start building something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;