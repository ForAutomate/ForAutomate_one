import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa6";
import { slideUp } from "../../utility/animation";
import IndependenceDayHeading from "./IndependenceDayHeading"; // Import the new component
import CelebrationButton from "./CelebrationButton"; // Import the new component

const IndependenceDayBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-300 via-white to-green-400 ">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* <img
          src="src\assets\image 6.png"
          alt=""
          className="absolute -top-2 -right-2 w-[80%] h-auto opacity-90 z-1 contrast-125 rotate-180"
        /> */}
        <img
          src="../../assets/independence_day_bg.png"
          alt=""
          className="absolute top-20 right-44 w-[80%] h-auto xl:opacity-20 opacity-0 z-1"
        />
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px] xl:mb-4 relative z-10">
          {/* Text content section */}
          <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pl-0 md:py-14 md:px-20 xl:-ml-48 md:items-start xl:mt-44">
            <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl md:text-4xl xl:text-8xl font-popb"
            >
              Transform Your Business with{" "}
              <span className="text-[#742775] font-popr">
                Custom Power Platform Solutions
              </span>
            </motion.h1>
            <motion.p
              variants={slideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-sm xl:text-lg"
            >
              Empowering Efficiency with Power Apps, Automate, and Pages
              Development.{" "}
            </motion.p>
            <div className="flex gap-4">
              <Link to="/aboutus">
                <motion.button
                  variants={slideUp(0.8)}
                  initial="initial"
                  animate="animate"
                  className="bg-[#742775] hover:bg-transparent hover:text-black border-[#742775] border-2 px-6 py-4 rounded-full duration-300 font-popl text-white"
                >
                  Know More
                </motion.button>
              </Link>
              <CelebrationButton />
            </div>
          </div>
          {/* Hero Video section */}
          <div className="flex flex-col justify-center items-center xl:-mr-52 xl:mt-20">
            <IndependenceDayHeading />
            <motion.div
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[90%] md:w-[550px] xl:w-[750px] overflow-hidden mt-8"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src="/src/assets/Hero_1_vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
          {/* Arrow */}
          <div className="md:flex justify-center items-center left-1/2 translate-x-1/2 py-2 hidden">
            <FaArrowDown
              className="p-[1vw] xl:text-7xl text-3xl animate-bounce cursor-pointer rounded-full hover:bg-zinc-300/30"
              onClick={() => {
                window.scrollBy({
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              }}
            />
          </div>
        </div>
      </div>
      <div className="h-40 bg-gradient-to-b from-white/0 to-[#FFFCF9] -mt-36 -mb-6"></div>
    </div>
  );
};

export default IndependenceDayBanner;

