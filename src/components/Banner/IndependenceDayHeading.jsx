
import React from "react";
import { motion } from "framer-motion";

const IndependenceDayHeading = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="text-5xl xl:text-7xl font-popb tracking-tighter text-center"
      style={{
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
      }}
    >
      <span style={{ color: "#FF9933" }}>Happy</span>{" "}
      <span style={{ color: "#FFFFFF" }}>79th</span>{" "}
      <span style={{ color: "#138808" }}>Independence</span>{" "}
      <span style={{ color: "#FFFFFF" }}>Day !!</span>
    </motion.h1>
  );
};

export default IndependenceDayHeading;
