import React from "react";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

const Project = ({ blok }) => {
  if (!blok) return null;
  
  const ProjectCard = (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" {...storyblokEditable(blok)}>
      <div className="relative h-48 w-full">
        {blok?.Image && blok?.Image.filename ? (
          <Image 
            src={blok.Image.filename} 
            alt={blok.Name || "Project image"} 
            fill
            layout="fill"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-gray-500">No image available</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{blok.Name}</h3>
        {/* <div className="mb-3">
          <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded">
            {blok.Stack}
          </span>
        </div> */}
        {blok.Description && blok.Description.content && (
          <p className="text-gray-400 mb-4">
            {blok.Description.content[0]?.content?.[0]?.text || ""}
          </p>
        )}
      </div>
    </div>
  );

  return blok.Link ? (
    <a href={blok.Link} target="_blank" rel="noopener noreferrer">
      {ProjectCard}
    </a>
  ) : (
    ProjectCard
  );
};

export default Project;