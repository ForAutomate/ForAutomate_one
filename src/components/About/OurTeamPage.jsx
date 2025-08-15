import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import femaleTeam from '../../assets/female_team-2.svg';
import maleTeam from '../../assets/male_team-2.svg';
import dhruv from '../../assets/dhruv.svg';
import harsh from '../../assets/harsh.svg';
import raghvender from '../../assets/Raghvender.svg';


const OurTeamPage = () => {
  const teamMembers = [
    {
      name: 'Dhruv Jain',
      title: 'Developer',
      expertise: 'Power Platform Developer',
      image: dhruv,
    },
    {
      name: 'Harsh Sharma',
      title: 'Developer',
      expertise: 'Sharepoint / Copilot Specialist',
      image: harsh,
    },
    {
      name: 'Raghvendra',
      title: 'Analyst',
      expertise: 'Senior Buisness Analyst',
      image: raghvender,
    },
    {
      name: 'Prerna Sharma',
      title: 'Developer',
      expertise: 'Power Bi / Power Automate Specialist',
      image: femaleTeam,
    },
    {
      name: 'Ujjwal Verma',
      title: 'Developer',
      expertise: 'Web Designer and Full-Stack Developer',
      image: maleTeam,
    },
  ];

  const fadeIn = (direction, delay) => ({
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? -100 : direction === 'down' ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: 'easeOut',
      },
    },
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20, scale: 0.98 }, // Start closer, less scale
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }, // Faster
  };

  return (
    <div className="max-w-7xl mx-auto my-8 md:my-16 py-10">
      {/* Header Section */}
      <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl xl:text-6xl font-popsb text-gray-900 mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-xl text-[#742775] max-w-3xl mx-auto"
            >
              Meet the powerhouses of justice where seasoned attorneys converge to form a formidable force dedicated to safeguard your rights with excellence.
            </motion.p>
          </div>
      {/* Team Members Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={fadeIn('down', index * 0.2)}
            className="rounded-xl p-4"
          >
            <div className="rounded-e-[50px] rounded-ss-[50px] overflow-hidden mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full rounded-full object-cover border-2 border-black"
                onError={(e) => { e.target.src = `https://placehold.co/400x500/e5e7eb/6b7280?text=${member.name.replace(' ', '+')}`; }}
              />
            </div>
            <div className="text-start">
              <h3 className="text-4xl md:text-3xl xl:text-5xl font-judr text-blue-900 mb-1">{member.name}</h3>
              <div className='w-full border-[1.6px] border-sky-300 my-4'></div>
              <p className="text-xl font-popr text-sky-300 mb-2">{member.title}</p>
              <p className="text-md font-popr text-gray-500">{member.expertise}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurTeamPage;
