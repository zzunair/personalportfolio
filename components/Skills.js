import React from 'react';

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium uppercase">{skill}</span>
        <span className="text-white">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-red-600 h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <div className="w-16 h-1 bg-red-600 mb-8"></div>
        
        <p className="text-gray-300 mb-10">
          As an ecommerce specialist, I bring extensive experience in Shopify, BigCommerce, and WordPress development, coupled with a strong foundation in front-end development, to deliver top-notch ecommerce solutions that drive sales and enhance user experience.
        </p>
        
        <div className="grid md:grid-cols-2 gap-x-10">
          <div>
            <SkillBar skill="SHOPIFY THEMES" percentage={100} />
            <SkillBar skill="SHOPIFY APPS" percentage={100} />
            <SkillBar skill="SHOPIFY HYDROGEN" percentage={90} />
            <SkillBar skill="SHOPIFY EXTENSIONS" percentage={90} />
            <SkillBar skill="HTML" percentage={100} />
            <SkillBar skill="CSS" percentage={100} />
            <SkillBar skill="JAVASCRIPT" percentage={80} />
            <SkillBar skill="VERSION CONTROLS" percentage={90} />
            <SkillBar skill="MONGO DB" percentage={80} />

          </div>
          
          <div>
            
            <SkillBar skill="REACT.JS" percentage={80} />
            <SkillBar skill="NEXT.JS" percentage={80} />
            <SkillBar skill="NODE.JS" percentage={70} />
            <SkillBar skill="JQUERY" percentage={90} />
            <SkillBar skill="BIGCOMMERCE" percentage={80} />
            <SkillBar skill="WORDPRESS" percentage={80} />
            <SkillBar skill="STORYBLOK CMS" percentage={70} />
            <SkillBar skill="TAILWIND CSS" percentage={90} />
            <SkillBar skill="FIREBASE DB" percentage={80} />


          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;