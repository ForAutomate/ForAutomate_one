import React from "react";
import { motion } from "framer-motion";

const Hero2 = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src="src/assets/image 4.svg"
          alt=""
          className="absolute xl:-top-32 xl:-left-10 w-[15%] h-auto opacity-70 contrast-125"
        />
        <img src="src/assets/image 7.svg" alt="" className="absolute xl:-bottom-20 xl:-right-20 bottom-0 right-0 w-[30%] h-auto opacity-70 contrast-125" />
      </div>

      <div className="container py-6 relative z-10">
        {/* header section */}
        <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-12 flex justify-between items-center"
        >
          <h1 className="text-4xl xl:text-5xl font-bold max-w-[650px] xl:-ml-20 z-10">
            Manual processes slowing you down?{" "}
            <span className="text-[#742775] underline">Need custom apps tailored to your workflow?</span>
          </h1>
          <p className="hidden md:block text-3xl text-right">
            We are Here For<br></br>
            <span className="text-[#742775] underline font-popsb text-3xl">You</span>{" "}
          </p>
        </motion.div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:-ml-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={"src/assets/hero2_img_2.png"}
              alt=""
              className="xl:w-[500px] mx-auto md:max-w-[500px] w-[400px] rounded-3xl pointer-events-none"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-[350px] mx-auto space-y-4 xl:ml-32"
          >
            <img src={"src/assets/powerapps_logo.svg"} alt="" className="w-14" />
            <p className="uppercase font-semibold text-2xl">Canvas and Model-driven</p>
            <p className="text-gray-500 text-lg pl-6 border-l-2">
              <span className="text-[#742775] font-popsb">Are generic tools holding you back?</span> We build custom Power Apps that fit your business perfectly. Whether you need a simple app for specific tasks (Canvas apps) or a powerful system to manage big data and operations (Model-driven apps), we create solutions that make your work easier and faster.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-[350px] mx-auto space-y-4 mt-2"
          >
            <img src={"src/assets/automate_logo.svg"} alt="" className="w-14" />
            <p className="uppercase font-semibold text-2xl">Power Automate and RPA</p>
            <p className="text-gray-500 pl-6 border-l-2 text-lg">
              <span className="text-[#742775] font-popsb">Stuck with repetitive, manual tasks?</span> We automate them! Using Power Automate and RPA, we build smart flows that connect your systems and handle tedious work for you. This frees up your team, cuts down errors, and makes your business run smoother and faster.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-[350px] mx-auto space-y-4 xl:ml-32"
          >
            <img src={"src/assets/copilot_logo.svg"} alt="" className="w-14" />
            <p className="uppercase font-semibold text-2xl">Copilot / AI</p>
            <p className="text-gray-500 pl-6 border-l-2 text-lg">
              <span className="text-[#742775] font-popsb">Need to work smarter, not harder?</span> We add AI, like Copilot, to your tools. This includes building intelligent AI chatbots that can answer questions and help users instantly. We bring intelligence to your workflows, making you more productive, insightful, and providing smarter service.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
