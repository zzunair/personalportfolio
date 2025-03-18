import React, { useState, useEffect } from "react";
import { storyblokEditable } from "@storyblok/react";
import Project from "./Project";

const Portfolio = ({ blok }) => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  const tabs = ["ALL", "SHOPIFY PLUS", "SHOPIFY", "SHOPIFY APPS", "WORDPRESS", "BIGCOMMERCE"];
  
  useEffect(() => {
    if (!blok.Proj) return;
    
    if (activeTab === "ALL") {
      setFilteredProjects(blok.Proj);
    } else {
      const filtered = blok.Proj.filter(project => 
        project.Stack && project.Stack.toUpperCase() === activeTab
      );
      setFilteredProjects(filtered);
    }
  }, [activeTab, blok.Proj]);
  
  return (
    <section className="py-16 bg-black text-white" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-2">Portfolio</h2>
        <div className="w-16 h-1 bg-red-600 mb-8"></div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-10">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 mx-2 mb-2 rounded-md transition-colors ${
                activeTab === tab 
                  ? "bg-red-600 text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <Project key={project._uid} blok={project} />
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-3 text-center py-10">
              <p className="text-gray-400">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
