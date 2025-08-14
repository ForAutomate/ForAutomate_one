// src/components/PricingPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  // Define your pricing plans/services
  // You can customize these plans based on your actual offerings
  const pricingPlans = [
    {
      name: "Basic Plan",
      description: "Get a Dedicated developer for your tasks.",
      features: [
        "8 Hours a Day, 5 Days a Week",
        "No upfront commitment",
        "Basic Power Automate Flows",
        "Standard Support",
        "Billing Cycle: Monthly"
      ],
      price: "₹50k-₹70k / Month",
      priceDetail: "Basic Choice",
      ctaText: "Get Started",
      ctaLink: "#contact",
      isPopular: false
    },
    {
      name: "Part Time / Hourly Developer",
      description: "Get a part-time or Flexi Hours suport as per your needs. Best Suitable for ad-hoc managed support service.",
      features: [
        "4-6 Hours a Day, 5 Days a Week",
        "No upfront commitment",
        "Minimum: 1 month",
        "Billing cycle: monthly",
        ],
      price: "₹800-₹1000 / Hour",
      priceDetail: "Most popular choice",
      ctaText: "Hire Part Time Develpopers",
      ctaLink: "#contact",
      isPopular: true
    },
    {
      name: "Project Development",
      description: "Get Your Startup requirements fulfilled within a Fixed Timeline and Budget.",
      features: [
        "Project estimate approved in advance",
        "Billing cycle: Milestone Based",
        "Complete responsibility on us",
        "Design to Delivery"
      ],
      price: "Custom",
      priceDetail: "Tailored to your needs",
      ctaText: "Get a Quote",
      ctaLink: "#contact",
      isPopular: false
    }
  ];

  return (
    <div className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Heading and Sub-heading */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl xl:text-8xl font-popsb text-gray-900 mb-6">
            Our <span className="text-[#742775]">Pricing</span>
          </h1>
          <p className="mt-4 text-lg xl:text-xl text-[#742775] max-w-3xl mx-auto">
            Find the perfect solution to fit your business needs and budget. We offer flexible pricing models for all our services.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={index === 1 ? "lg:-mt-4" : ""}
            >
              <motion.div
                className={`rounded-2xl p-8 flex flex-col border relative h-full overflow-hidden group
                  ${plan.isPopular 
                    ? "bg-[#742775] text-white border-purple-400 shadow-xl scale-105" 
                    : "bg-gray-50 border-gray-200 shadow-lg"}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-4 right-4 bg-white text-[#742775] text-sm font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 ${plan.isPopular 
                  ? "bg-gradient-to-br from-purple-600 to-purple-800" 
                  : "bg-gradient-to-br from-gray-100 to-white"} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content Container */}
                <div className="relative z-10">
                  {/* Plan Name */}
                  <h2 className={`text-2xl font-bold mb-3 ${plan.isPopular ? 'text-white' : 'text-[#742775]'}`}>
                    {plan.name}
                  </h2>
                  {/* Plan Description */}
                  <p className={`text-base leading-relaxed mb-6 ${plan.isPopular ? 'text-gray-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <ul className={`text-sm mb-8 flex-grow space-y-4 ${plan.isPopular ? 'text-gray-100' : 'text-gray-700'}`}>
                    {plan.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (idx * 0.1) }}
                      >
                        <svg 
                          className={`w-5 h-5 mr-2 ${plan.isPopular ? 'text-purple-200' : 'text-[#742775]'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className={`mt-auto pt-6 border-t ${plan.isPopular ? 'border-purple-400' : 'border-gray-200'}`}>
                    <p className={`text-2xl font-bold mb-1 ${plan.isPopular ? 'text-white' : 'text-gray-800'}`}>
                      {plan.price}
                    </p>
                    <p className={`text-sm mb-6 ${plan.isPopular ? 'text-gray-200' : 'text-gray-500'}`}>
                      {plan.priceDetail}
                    </p>

                    {/* CTA Button */}
                    <Link to="/contactus">
                      <Link to="/contactus">
                      <motion.button
                        className={`block w-full text-center font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300 border-[#742775] border-2
                          ${plan.isPopular 
                            ? 'bg-white text-[#742775] hover:bg-transparent border-white hover:text-white' 
                            : 'bg-[#742775] text-white hover:bg-white hover:text-[#742775]'}`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {plan.ctaText}
                      </motion.button>
                    </Link>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;