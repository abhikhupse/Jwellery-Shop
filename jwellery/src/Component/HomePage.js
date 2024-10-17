// src/Component/HomePage.jsx
import React from "react";
import Hero from "./Hero";
import CategorySection from "./CategorySection";
import JewelrySection from "./JewelrySections";
import BestSellers from "./BestSellers";
import FeaturesSection from "./FeaturesSection";
import AboutUs from "./AboutUs";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <CategorySection />
      <JewelrySection />
      <BestSellers />
      <FeaturesSection />
      <AboutUs />
    </div>
  );
};

export default HomePage;
