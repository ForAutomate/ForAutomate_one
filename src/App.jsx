import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Hero2 from "./components/Hero/Hero2";
import ServicesPage_2 from "./components/Services/ServicesPage_2";
import Cards from "./components/Cards/Cards";
import Testimonial from "./components/Hero/Testimonial";
import Footer from "./components/Footer/Footer2";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import IndependenceDayBanner from "./components/Banner/IndependenceDayBanner";
import About from "./components/About/AboutUs";
import ComingSoon from "./components/Product/ComingSoon";
import Email from "./components/Email/Email";
import ScrollToTop from "./utility/ScrollToTop";
import AppLoader from "./components/AppLoader";

const Home = () => (
  <>
    <IndependenceDayBanner />
    <Hero2 />
    <Cards />
    <Testimonial />
  </>
);

const Services = () => (
  <>
    <ServicesPage_2 />
  </>
);

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppLoader>
      <main className="overflow-x-hidden font-popr bg-[#FFFCF9]">
        <ScrollToTop />
        {!isMobile && <CustomCursor />} {/* Conditionally render CustomCursor */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/products" element={<ComingSoon />} />
          <Route path="/contactus" element={<Email />} />
        </Routes>
        <Footer />
      </main>
    </AppLoader>
  );
};

export default App;
