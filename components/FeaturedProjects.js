import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => (
  <div className="group relative overflow-hidden rounded-lg">
    <div className="relative h-[300px] w-full overflow-hidden">
      <Image
        src={project.Image.filename}
        alt={project.Name}
        fill
        layout="fill"
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold mb-2">{project.Name}</h3>
          <p className="text-sm text-gray-200 mb-4">{project.Stack}</p>
          <Link 
            href={project.Link}
            target="_blank"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            View Work
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedProjects = ({ projects }) => {
  return (
    <section id="featured_portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-2 text-white">Featured Projects</h2>
      <div className="w-16 h-1 bg-red-600 mb-8"></div>
        <p className="text-gray-400 mb-12">
          Showcasing some of my best work in web development and design. Each project represents unique challenges and creative solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects?.map((project) => (
            <ProjectCard key={project._uid} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            onClick={(e) => {
              e.preventDefault();
              const portfolioSection = document.querySelector('#portfolio');
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            href="#portfolio"
            className="inline-block bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-md transition-colors text-lg cursor-pointer"
          >
            View Complete Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;