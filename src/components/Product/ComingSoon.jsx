import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Bell, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Animation variants for the page elements
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "rgba(116, 39, 117, 0)", // Transparent background on hover
    color: "#000",
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');

  // Replace with your actual EmailJS IDs
  const SERVICE_ID = "service_jcembna";
  const TEMPLATE_ID = "template_aqs042h";
  const PUBLIC_KEY = "DP5jj7SU7szyVOJ06";

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date("2025-12-7") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const handleNotifyMe = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    setIsSending(true);
    setMessage('');

    const templateParams = {
      user_email: email, // This variable will be used in your EmailJS template
      from_name: "Coming Soon Page", // A default sender name for the notification
      message: `The user with email ${email} wants to be notified when the product launches.`, // Default message
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
      publicKey: PUBLIC_KEY,
    })
      .then(
        () => {
          setIsSending(false);
          setMessage('Thanks for subscribing! We\'ll notify you soon.');
          setEmail(''); // Clear the input field
        },
        (error) => {
          setIsSending(false);
          setMessage('Something went wrong. Please try again.');
          console.log('FAILED...', error);
        }
      );
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] !== undefined) { // Check for undefined to prevent showing 0s early
      timerComponents.push(
        <div key={interval} className="text-center">
          <span className="text-4xl md:text-6xl font-bold text-gray-800">{timeLeft[interval]}</span>
          <span className="block text-sm md:text-base text-[#742775] capitalize">{interval}</span>
        </div>
      );
    }
  });

  return (
    <div className="min-h-screen bg-[#FFFCF9] flex items-center justify-center p-4 relative">
      <img src="src/assets/image 6.png" alt="image" className='w-1/2 absolute -top-6 right-0 rotate-180 z-0 contrast-125' />
      <motion.div
        className="max-w-2xl w-full text-center z-10" // z-10 to bring content above image
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Bell className="mx-auto h-16 w-16 text-[#742775] mb-4" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-popsb text-gray-900 mb-4"
        >
          Something Big is Coming
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 mb-8"
        >
          We are working hard to bring you a new and exciting product. Stay tuned!
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-4 md:space-x-8 mb-12"
        >
          {timerComponents.length ? timerComponents : <span className="text-2xl font-semibold">We're Live!</span>}
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-md mx-auto">
          <p className="text-gray-800 font-semibold mb-4">Get notified when we launch:</p>
          <form onSubmit={handleNotifyMe} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-[#742775] focus:ring-2 focus:ring-[#742775]/50 outline-none transition-all"
              />
            </div>
            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              disabled={isSending}
              className="bg-[#742775] text-white px-6 py-3 rounded-full border-2 border-[#742775] font-semibold transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Sending...</span>
                </div>
              ) : message === 'Thanks for subscribing! We\'ll notify you soon.' ? (
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Subscribed!</span>
                </div>
              ) : (
                <>
                  <span>Notify Me</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </motion.button>
          </form>
          {message && (
            <p className={`mt-4 text-sm font-medium ${message.includes('Thanks') ? 'text-green-600' : 'text-red-500'}`}>
              {message}
            </p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;