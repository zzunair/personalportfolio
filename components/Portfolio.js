import React, { useState, useEffect } from "react";
import { storyblokEditable } from "@storyblok/react";
import Project from "./Project";

const Portfolio = ({ blok }) => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [tabCounts, setTabCounts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  const tabs = ["ALL", "SHOPIFY PLUS", "SHOPIFY", "SHOPIFY APPS", "WORDPRESS", "BIGCOMMERCE", "MERN", "NextJS"];
  
  useEffect(() => {
    if (!blok.Proj) {
      setIsLoading(false);
      return;
    }
    
    setIsLoading(true);
    
    // Calculate counts for each tab
    const counts = {};
    counts["ALL"] = blok.Proj.length;
    
    tabs.forEach(tab => {
      if (tab !== "ALL") {
        counts[tab] = blok.Proj.filter(project => 
          project.Stack && project.Stack.toUpperCase() === tab
        ).length;
      }
    });
    
    setTabCounts(counts);
    
    // Filter projects based on active tab
    if (activeTab === "ALL") {
      setFilteredProjects(blok.Proj);
    } else {
      const filtered = blok.Proj.filter(project => 
        project.Stack && project.Stack.toUpperCase() === activeTab
      );
      setFilteredProjects(filtered);
    }
    
    // Set loading to false immediately after filtering
    setIsLoading(false);
    
  }, [activeTab, blok?.Proj]);  // Removed tabs from dependency array
  
  return (
    <section className="py-16 bg-black text-white" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-3xl font-bold">Portfolio</h2>
        </div>
        <div className="w-16 h-1 bg-red-600 mb-8"></div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-10">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`px-3 py-2 mx-1 mb-2 text-sm md:text-base md:px-4 md:py-2 md:mx-2 rounded-md transition-colors ${
                activeTab === tab 
                  ? "bg-red-600 text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab} {tabCounts[tab] > 0 && `(${tabCounts[tab]})`}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeletons
            [...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg animate-pulse">
                <div className="h-48 w-full bg-gray-800"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-800 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-800 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-800 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-800 rounded w-2/3"></div>
                </div>
              </div>
            ))
          ) : (
            filteredProjects.map(project => (
              <Project key={project._uid} blok={project} />
            ))
          )}
          
          {!isLoading && filteredProjects.length === 0 && (
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
