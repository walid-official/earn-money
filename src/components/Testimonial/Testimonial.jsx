import React from "react";

import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";
const Testimonial = () => {
  return (
    <div className="w-11/12 mx-auto py-20">
      <div className="pb-20">
        <h2 className="text-4xl text-white font-bold text-center">
          What people say
        </h2>
        <p className="text-center text-white md:w-[50%] mx-auto py-3">
          Hear real feedback from satisfied users, showcasing their experiences
          and success stories with our platform.
        </p>
      </div>
      <div className="flex gap-8">
        <div className="lg:w-[60%] md:w-[80%] w-[90%] mx-auto">
          <TestimonialSlider></TestimonialSlider>
        </div>
        {/* <div className="w-[40%] flex justify-center items-center">
          <h2 className="font-bold text-5xl leading-normal text-white">
           <span className="">5000+</span> <br /> happy clients all around the world
          </h2>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonial;
