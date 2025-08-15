// src/components/ServicesPage_2.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import powerappsLogo from '../../assets/powerapps_logo.svg';
import powerbiLogo from '../../assets/powerbi_logo.svg';
import powerautomateLogo from '../../assets/automate_logo.svg'
import copilotLogo from '../../assets/copilot_logo.svg';
import reactLogo from '../../assets/react_logo.svg';
import seoLogo from '../../assets/seo_logo.png';
import bgImage4 from '../../assets/image 4.svg';
import bgImage7 from '../../assets/image 7.svg';
import ProcessShowcase from './ProcessShowcase';
import PricingPage from './PricingPage';

import ServicesAPPSVideo from '../../assets/Services_APPS.webm';
import ServicesAUTOVideo from '../../assets/Services_AUTO.webm';
import ServicesCOVideo from '../../assets/Services_CO.webm';
import ServicesBIVideo from '../../assets/Services_BI.webm';
import ServicesWEBVideo from '../../assets/Services_WEB.webm';
import ServicesSEOVideo from '../../assets/Services_SEO.webm';

// Video Player Component with lazy loading and viewport detection
const VideoPlayer = ({ service }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-10% 0px -10% 0px", once: false });

  React.useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(error => {
          console.log("Video play failed:", error);
        });
      } else {
        videoRef.current.pause();
        // Reset video position when out of view to save memory
        videoRef.current.currentTime = 0;
      }
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="relative group">
      <div className="absolute inset-0 bg-black/5 rounded-2xl transition-opacity group-hover:opacity-0"></div>
      <video
        ref={videoRef}
        src={service.video}
        loop
        muted
        playsInline
        className="w-full h-[400px] rounded-2xl shadow-lg object-cover relative z-10"
      />
    </div>
  );
};

const ServicesPage_2 = () => {
  const services = [
    {
      id: "power-apps",
      title: "Custom Power Apps Development",
      description: "We custom-build powerful mobile and web applications tailored to your unique business needs. From streamlining workflows and enhancing data collection to providing intuitive tools for your team, our Power Apps solutions are designed for maximum efficiency and productivity.",
      video: ServicesAPPSVideo,
      logo: powerappsLogo,
      videoAlt: "Custom Power Apps development",
      priceNote: "Custom Quote (Based on Scope)",
      ctaText: "Request an App Consultation",
      gradient: "from-purple-400 to-pink-600",
      bgPattern: "radial-gradient(circle at 10% 20%, rgba(216, 241, 230, 0.46) 0%, rgba(233, 226, 226, 0.28) 90.1%)"
    },
    {
      id: "power-automate",
      title: "Intelligent Automation with Power Automate & RPA",
      description: "Eliminate repetitive, manual tasks and connect disparate systems seamlessly. We design intelligent workflows using Power Automate and Robotic Process Automation (RPA) that save significant time, reduce human errors, and accelerate your critical business operations, freeing your team for strategic work.",
      video: ServicesAUTOVideo,
      logo: powerautomateLogo,
      videoAlt: "Power Automate and RPA solutions",
      priceNote: "Project-Based Pricing",
      ctaText: "Automate Your Workflows",
      gradient: "from-blue-400 to-cyan-600",
      bgPattern: "radial-gradient(circle at 90% 90%, rgba(230, 241, 252, 0.46) 0%, rgba(233, 226, 226, 0.28) 90.1%)"
    },
    {
      id: "ai-copilot",
      title: "AI-Powered Solutions & Copilot Integration",
      description: "Infuse cutting-edge Artificial Intelligence into your operations. We integrate Copilot to boost individual and team productivity, and develop intelligent AI chatbots for instant support and information. This transforms how you interact with data and customers, providing smart, data-driven assistance.",
      video: ServicesCOVideo,
      logo: copilotLogo,
      videoAlt: "AI and Copilot integration",
      priceNote: "Project-Based Pricing",
      ctaText: "Explore AI Solutions",
      gradient: "from-green-400 to-emerald-600",
      bgPattern: "radial-gradient(circle at 10% 90%, rgba(236, 253, 245, 0.46) 0%, rgba(233, 226, 226, 0.28) 90.1%)"
    },
    {
      id: "power-bi",
      title: "Actionable Insights with Power BI",
      description: "Transform your raw business data into clear, actionable insights. We design powerful, interactive dashboards and reports using Power BI that empower you to monitor performance, identify key trends, and make confident, data-driven decisions that propel your business forward.",
      video: ServicesBIVideo,
      logo: powerbiLogo,
      videoAlt: "Power BI data visualization",
      priceNote: "Custom Dashboard Packages",
      ctaText: "Unlock Your Data",
      gradient: "from-yellow-400 to-orange-600",
      bgPattern: "radial-gradient(circle at 90% 20%, rgba(254, 243, 199, 0.46) 0%, rgba(233, 226, 226, 0.28) 90.1%)"
    },
    {
      id: "web-development",
      title: "Professional Website Development",
      description: "Your online presence starts here. We design and build modern, responsive, and engaging websites tailored to your brand's identity and goals. From compelling user interfaces to robust backend functionality, we create platforms that effectively showcase your services and connect you with your audience.",
      video: ServicesWEBVideo,
      logo: reactLogo,
      videoAlt: "Professional website development",
      priceNote: "Starting from ₹15,000",
      ctaText: "Get a New Website",
      gradient: "from-indigo-400 to-purple-600",
      bgPattern: "radial-gradient(circle at 10% 20%, rgba(238, 242, 255, 0.46) 0%, rgba(233, 226, 226, 0.28) 90.1%)"
    },
    {
      id: "seo",
      title: "Strategic SEO Services",
      description: "Boost your online visibility and attract more qualified customers. Our comprehensive SEO services optimize your website content, technical structure, and off-page factors to achieve higher rankings in search engine results, driving organic traffic and generating valuable leads for your business.",
      video: ServicesSEOVideo,
      logo: seoLogo,
      videoAlt: "Search Engine Optimization services",
      priceNote: "Monthly Retainer / Project-based",
      ctaText: "Improve Your Ranking",
      gradient: "from-red-400 to-rose-600",
      bgPattern: "radial-gradient(circle at 90% 90%, rgba(254, 226, 226, 0.46) 0%, rgba(233, 226, 226, 0.28) 90.1%)"
    }
  ];

  return (
    <>
    <div className="relative overflow-hidden">
      {/* Background decorative images */}
      <img 
        src={bgImage4} 
        alt="" 
        className="absolute top-48 xl:top-32 right-0 w-32 xl:w-60 md:w-44 rotate-180 opacity-100 select-none pointer-events-none contrast-125"
      />
      <img 
        src={bgImage7} 
        alt="" 
        className="absolute top-1/3 xl:top-1/4 left-0 w-32 xl:w-60 md:w-44  opacity-100 rotate-180 select-none pointer-events-none contrast-125"
      />
      <img 
        src={bgImage4} 
        alt="" 
        className="absolute bottom-96 left-0 w-60 opacity-100 select-none pointer-events-none contrast-125"
      />
      <img 
        src={bgImage7} 
        alt="" 
        className="absolute top-1/2 right-0 w-60 opacity-100 select-none pointer-events-none contrast-125"
      />
      <div className="w-full px-4 sm:px-6 lg:px-28 py-16 sm:py-24 mt-10 xl:mt-28 relative z-10">

        {/* Page Heading and Sub-heading */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <h1 className="text-5xl xl:text-9xl font-popsb text-gray-900 sm:text-5xl lg:text-6xl tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-xl xl:text-2xl text-[#742775] max-w-3xl">
            Empowering your business with cutting-edge digital solutions, tailored to your unique challenges and growth aspirations.
          </p>
        </motion.div>

        {/* Individual Service Sections - Seamlessly Integrated */}
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            key={service.id}
            id={service.id}
            className={`flex flex-col items-center justify-between py-16 px-0 md:px-20 mb-0
              ${index % 2 === 0 ? 'md:flex-row gap-10 xl:gap-20' : 'md:flex-row-reverse gap-10 xl:gap-40'}
              ${index < services.length - 1 ? 'border-b border-gray-100' : ''}
            `}
          >
            {/* Media (Image/Video) Section */}
            <motion.div 
              className="w-full md:w-1/2 mb-8 md:mb-0 px-4 md:px-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <VideoPlayer service={service} />
            </motion.div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 px-4 md:px-0 text-center md:text-left">
              <div className="flex items-center gap-4 mb-6">
                <img src={service.logo} alt="" className="w-12 h-12" />
                <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="mb-6 p-4 border border-gray-100 rounded-xl">
                <p className="text-md text-gray-800 font-semibold mb-2">Pricing:</p>
                <p className="text-lg text-[#742775] font-bold">{service.priceNote}</p>
              </div>
              <Link to="/contactus">
                <motion.button
                  className="inline-block bg-[#742775] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {service.ctaText}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <ProcessShowcase/>
    <PricingPage/>
    </>
  );
};

export default ServicesPage_2;