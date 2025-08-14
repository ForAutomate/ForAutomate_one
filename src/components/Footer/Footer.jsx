import React from 'react';
import { Mail, Phone, Linkedin, Twitter, MapPin, Send, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/yourcompany',
      icon: Linkedin,
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/yourcompany',
      icon: Twitter,
      color: 'hover:text-sky-500',
      bgColor: 'hover:bg-sky-50'
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Disclaimer', href: '#disclaimer' }
  ];

  return (
    <footer className="relative bg-white text-black">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info & Contact */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src="src\assets\Logo_dark.svg" alt="logo" className='w-40 xl:w-60' />
              <p className="text-gray-800 text-sm lg:text-base leading-relaxed mb-6">
                We're passionate about creating innovative solutions that help businesses thrive in the digital age. 
                Let's build something amazing together.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
              
              {/* Email */}
              <a 
                href="mailto:contact@yourcompany.com"
                className="flex items-center group hover:text-blue-400 transition-colors duration-200"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-lg group-hover:bg-blue-600 transition-all duration-200 mr-3">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm text-gray-400 block">Email</span>
                  <span className="text-white font-medium">contact@yourcompany.com</span>
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:+1234567890"
                className="flex items-center group hover:text-green-400 transition-colors duration-200"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-lg group-hover:bg-green-600 transition-all duration-200 mr-3">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm text-gray-400 block">Phone</span>
                  <span className="text-white font-medium">+1 (234) 567-8900</span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-lg mr-3">
                  <MapPin className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <span className="text-sm text-gray-400 block">Address</span>
                  <span className="text-white font-medium">123 Business Ave, Suite 100<br />New York, NY 10001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center text-gray-400 text-sm">
              <span>© {currentYear} YourCompany. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
              <span>All rights reserved.</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;