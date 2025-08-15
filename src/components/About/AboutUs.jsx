
import React, { useState } from 'react';
import { CheckCircle, Target, Lightbulb, Users, Award, ArrowRight, Plus, Minus, Zap, Globe, Layout, Search, Cpu, Database } from 'lucide-react'; // Added more relevant icons for content
import { motion } from 'framer-motion';
import bgImage4 from '../../assets/image 4.svg';
import bgImage14 from '../../assets/image 14.svg';
import bgImage8 from '../../assets/image 8.svg';
import bgImage6 from '../../assets/image 6.png';
import footerBg from '../../assets/footer_bg.png'; 
import founderimg from '../../assets/founder.svg';
import OurTeamPage from './OurTeamPage';
import CertificationsPage from './CertificationsPage';



// --- Framer Motion Animation Variants (Adjusted for faster triggers/animations) ---

// For overall sections to fade in and slide up
const sectionInView = {
  hidden: { opacity: 0, y: 40 }, // Start closer
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7, // Slightly faster
      ease: "easeOut",
      when: "beforeChildren", // Ensures the section is visible before its contents animate
    },
  },
};

// For containers that will stagger their direct children (e.g., grids, lists of text)
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Faster stagger between children
      delayChildren: 0.1,    // Overall delay before children start animating (reduced)
    },
  },
};

// For individual items within a staggered container (e.g., card, paragraph, heading)
const staggerItem = {
  hidden: { opacity: 0, y: 20, scale: 0.98 }, // Start closer, less scale
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }, // Faster
};

// For an image or a distinct visual element to reveal itself
const imageReveal = {
  hidden: { opacity: 0, scale: 0.9, rotate: -3 }, // Less aggressive rotation
  show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Faster
};

// For general fade-in animations on elements
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};


export default function AboutUs() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is Microsoft Power Platform and how can it benefit my business?",
      answer: "Microsoft Power Platform is a suite of low-code/no-code tools including Power Apps, Power Automate, Power BI, and Power Virtual Agents. It enables businesses to build custom applications, automate workflows, analyze data, and create chatbots without extensive coding knowledge. Benefits include increased productivity, reduced manual work, better data insights, and faster time-to-market for business solutions."
    },
    {
      question: "How long does a typical automation project take to implement?",
      answer: "Project timelines vary based on complexity and scope. Simple workflow automations can be implemented in 1-2 weeks, while comprehensive business process automation solutions may take 4-12 weeks. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do I need technical expertise to use the solutions you build?",
      answer: "Not at all! We design our solutions with end-users in mind, ensuring they're intuitive and easy to use. We provide comprehensive training and documentation for all solutions we deliver. Our goal is to empower your team to use and maintain the automated processes independently."
    },
    {
      question: "Can you integrate with our existing systems and software?",
      answer: "Yes, absolutely. Power Platform offers extensive integration capabilities with Microsoft 365, third-party applications, databases, and APIs. We specialize in creating seamless connections between your existing systems to ensure data flows smoothly across your entire technology ecosystem."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We offer comprehensive post-implementation support including user training, documentation, maintenance, troubleshooting, and system updates. We also provide ongoing consultation to help you identify new automation opportunities as your business evolves."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "Security is our top priority. We follow Microsoft's security best practices, implement proper access controls, data encryption, and compliance measures. Power Platform inherits enterprise-grade security from Microsoft 365, and we ensure all solutions meet your industry's regulatory requirements."
    },
    {
      question: "What's the typical ROI for automation projects?",
      answer: "Most clients see ROI within 3-6 months through time savings, reduced errors, and improved efficiency. Typical benefits include 40-70% reduction in manual processing time, 90% fewer errors, and significant cost savings in operational overhead. We provide detailed ROI projections during our assessment phase."
    },
    {
      question: "Can you help with both small improvements and large-scale transformations?",
      answer: "Yes, we work with projects of all sizes. Whether you need to automate a single workflow or transform your entire business processes, we have the expertise to deliver. We often start with quick wins and then scale up to more comprehensive solutions based on your needs and budget."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#742775]" />,
      title: "Innovation-Driven",
      description: "Constantly pioneering cutting-edge Power Platform solutions to transform your business."
    },
    {
      icon: <Users className="w-8 h-8 text-[#742775]" />,
      title: "Client-Centricity",
      description: "Your success is our priority. We listen, understand, and deliver tailored automation strategies."
    },
    {
      icon: <Target className="w-8 h-8 text-[#742775]" />,
      title: "Efficiency First",
      description: "Streamlining workflows to maximize productivity and minimize complexity across all operations."
    },
    {
      icon: <Award className="w-8 h-8 text-[#742775]" />,
      title: "Unmatched Excellence",
      description: "Delivering exceptional quality in every Power App, automation, and digital solution we craft."
    }
  ];

  const expertise = [
    { icon: <Zap className="w-6 h-6 text-[#742775]" />, skill: "Power Apps Development" },
    { icon: <Target className="w-6 h-6 text-[#742775]" />, skill: "Power Automate & RPA" },
    { icon: <Cpu className="w-6 h-6 text-[#742775]" />, skill: "Copilot / AI & Chatbot Integration" },
    { icon: <Database className="w-6 h-6 text-[#742775]" />, skill: "Power BI Data Analytics" },
    { icon: <Layout className="w-6 h-6 text-[#742775]" />, skill: "Custom Website Development" },
    { icon: <Search className="w-6 h-6 text-[#742775]" />, skill: "SEO & Digital Visibility" }
  ];

  const whyChooseUs = [
    {
      title: "Deep Power Platform Expertise",
      description: "Years of hands-on experience across Power Apps, Power Automate, Power BI, and Power Pages."
    },
    {
      title: "Proven Transformation Track Record",
      description: "Successfully delivered 100+ automation and digital projects for diverse industries."
    },
    {
      title: "End-to-End Solution Partnership",
      description: "From strategy and development to deployment, training, and ongoing support."
    },
    {
      title: "Rapid & Agile Implementation",
      description: "Fast turnaround times with an agile approach, ensuring quick value delivery."
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="show" 
      className="min-h-screen bg-[#FFFCF9]" 
    >
      {/* bg images */}
      <div className='w-full h-full'>
      <img 
        src={footerBg} 
        alt="image" 
        className="rotate-180 absolute xl:-top-36 md:-top-10 top-0 contrast-125"
      />
      <img 
        src={bgImage8} 
        alt="" 
        className="absolute top-[1000px] right-0 w-0 xl:w-96 opacity-100 select-none pointer-events-none rotate-180  z-0" 
      /><img 
        src={bgImage8} 
        alt="" 
        className="absolute top-[2080px] left-0 w-0 xl:w-96 opacity-100 select-none pointer-events-none  z-0" // Added image
      />  
      <img 
        src={bgImage14} 
        alt="" 
        className="absolute top-[2880px] right-0 w-0 xl:w-72 opacity-100 select-none pointer-events-none  z-0" // Added image
      />
      <img 
        src={bgImage4} 
        alt="" 
        className="absolute top-[4140px] left-0 w-0 xl:w-72 opacity-100 select-none pointer-events-none  z-0" // Added image
      />
      <img 
        src={bgImage4} 
        alt="" 
        className="absolute top-[5120px] right-0 w-0 xl:w-64 opacity-100 rotate-180 select-none pointer-events-none  z-0" // Added image
      />
      <img 
        src={bgImage4} 
        alt="" 
        className="absolute top-[5520px] left-0 w-0 xl:w-56 opacity-100 select-none pointer-events-none  z-0" // Added image
      />
      <img 
        src={bgImage14} 
        alt="" 
        className="absolute top-[6520px] right-0 w-0 xl:w-56 opacity-100 select-none pointer-events-none  z-0" // Added image
      />
      <img 
        src={bgImage14} 
        alt="" 
        className="absolute top-[7720px] left-0 w-0 xl:w-56 rotate-180 opacity-100 select-none pointer-events-none  z-0" // Added image
      />
       
      </div>
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white md:mt-28 mt-10 xl:mt-40">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-left">
            <motion.h1
              variants={staggerItem} 
              initial="hidden" 
              animate="show" 
              className="text-5xl md:text-8xl xl:text-9xl font-popsb tracking-tight mb-6 text-black bg-clip-text"
            >
              About Us
            </motion.h1>
            <motion.p
              variants={staggerItem} 
              initial="hidden" 
              animate="show" 
              className="text-xl md:text-2xl xl:text-3xl text-[#742775] max-w-4xl "
            >
              Transforming businesses through intelligent automation and innovative Power Platform solutions
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"> 
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }} 
          variants={sectionInView} 
        >
          <motion.div variants={staggerContainer}> {/* Stagger text content */}
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl xl:text-5xl font-popsb tracking-tight text-gray-900 mb-8"
            >
              Our Story & Mission
            </motion.h2>
            <div className="space-y-6 text-lg xl:text-xl text-gray-700 leading-relaxed">
              <motion.p variants={staggerItem}>
                ForAutomate was born from a simple yet powerful vision: to democratize business automation
                and make advanced technology accessible to organizations of all sizes. We recognized that
                many businesses were struggling with repetitive tasks, inefficient processes, and data silos
                that were holding them back from reaching their full potential.
              </motion.p>
              <motion.p variants={staggerItem}>
                Our mission is to empower businesses through intelligent automation solutions built on
                Microsoft's Power Platform, covering Power Apps, Power Automate, Power Pages, Power BI, and AI integration. We believe that by eliminating manual work and streamlining
                processes, we can help organizations focus on what truly matters - innovation, growth,
                and serving their customers better.
              </motion.p>
              <motion.p variants={staggerItem}>
                Every project we undertake is guided by our commitment to delivering not just technical
                solutions, but transformative business outcomes that drive real value and sustainable growth.
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            variants={imageReveal} 
            className="relative"
          >
            <div className="bg-gradient-to-b from-[#742775] to-fuchsia-700 rounded-2xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Target className="w-12 h-12 mb-4 text-blue-200" />
                <h3 className="text-2xl font-popsb mb-4 ">Our Vision</h3>
                <p className="text-blue-50">
                  To be the leading catalyst for digital transformation, enabling businesses to thrive
                  in an automated, efficient, and data-driven future. We aim to be your trusted partner in unlocking the full potential of Microsoft Power Platform.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }} // Trigger animation earlier
          variants={sectionInView}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl xl:text-6xl font-popsb text-gray-900 mb-4"
            >
              Meet Our Founder
            </motion.h2>
            <motion.p variants={staggerItem} className="text-xl text-[#742775] max-w-3xl mx-auto">
              The visionary leader driving ForAutomate's mission to transform businesses through intelligent automation
            </motion.p>
          </div>

          <motion.div variants={staggerItem} className="max-w-4xl mx-auto"> {/* Animate founder card */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-[#742775] to-purple-900 p-8 flex items-center justify-center">
                  <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-40 h-40 bg-white/30 rounded-full flex items-center justify-center">
                      {/* You can replace this with an actual image or a different icon */}
                      <img src = {founderimg} alt='Founder' className='h-40 w-40 rounded-full object-cover'/>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8 md:p-12">
                  <h3 className="text-3xl font-popsb text-gray-900 mb-2">Achyutananda Das</h3>
                  <p className="text-xl text-[#742775] font-semibold mb-6">Founder & CEO</p>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <motion.p variants={staggerItem}>
                      With over 10 years of experience in enterprise solutions and Microsoft technologies, Achyutananda founded ForAutomate to specialize in empowering businesses with the full spectrum of Power Platform capabilities.
                    </motion.p>
                    <motion.p variants={staggerItem}>
                      As a certified expert in Power Apps, Power Automate, and Power BI, Achyutananda has successfully led numerous digital transformation initiatives, helping organizations save significant time and resources through strategic automation and custom application development.
                    </motion.p>
                    <motion.p variants={staggerItem}>
                      Passionate about innovation and client success, Achyutananda's vision for ForAutomate is to be the go-to partner for businesses seeking to leverage low-code development, AI, and robust web solutions to achieve unparalleled operational efficiency and growth.
                    </motion.p>
                  </div>

                  <motion.div variants={staggerContainer} className="mt-8 flex flex-wrap gap-3"> {/* Animate tags */}
                    <motion.span variants={staggerItem} className="px-4 py-2 bg-[#cc61ce27] text-black rounded-full text-sm font-medium">
                      Power Platform Expert
                    </motion.span>
                    <motion.span variants={staggerItem} className="px-4 py-2 bg-[#cc61ce27] text-black rounded-full text-sm font-medium">
                      Microsoft Certified
                    </motion.span>
                    <motion.span variants={staggerItem} className="px-4 py-2 bg-[#cc61ce27] text-black rounded-full text-sm font-medium">
                      Automation Strategist
                    </motion.span>
                    <motion.span variants={staggerItem} className="px-4 py-2 bg-[#cc61ce27] text-black rounded-full text-sm font-medium">
                      AI & Web Solutions
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }} // Trigger animation earlier
          variants={sectionInView}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl xl:text-6xl font-popsb text-gray-900 mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p variants={staggerItem} className="text-xl text-[#742775] max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence in every digital solution we deliver
            </motion.p>
          </div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem} // Animate each value card
                className="group"
              >
                <div className="bg-[#FFFCF9] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#74277598] border-[1.2px] border-black transition-all duration-300 group-hover:-translate-y-2 h-full">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300 text-[#742775]">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-popsb text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Our team */}
      <OurTeamPage/>

      {/* certifications */}
      <CertificationsPage/>

      {/* Our Expertise */}
      <section className="py-20">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }} // Trigger animation earlier
          variants={sectionInView}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl xl:text-6xl font-popsb text-gray-900 mb-4"
            >
              Our Core Expertise
            </motion.h2>
            <motion.p variants={staggerItem} className="text-xl text-[#742775] max-w-3xl mx-auto">
              Deep knowledge and hands-on experience across the entire Microsoft Power Platform and digital ecosystem
            </motion.p>
          </div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((skill, index) => (
              <motion.div
                key={index}
                variants={staggerItem} // Animate each expertise item
                className="group"
              >
                <div className="bg-[#cc61ce27] rounded-xl p-6 border-2 border-black transition-all duration-300 group-hover:shadow-xl hover:-translate-y-2">
                  <div className="flex items-center space-x-3">
                    {skill.icon} {/* Render the icon */}
                    <span className="text-lg font-semibold text-gray-900">{skill.skill}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 text-black">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation earlier
          variants={sectionInView}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl xl:text-6xl font-popsb mb-4"
            >
              Why Choose ForAutomate?
            </motion.h2>
            <motion.p variants={staggerItem} className="text-xl text-[#742775] max-w-3xl mx-auto">
              Here's what sets us apart in the world of business automation and digital transformation
            </motion.p>
          </div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                variants={staggerItem} // Animate each reason
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg border-s-2 border-[#742775] hover:shadow-2xl hover:shadow-[#74277598] p-8 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <ArrowRight className="w-6 h-6 text-[#742775] mt-1 group-hover:translate-x-2 transition-transform duration-300" />
                    <div>
                      <h3 className="text-xl text-[#742775] font-popsb mb-3">{reason.title}</h3>
                      <p className="text-gray-800 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 ">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionInView}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl xl:text-6xl font-popsb text-gray-900 mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={staggerItem} className="text-xl text-[#742775] max-w-3xl mx-auto">
              Get answers to common questions about our automation services and the Power Platform
            </motion.p>
          </div>

          <motion.div variants={staggerContainer} className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={staggerItem} // Animate each FAQ item
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 focus:outline-none focus:ring-4 focus:ring-blue-200 rounded-2xl"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-8 group-hover:text-[#742775] transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFaq === index ? (
                          <Minus className="w-6 h-6 text-[#742775] transform group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                          <Plus className="w-6 h-6 text-gray-400 group-hover:text-[#742775] transform group-hover:scale-110 transition-all duration-300" />
                        )}
                      </div>
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100 pt-4' : 'max-h-0 opacity-0' 
                  }`}>
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
            <motion.button
              variants={staggerItem} // Animate the button
              className="bg-[#742775] text-white px-6 py-4 rounded-full hover:bg-transparent hover:text-black border-2 border-[#742775] text-xl capitalize cursor-pointer font-popl transition-colors duration-200"
            >
              Contact Us Today
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionInView} 
        >
          <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="xl:text-7xl text-4xl font-popsb text-gray-900 mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-[#742775] mb-10">
            Let's discuss how ForAutomate can help streamline your processes and drive growth through intelligent automation, custom applications, and a strong online presence.
          </motion.p>
          <motion.div variants={staggerContainer} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              variants={staggerItem} 
              className="bg-[#742775] text-white px-8 py-6 rounded-full hover:bg-transparent hover:text-black border-2 border-[#742775] text-xl capitalize cursor-pointer font-popl transition-colors duration-200"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}