import React, { useState } from 'react';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const socialLinks = [
    {
      icon: FiGithub,
      url: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    {
      icon: FiLinkedin,
      url: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn'
    },
    {
      icon: FaWhatsapp,
      url: 'https://wa.me/923224703700',
      label: 'WhatsApp'
    },
    {
      icon: FiTwitter,
      url: 'https://twitter.com/yourusername',
      label: 'Twitter'
    },
    {
      icon: FiFacebook,
      url: 'https://facebook.com/yourusername',
      label: 'Facebook'
    }
  ];

  return (
    <section className="py-16 bg-black text-white" id="contact">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-2">Contact</h2>
        <div className="w-16 h-1 bg-red-600 mb-8"></div>
        
        <p className="text-gray-300 mb-10">
          Ready to take the next step and bring your ecommerce business to the next level? I'm here to help. Whether you have a question, a project in mind, or just want to say hello, I'd love to hear from you. Please fill out the form below to get in touch, and I'll get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiPhone className="text-red-600 mr-4" size={24} />
                  <a href="tel:+923224703700" className="hover:text-red-600 transition-colors">
                    +92 322 4703700
                  </a>
                </div>
                <div className="flex items-center">
                  <FiMail className="text-red-600 mr-4" size={24} />
                  <a href="mailto:zunair700@gmail.com" className="hover:text-red-600 transition-colors">
                    zunair700@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-600 transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:border-red-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:border-red-600"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:border-red-600"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:border-red-600"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-6 py-3 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;