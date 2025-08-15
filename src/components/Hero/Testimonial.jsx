import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from "framer-motion";
import powerappslogo from '../../assets/powerapps_logo.svg';
import powerbiLogo from '../../assets/powerbi_logo.svg';
import powerautomateLogo from '../../assets/automate_logo.svg'
import copilotlogo from '../../assets/copilot_logo.svg';


const Testimonial = () => {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "This solution transformed our workflow completely. Amazing results!",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "CEO",
      company: "Innovate Labs",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Outstanding support and exceptional quality. Couldn't be happier!",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Design Director",
      company: "Creative Studio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The attention to detail is remarkable. Absolutely seamless experience.",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "David Kim",
      role: "CTO",
      company: "DataSync Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Incredible performance and reliability. Game-changing results!",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Marketing Lead",
      company: "Growth Partners",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Our conversion rates doubled! The analytics are incredibly valuable.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Founder",
      company: "StartupX",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Exceeded all expectations. The team is absolutely phenomenal!",
      color: "from-teal-500 to-blue-500"
    },
    {
      id: 7,
      name: "Rachel Green",
      role: "Operations Manager",
      company: "FlowTech",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Streamlined our entire process. Efficiency increased dramatically!",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 8,
      name: "James Wilson",
      role: "VP Engineering",
      company: "CloudBase",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Robust architecture and excellent scalability. Highly recommend!",
      color: "from-cyan-500 to-teal-500"
    }
  ];

  const firstRow = testimonials.slice(0, 4);
  const secondRow = testimonials.slice(4, 8);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const TestimonialCard = ({ testimonial, index }) => (
    <div 
      className="flex-shrink-0 w-72 sm:w-80 md:w-96 mx-2 sm:mx-3 group"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden h-full group-hover:scale-105">
        {/* Gradient accent */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color}`}></div>
        
        {/* Quote icon */}
        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300 mb-3 sm:mb-4 opacity-50" />
        
        {/* Rating */}
        <div className="flex mb-3 sm:mb-4">
          {renderStars(testimonial.rating)}
        </div>
        
        {/* Testimonial text */}
        <blockquote className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
          "{testimonial.text}"
        </blockquote>
        
        {/* Customer info */}
        <div className="flex items-center">
          <div className="relative">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-white shadow-md"
            />
            <div className={`absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r ${testimonial.color} rounded-full ring-2 ring-white`}></div>
          </div>
          <div className="ml-3 sm:ml-4">
            <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">
              {testimonial.name}
            </h4>
            <p className="text-gray-500 text-xs">
              {testimonial.role}
            </p>
            <p className="text-gray-400 text-xs">
              {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative py-8 sm:py-12 md:py-16 overflow-hidden">
      {/* Header */}
        <motion.div
          initial={{ opacity: 0.5, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-5xl xl:text-8xl font-bold text-gray-800 mb-4 relative">
            <span className="relative z-10">Our Clients</span>
          </h2>
          <p className="text-[#742775] text-xl xl:text-2xl max-w-2xl mx-auto relative z-10">
              Join the community of satisfied customers who've transformed their business with our solution.
          </p>
        </motion.div>
 
      {/* First Row - Moving Right */}
      <div className="relative mb-8">
        <div className={`flex ${isPaused ? '' : 'animate-marquee-right'}`}>
          {/* First set */}
          {firstRow.map((testimonial, index) => (
            <TestimonialCard key={`first-${testimonial.id}`} testimonial={testimonial} index={index} />
          ))}
          {/* Duplicate for seamless loop */}
          {firstRow.map((testimonial, index) => (
            <TestimonialCard key={`first-dup-${testimonial.id}`} testimonial={testimonial} index={index} />
          ))}
          {/* next Duplicate for seamless loop */}
          {firstRow.map((testimonial, index) => (
            <TestimonialCard key={`first-dup-${testimonial.id}`} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>

      {/* Second Row - Moving Left */}
      <div className="relative">
        <div className={`flex ${isPaused ? '' : 'animate-marquee-left'}`}>
          {/* First set */}
          {secondRow.map((testimonial, index) => (
            <TestimonialCard key={`second-${testimonial.id}`} testimonial={testimonial} index={index} />
          ))}
          {/* Duplicate for seamless loop */}
          {secondRow.map((testimonial, index) => (
            <TestimonialCard key={`second-dup-${testimonial.id}`} testimonial={testimonial} index={index} />
          ))}
          {/* Next Duplicate for seamless loop */}
          {secondRow.map((testimonial, index) => (
            <TestimonialCard key={`second-dup-${testimonial.id}`} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute top-0 left-0 w-12 xl:w-32 h-full bg-gradient-to-r from-white via-gray-50 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-12 xl:w-32 h-full bg-gradient-to-l from-white via-gray-50 to-transparent pointer-events-none z-10"></div>

      {/* Bottom CTA */}
      <div className="text-center mt-16 px-6">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
          <div className="flex -space-x-2">
            <img src = {powerappslogo} alt="" className="w-8 h-8 rounded-full object-cover bg-white" />
            <img src={copilotlogo} alt="" className="w-8 h-8 rounded-full object-cover bg-white" />
            <img src={powerautomateLogo} alt="" className="w-8 h-8 rounded-full object-cover bg-white" />
          </div>
          <span className="text-gray-700 font-medium ml-2" >
            5+ Projects Delivered
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
        
        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }

        /* Responsive animation speeds */
        @media (max-width: 768px) {
          .animate-marquee-right {
            animation: marquee-right 25s linear infinite;
          }
          
          .animate-marquee-left {
            animation: marquee-left 25s linear infinite;
          }
        }

        @media (max-width: 640px) {
          .animate-marquee-right {
            animation: marquee-right 20s linear infinite;
          }
          
          .animate-marquee-left {
            animation: marquee-left 20s linear infinite;
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;