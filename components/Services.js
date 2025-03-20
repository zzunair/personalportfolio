import React from 'react';
import { FiMonitor, FiCode, FiTrendingUp, FiSettings, FiServer, FiLayout, FiRefreshCw } from 'react-icons/fi';
import { SiShopify, SiWordpress, SiBigcommerce } from 'react-icons/si';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
      <div className="text-red-600 mb-4">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: SiShopify,
      title: "Custom ecommerce website development",
      description: "Create custom ecommerce websites optimized for conversions and a seamless user experience. Let us help you achieve your business objectives."
    },
    {
      icon: FiSettings,
      title: "Website redesign and optimization",
      description: "Redesign and optimize your website to improve its performance, user experience, and achieve your business objectives. Get the most out of your online presence."
    },
    {
      icon: SiBigcommerce,
      title: "Shopify, BigCommerce, WordPress expertise",
      description: "Specialize in Shopify, BigCommerce, and WordPress development, ensuring your ecommerce site is built on a platform that aligns with your business goals."
    },
    {
      icon: FiTrendingUp,
      title: "Conversion rate optimization strategies",
      description: "Specialize in developing conversion rate optimization strategies to help you increase your website's revenue and maximize ROI. Let us help you grow your business."
    },
    {
      icon: FiServer,
      title: "Custom Application Development",
      description: "Specialize in developing custom applications tailored to your specific needs. Whether you need a mobile app, a desktop application, or a web application, I have the skills and experience to deliver a solution that meets your requirements."
    },
    {
      icon: FiLayout,
      title: "Front-end development and design",
      description: "Specialize in front-end development and design to create visually appealing and user-friendly websites that are optimized for search engines and conversions. I have experience working with a variety of front-end technologies and frameworks."
    },
    {
      icon: FiRefreshCw,
      title: "Ongoing website maintenance and support",
      description: "Specialize in ongoing website maintenance and support to ensure that your website remains up-to-date, secure, and optimized for search engines. I have experience working with a variety of hosting providers and CMS platforms."
    },
    {
      icon: FiCode,
      title: "Shopify App Development",
      description: "Expert in developing custom Shopify applications that extend store functionality. From private apps for specific business needs to public apps for the Shopify App Store, I deliver scalable and efficient solutions."
    }
];

  const expertise = [
    {
      icon: SiShopify,
      title: "Shopify Development",
      description: "Expert in custom theme development, app integration, and store optimization"
    },
    {
      icon: SiBigcommerce,
      title: "BigCommerce Solutions",
      description: "Specialized in creating and customizing BigCommerce stores with advanced features"
    },
    {
      icon: SiWordpress,
      title: "WordPress & WooCommerce",
      description: "Proficient in building custom WordPress sites and WooCommerce solutions"
    },
    {
      icon: FiCode,
      title: "Full Stack Development",
      description: "Experienced in MERN stack and modern web technologies for complete solutions"
    }
  ];

  return (
    <section className="py-16 bg-black text-white" id="services">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-2">Services</h2>
        <div className="w-16 h-1 bg-red-600 mb-8"></div>
        
        <p className="text-gray-300 mb-10">
          I offer a range of ecommerce services designed to help businesses thrive in the competitive online marketplace. From custom Shopify, BigCommerce, and WordPress website development to website optimization and maintenance, I provide end-to-end solutions tailored to meet the unique needs of each client. Whether you need a complete ecommerce website built from scratch, a redesign of an existing site, or ongoing support and maintenance, I am here to help you achieve your business goals. Contact me today to discuss how I can help take your ecommerce business to the next level.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-2">Core Expertise</h2>
        <div className="w-16 h-1 bg-red-600 mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((exp, index) => (
            <ServiceCard
              key={index}
              icon={exp.icon}
              title={exp.title}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;