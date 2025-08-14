// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'; // Import desired social icons
// You can pick more from https://react-icons.github.io/react-icons/

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // --- Customize Your Data ---
  const companyName = "ForAutomate"; 
  const companyDescription = "Your trusted partner for transformative digital solutions. Specializing in Microsoft Power Platform (Apps, Automate, BI, AI), custom website development, and SEO to elevate your business.";

  const quickLinks = [
    { name: "Our Services", to: "/services" },
    { name: "About Us", to: "/aboutus" },
    { name: "Contact Us", to: "/contactus" },
    { name: "Products", to: "/products" },
  ];

  const socialLinks = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ujjwalverma3115/" },
    { icon: FaTwitter, href: "https://x.com/ujjwal3115" }
  ];

  const contactInfo = {
    email: "Info@forautomate.com", 
    phone: "+91-9319420344",             
    address: "Badshapur, Gandhi Nagar, Sector 68, Gurugaon, Haryana 122101" 
  };
  

  return (
    <footer className="relative bg-gradient-to-br from-purple-600 to-indigo-800 text-gray-200 py-12 px-4 shadow-lg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold text-white mb-4">{companyName}</h3>
          <p className="text-sm leading-relaxed mb-4">
            {companyDescription}
          </p>
          <p className="text-xs text-gray-400">
            &copy; {currentYear} {companyName}. All rights reserved.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="hover:text-pink-400 hover:font-popsb transition-colors duration-300 block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Services Links (Optional - could be separate for services) */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Our Expertise</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-pink-400 hover:font-popsb transition-colors duration-300 block">Power Apps Development</Link></li>
            <li><Link to="/services" className="hover:text-pink-400 hover:font-popsb transition-colors duration-300 block">Power Automate & RPA</Link></li>
            <li><Link to="/services" className="hover:text-pink-400 hover:font-popsb transition-colors duration-300 block">AI & Copilot Solutions</Link></li>
            <li><Link to="/services" className="hover:text-pink-400 hover:font-popsb transition-colors duration-300 block">Power BI Insights</Link></li>
            <li><Link to="/services" className="hover:text-pink-400 hover:font-popsb transition-colors duration-300 block">Website Development</Link></li>
            <li><Link to="/services" className="hover:text-pink-400 hover:font-popsb transition-colors duration-300 block">SEO Services</Link></li>
          </ul>
        </div>


        {/* Section 4: Contact & Social */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <p className="text-sm mb-2">
            Email: <a href={`mailto:${contactInfo.email}`} className="hover:text-pink-400 hover:font-popsb transition-colors duration-300">{contactInfo.email}</a>
          </p>
          <p className="text-sm mb-2">
            Phone: <a href={`tel:${contactInfo.phone}`} className="hover:text-pink-400 hover:font-popsb transition-colors duration-300">{contactInfo.phone}</a>
          </p>
          <p className="text-sm mb-4">
            Location: {contactInfo.address}
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 hover:scale-110 transition-colors duration-300"
                aria-label={social.icon.name} 
              >
                <social.icon className="w-7 h-7" /> 
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;