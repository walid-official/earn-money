import React from "react";

import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";
const Testimonial = () => {
  return (
    <div className="w-11/12 mx-auto py-20">
      <div className="pb-14">
        <h2 className="text-4xl font-bold text-center">What people say</h2>
        <p className="text-center  md:w-[50%] mx-auto py-3">
          Hear real feedback from satisfied users, showcasing their experiences
          and success stories with our platform.
        </p>
      </div>

      <div className="">
        <TestimonialSlider></TestimonialSlider>
      </div>
    </div>
  );
};

export default Testimonial;
