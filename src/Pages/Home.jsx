import React from "react";
import Hero from "../components/Hero/Hero";
import ScaleCard from "../components/ScaleCard/ScaleCard";
import Features from "../components/Features/Features";
import Testimonial from "../components/Testimonial/Testimonial";
import Start from "../components/Start/Start";
import DiamondFacility from "../components/DiamondFacility/DiamondFacility";
import TopWorkers from "../components/TopWorkers/TopWorkers";
import Work from "../components/Work/Work";
import Access from "../components/Access/Access";
import TopRatedTasks from "../components/TopRatedTasks/TopRatedTasks";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Access></Access>
      <Work></Work>
      <TopRatedTasks></TopRatedTasks>
      <ScaleCard></ScaleCard>
      <TopWorkers></TopWorkers>
      <DiamondFacility></DiamondFacility>
      <Features></Features>
      <Testimonial></Testimonial>
      <Start></Start>
    </div>
  );
};

export default Home;
