import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Loader, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Email = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);


  const SERVICE_ID = "service_jcembna"; 
  const TEMPLATE_ID = "template_aqs042h";
  const PUBLIC_KEY = "DP5jj7SU7szyVOJ06";

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
      publicKey: PUBLIC_KEY,
    })
    .then(
      () => {
        setIsSending(false);
        setIsSent(true);
        form.current.reset(); // Clear the form
        setTimeout(() => setIsSent(false), 5000); // Hide success message after 5s
      },
      (error) => {
        setIsSending(false);
        setError("Something went wrong! Please try again.");
        console.log('FAILED...', error.text);
      }
    );
  };

  const contactInfo = {
    address: "Badshapur, Gandhi Nagar, Sector 68, Gurugaon, Haryana 122101",
    email: "Info@forautomate.com",
    phone: "+91-9319420344"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div 
      className="bg-gray-50 py-16 sm:py-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <img src="" alt="" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 xl:mt-20">
        <motion.div className="text-start mb-16" variants={itemVariants}>
          <h1 className="text-5xl md:text-8xl xl:text-9xl font-popsb tracking-tight mb-6 text-black bg-clip-text">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl xl:text-3xl text-[#742775] max-w-4xl">
            We're here to help you transform your business. Let's start a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information Section */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-[#742775] mb-8">
              Fill out the form or reach out to us directly through the information below. We look forward to hearing from you!
            </p>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#742775] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#742775] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-[#742775] hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#742775] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <a href={`tel:${contactInfo.phone}`} className="text-[#742775] hover:underline">
                    {contactInfo.phone}
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* EmailJS Form Section */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-popr text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-popr text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-popr text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-6 border border-[#742775] shadow-sm text-base font-popr rounded-2xl text-white bg-[#742775] hover:bg-transparent hover:text-[#742775] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                disabled={isSending}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSending ? (
                  <div className="flex items-center space-x-2">
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : isSent ? (
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Sent!</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
              {error && (
                <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Email;