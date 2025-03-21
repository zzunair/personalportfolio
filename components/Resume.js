import React from 'react';
import Link from 'next/link';

const TimelineItem = ({ date, title, subtitle, children }) => {
  return (
    <div className="relative pl-8 mb-8">
      {/* Adjust the circle position to align with the vertical line */}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-red-600 z-10"></div>
      <div className="absolute left-[7px] top-1.5 bottom-0 w-0.5 bg-red-600 -z-0"></div>
      <div className="pl-6 pb-4">
        {date && <div className="inline-block px-3 py-1 mb-2 text-sm bg-gray-800 text-gray-300 rounded">{date}</div>}
        <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
        <h5 className="text-base italic text-gray-400 mb-3">{subtitle}</h5>
        <div className="text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <section className="py-16 bg-black text-white" id='resume'>
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-2">Resume</h2>
        <div className="w-16 h-1 bg-red-600 mb-8"></div>
        
        <p className="text-gray-300 mb-10">
          Highly motivated and results-driven individual with experience in high tech environments and a proven track record of success as a senior Shopify developer. Skilled in supervising projects, training new interns, and continuously learning new Shopify app development to stay ahead of the curve. Seeking to leverage my skills and experience to make a positive impact as a key player in a challenging and creative work environment.
        </p>
        
        <div className="grid md:grid-cols-2 gap-x-10">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Sumary</h3>
            
            <TimelineItem 
              title="ZUNAIR SHAHID"
              subtitle="Skilled web developer with 6+ years of experience in designing and developing user-focused websites and web applications. Proficient in a variety of front-end and back-end technologies, and committed to delivering high-quality, polished digital products on time and within budget."
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>Lahore, Pakistan</li>
                <li>
                  <a href="tel:+923224703700" className="hover:text-red-600 transition-colors">+92 322 4703700</a>
                  {" • "}
                  <a href="https://wa.me/923224703700" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">WhatsApp</a>
                </li>
                <li>
                  <a href="mailto:zunair700@gmail.com" className="hover:text-red-600 transition-colors">zunair700@gmail.com</a>
                </li>
              </ul>
            </TimelineItem>
            
            <h3 className="text-xl font-bold mb-6">Education</h3>
            
            <TimelineItem 
              title="BEACHELOR'S IN COMPUTER SCIENCE BSCS"
              date="2013 - 2017"
              subtitle="Virtual University of Pakistan"
            />
            
            <TimelineItem 
              title="INTERMEDIATE OF COMPUTER SCIENCE ICS"
              date="2011 - 2013"
              subtitle="Govt Islamia College, Lahore"
            />

            <h3 className="text-xl font-bold mb-6">Certifications</h3>

            <a href="https://www.credly.com/badges/e9433e5b-83e8-4947-adbf-7e6cb8addc06" target='_blank'>
            <TimelineItem
              title="Liquid Storefronts for Theme Developers"
              date="2024"
              subtitle="Shopify"
            />
            </a>
          </div>
          
          {/* Right Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Professional Experience</h3>
            
            <TimelineItem 
              title="Shopify | BigCommerce | WordPress | FullStack Developer"
              date="2024 - Present"
              subtitle="Freelance | UpWork"
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>Working as a Shopify, BigCommerce, WooCommerce, and Full-stack developer on UpWork.</li>
                {/* <li>I've worked with more than 25 clients and 40+ shopify stores.</li> */}
                <li>Specialize in delivering customized e-commerce solutions.</li>
                <li>Collaborate with clients to enhance online stores and create seamless user experiences.</li>
                <li>Focus on technical precision, responsiveness, and client-focused outcomes.</li>
                <li>Contribute to the success of projects for businesses across diverse industries.</li>
              </ul>
            </TimelineItem>

            <TimelineItem 
              title="SENIOR SHOPIFY & BIGCOMMERCE DEVELOPER"
              date="2021 - 2024"
              subtitle="NESTOSH LLC, Lahore, Pakistan"
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>I've worked with more than 25 clients and 40+ shopify stores.</li>
                <li>I am an experienced Shopify developer with a track record of successfully delivering projects for over 25 clients, which includes developing more than 40 Shopify stores from scratch.</li>
                <li>I have a proven ability to lead projects and have experience in developing B2B and B2C Shopify stores.</li>
                <li>Managed teams of designers and developers for projects, ensuring that the end product aligns with the client's needs and specifications.</li>
                <li>With my expertise in Shopify development, leadership skills, and my passion for creating effective eCommerce solutions, I am committed to delivering the highest quality work for my clients.</li>
                <li>Apart from Shopify, I'm also working providing services in BigCommerce and React JS projects.</li>
              </ul>
            </TimelineItem>
            
            <TimelineItem 
              title="SHOPIFY & MERN STACK DEVELOPER"
              date="2019 - 2021"
              subtitle="GIGALABS, Lahore, Pakistan"
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed numerous websites and worked on different stacks (Shopify, MERN Stack, WordPress).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate website design</li>
                <li>Created 30+ Shopify stores and proposals for clients and account managers</li>
              </ul>
            </TimelineItem>
            
            <TimelineItem 
              title="WORDPRESS & FRONTEND DEVELOPMENT"
              date="2017 - 2020"
              subtitle="Fiverr"
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed numerous real estate websites and worked on different projects.</li>
                <li>Managed up to 5 projects at a given time while under pressure</li>
              </ul>
            </TimelineItem>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/resume.pdf">
            <div className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition-colors">
              Download Resume
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Resume;