import React from 'react';
import { motion } from 'framer-motion';
import appmaker_certificate from "../../assets/appmaker_certificate.svg";
import automate_certificate from "../../assets/automate_certificate.svg"
import bi_certificate from "../../assets/bi_certificate.svg"
import platform_certificate from "../../assets/platform_certificate.svg"


const certifications = [
  {
    id: 1,
    name: "Microsoft Certified: Power Platform App Maker Associate",
    issuer: "Microsoft",
    image: appmaker_certificate
  },
  {
    id: 2,
    name: "Microsoft Certified: Power Automate RPA Developer Associate",
    issuer: "Microsoft",
    image: automate_certificate 
  },
  {
    id: 3,
    name: "Microsoft Certified: Data Analyst Associate",
    issuer: "Microsoft",
    image: bi_certificate 
  },
  {
    id: 4,
    name: "Microsoft Certified: Power Platform Developer Associate",
    issuer: "Microsoft",
    image: platform_certificate
  }
];

const sectionInView = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const CertificationsPage = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionInView}
      className="py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            variants={staggerItem}
            className="text-4xl xl:text-6xl font-popsb text-gray-900 mb-4"
          >
            Our Certifications
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-xl text-[#742775] max-w-3xl mx-auto"
          >
            Our team holds a variety of professional certifications, demonstrating our expertise and commitment to quality.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {certifications.map(cert => (
            <motion.div
              key={cert.id}
              variants={staggerItem}
              className="rounded-3xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-72"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CertificationsPage;
