import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";
import { Button } from "@mui/material";
import React from "react";
import TopRatedDoctors from "../../components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "../../components/UI/HomePage/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
    </>
  );
};

export default HomePage;
