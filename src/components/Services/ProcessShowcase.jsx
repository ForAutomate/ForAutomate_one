import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProcessShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const processes = [
    {
      id: 1,
      title: "Discovery",
      description: "Understanding your vision, goals, and requirements through comprehensive research and analysis.",
      icon: "🔍",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Design",
      description: "Creating intuitive and visually appealing designs that align with your brand and user needs.",
      icon: "🎨",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Development",
      description: "Building robust, scalable solutions using cutting-edge technologies and best practices.",
      icon: "💻",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Deployment",
      description: "Launching your project to production with careful testing and seamless integration.",
      icon: "🚀",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Support",
      description: "Providing ongoing maintenance, updates, and support to ensure continued success.",
      icon: "🛠️",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  // Create path transforms for different screen sizes
  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="min-h-screen py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl xl:text-8xl font-bold text-gray-800 mb-6">
            How We Work
          </h2>
          <p className="text-[#742775] text-lg md:text-xl max-w-2xl mx-auto mb-32">
            Our proven process ensures exceptional results through every stage of your project journey
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Animated Path - Desktop */}
          <svg
            className="absolute inset-0 w-full h-full hidden lg:block"
            viewBox="0 0 1200 800"
            style={{ zIndex: 1 }}
          >
            <motion.path
              d="M 100 150 Q 300 50 500 150 T 900 150 Q 1000 200 1100 300"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray="10 5"
              initial={{ pathLength: 0 }}
              style={{ 
                pathLength: useTransform(scrollYProgress, [0, 0.8], [0, 1])
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="25%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="75%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Process Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {processes.map((process, index) => {
              const cardProgress = useTransform(
                scrollYProgress,
                [index * 0.1, (index + 1) * 0.1],
                [0, 1]
              );

              const y = useTransform(cardProgress, [0, 1], [100, 0]);
              const opacity = useTransform(cardProgress, [0, 1], [0, 1]);
              const scale = useTransform(cardProgress, [0, 1], [0.8, 1]);
              const rotate = useTransform(cardProgress, [0, 1], [10, 0]);

              return (
                <motion.div
                  key={process.id}
                  style={{ y, opacity, scale, rotate }}
                  className="relative"
                >
                  {/* Connector Line - Mobile/Tablet */}
                  {index < processes.length - 1 && (
                    <motion.div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 lg:hidden"
                      initial={{ height: 0 }}
                      whileInView={{ height: 60 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                      <div className="w-0.5 h-full bg-gradient-to-b from-cyan-500 to-purple-500 mx-auto opacity-50"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full shadow-md"></div>
                    </motion.div>
                  )}

                  {/* Card */}
                  <motion.div
                    className={`relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Process Number */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {process.id}
                    </div>

                    {/* Icon */}
                    <motion.div
                      className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {process.icon}
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                      {process.description}
                    </p>

                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${process.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
            animate={{
              y: [0, 15, 0],
              x: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <Link to="/contactus">
            <motion.button
              className="bg-[#742775] text-white px-8 py-6 ml-8 rounded-full hover:bg-white hover:text-black border-2 border-[#742775] text-xl capitalize cursor-pointer font-popl transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProcessShowcase;