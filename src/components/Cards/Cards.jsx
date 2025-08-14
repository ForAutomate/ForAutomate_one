import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Wifi, Puzzle, Star, Shield, Zap } from "lucide-react";

// Sample data - replace with your actual data
const cardsData = [
  {
    id: 1,
    icon: "src/assets/powerapps_logo.svg",
    title: "Power Apps",
    description: "We custom-build powerful mobile and web applications using Power Apps. These tailored solutions streamline your business processes, enhance data collection, and provide intuitive tools designed precisely for your team's needs, improving efficiency.",
    color: "from-purple-500 to-pink-600",
    bgImage: "src/assets/card_img_2.svg"
  },
  {
    id: 2,
    icon: "src/assets/automate_logo.svg",
    title: "Power Automate",
    description: "Automate your repetitive tasks and integrate disparate systems seamlessly with Power Automate. We design intelligent workflows that save significant time, reduce manual errors, and accelerate your business operations, freeing up your team.",
    color: "from-blue-600 to-blue-400",
    bgImage: "src/assets/card_img_2.svg"
  },
  {
    id: 3,
    icon: "src/assets/copilot_logo.svg",
    title: "Chatbot/AI",
    description: "Leverage cutting-edge AI. We integrate Copilot to boost productivity and develop intelligent chatbots for instant support and information. This transforms how you interact with data and customers, providing smart assistance.",
    color: "from-teal-500 to-pink-400",
    bgImage: "src/assets/card_img_2.svg"
  },
  {
    id: 4,
    icon: "src/assets/powerbi_logo.svg",
    title: "Power Bi",
    description: "Transform your raw data into clear, actionable insights with Power BI. We design interactive dashboards and reports that empower you to monitor performance, identify trends, and make data-driven decisions with confidence.",
    color: "from-yellow-400 to-amber-500",
    bgImage: "src/assets/card_img_2.svg"
  },
  {
    id: 5,
    icon: "src/assets/react_logo.svg",
    title: "Website",
    description: "We create professional, responsive, and engaging websites tailored to your brand. From design to deployment, we build user-friendly platforms that effectively showcase your services and connect you with your audience.",
    color: "from-teal-300 to-blue-600",
    bgImage: "src/assets/card_img_2.svg"
  },
  {
    id: 6,
    icon: "src/assets/seo_logo.png",
    title: "Seo",
    description: "Boost your online visibility and attract more customers. Our SEO services optimize your website content and technical aspects to rank higher in search engine results, driving organic traffic and leads.",
    color: "from-orange-500 to-yellow-400",
    bgImage: "src/assets/card_img_2.svg"
  }
];

// Animation variants
const slideUp = (delay) => ({
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
});

const cardHover = {
  initial: {
    scale: 1,
    y: 0
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.01,
      ease: "linear"
    }
  }
};

const imageSlide = {
  initial: {
    x: "0%",
    opacity: 0
  },
  hover: {
    x: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const glowEffect = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  hover: {
    opacity: 1,
    scale: 1.2,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

// Individual Card Component
const Card = ({ card, delay }) => {
  const img_link = card.icon;
  
  return (
    <motion.div
      variants={slideUp(delay)}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      className="group cursor-pointer relative "
    >
          
      <motion.div
        variants={cardHover}
        className={`
          relative bg-white rounded-2xl p-8 text-center 
          flex flex-col justify-center items-center gap-6
          shadow-lg hover:shadow-2xl transition-all duration-300
          border border-zinc-300 overflow-hidden
          max-w-sm mx-auto h-full backdrop-blur-sm 
        `}
      >
        {/* Background Image Slider */}
        <motion.div
          variants={imageSlide}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${card.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Content Overlay */}
        <motion.div
          className="absolute inset-0 bg-white/10 group-hover:bg-white/10 transition-all duration-500 z-10"
        />
        
        {/* Animated Background Gradient */}
        <div className={`
          absolute inset-0 opacity-0 group-hover:opacity-20
          transition-opacity duration-500 rounded-2xl z-10
          bg-gradient-to-br ${card.bgColor}
        `} />
        
        {/* Icon with Enhanced Gradient Background */}
        <motion.div
          className={`
            relative w-20 h-20 rounded-full flex items-center justify-center
            shadow-lg z-20
            group-hover:shadow-2xl transition-all duration-300
          `}
          whileHover={{ 
            rotate: 360,
            scale: 1.1,
            transition: { duration: 0.6 }
          }}
        >
          <img src={img_link} alt="logo" />
        </motion.div>
        
        {/* Title */}
        <motion.h3 
          className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 z-20 relative"
          whileHover={{ scale: 1.05 }}
        >
          {card.title}
        </motion.h3>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-md group-hover:text-gray-900 transition-colors duration-300 z-20 relative">
          {card.description}
        </p>
        
        {/* Learn More Button */}
        <Link to="/services">
          <motion.button
            className={`
              relative px-6 py-3 rounded-full font-semibold text-white z-20
              bg-gradient-to-r ${card.color} shadow-lg
              hover:shadow-2xl transition-all duration-300
              overflow-hidden group/button
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Learn More</span>
            
            {/* Button Glow Effect */}
            <div className={`
              absolute inset-0 opacity-0 group-hover:opacity-40
              bg-gradient-to-r ${card.color} blur-lg scale-150 -z-10
              transition-opacity duration-300
            `} />
            
            {/* Button Ripple Effect */}
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover/button:opacity-20 transition-opacity duration-300"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ 
                scale: 1.5, 
                opacity: 0.2,
                transition: { duration: 0.3 }
              }}
            />
          </motion.button>
        </Link>
        
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-gray-600 rounded-full opacity-50 z-20" />
        <div className="absolute top-6 right-6 w-1 h-1 bg-gray-500 rounded-full opacity-30 z-20" />
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 z-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Cards Component
const Cards = () => {
  return (
    <div className="min-h-screen py-20 relative">
      {/* Background Design */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src="src\assets\image 4.svg" 
          alt="design" 
          className="absolute left-0 top-0 w-72 h-auto object-cover contrast-125"
        />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src="src\assets\image 4.svg" 
          alt="design" 
          className="absolute right-0 bottom-0 w-72 h-auto object-cover rotate-180 contrast-125"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-5xl xl:text-8xl font-bold text-gray-800 mb-4 relative">
            <span className="relative z-10">Our Services</span>
          </h2>
          <p className="text-[#742775] text-xl xl:text-2xl max-w-2xl mx-auto relative z-10">
            Discover amazing features and services that will transform your experience
          </p>
        </motion.div>

        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <Card 
              key={card.id} 
              card={card} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;