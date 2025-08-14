import React, { useState, useEffect } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/aboutus" },
  { label: "Products", href: "/products" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className={`h-20 xl:h-32 w-full fixed z-50 xl:px-20 xl:py-10 px-6 flex items-center justify-between text-xl font-popl xl:mt-10 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-96'
        }`}>
        <img src="src/assets/Logo_dark.svg" alt="logo" className="xl:w-72 w-44 xl:-mt-10" />
        
        <div className="hidden xl:flex items-center gap-8">
          {/* Navigation Items Container */}
          <div className="flex items-center gap-[1.6vw] bg-zinc-200/20 px-8 py-6 rounded-full backdrop-blur-lg">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.href}
                className="relative text-[1.2vw] capitalize font-popl overflow-hidden group"
              >
                <div className="relative">
                  <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-full">
                    {item.label}
                  </span>
                  <span className="absolute top-full left-0 transition-transform duration-500 ease-out group-hover:-translate-y-full">
                    {item.label}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current underline-animation"></span>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Contact Us Button - Separated */}
          <Link 
            to="/contactus"
            className="bg-[#742775] text-white px-8 py-6 ml-8 rounded-full hover:bg-zinc-200/50 hover:text-black border-2 border-[#742775] text-[1.2vw] capitalize cursor-pointer font-popl transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="text-4xl px-4 mt-4 xl:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <IoMenuSharp />
        </div>
      </div>

      {/* Mobile Animated Menu */}
      <AnimatePresence>
        {menuOpen && isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 w-full z-[100] flex flex-col items-center py-8 xl:hidden shadow-lg backdrop-blur-md bg-white/80"
          >
            {[...menuItems, { label: "Contact Us", href: "/contactus" }].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="py-3 text-lg w-full text-center hover:bg-fuchsia-200/50"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .underline-animation {
          transform: translateX(100%);
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .group:hover .underline-animation {
          transform: translateX(0);
        }
        .group:not(:hover) .underline-animation {
          transform: translateX(-100%);
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s;
        }
      `}</style>
    </>
  );
}

export default Navbar;
