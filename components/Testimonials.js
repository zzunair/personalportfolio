import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ name, designation, description }) => (
  <div className="px-4">
    <div className="bg-[#1E2A3A] p-8 rounded-lg h-full">
      <FaQuoteLeft className="text-red-600 text-4xl mb-6" />
      <p className="text-gray-300 mb-6 line-clamp-6">
        {description}
      </p>
      <div className="flex items-center">
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          {designation && (
            <p className="text-gray-400 text-sm">{designation}</p>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = ({ testimonials }) => {
  // Add console.log to debug the data
  console.log('Testimonials data:', testimonials);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Change to 1 since we have one testimonial
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  // Add a check for empty or invalid testimonials
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-black" id="testimonials">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-2 text-white">Testimonials</h2>
        <div className="w-16 h-1 bg-red-600 mb-12"></div>
        
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial._uid}
              name={testimonial.Name}
              designation={testimonial.Designation}
              description={testimonial.Description.content[0].content[0].text}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;