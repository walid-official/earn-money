import React from "react";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const TestimonialSlider = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="">
        <div className="bg-gradient-to-t from-[#10121d] to-[#10121d] px-10  rounded-xl py-10 border border-[#313843]  shadow-2xl">
          <Rating style={{ maxWidth: 120 }} value={5} readOnly />
          <p className="text-white w-[80%] pt-10 pb-6">
            This platform has truly changed my financial journey. The
            opportunities are endless, and I love the flexibility of earning at
            my own pace!
          </p>
          <div className="sm:flex items-center justify-between">
            <div className="">
              <h2 className="font-bold text-2xl text-white">Nick Green</h2>
              <p className="text-white">Developer</p>
            </div>
            <div className="">
              <img
                className="w-12 h-12 rounded-full"
                src="https://toka.peerduck.com/wp-content/uploads/2022/02/98-testimonial.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="bg-gradient-to-t from-[#10121d] to-[#10121d] px-10  rounded-xl py-10 border border-[#313843] shadow-2xl">
          <Rating style={{ maxWidth: 120 }} value={5} readOnly />
          <p className="text-white w-[80%] pt-10 pb-6">
            I started earning from home with ease thanks to the tools and
            resources available on this platform. Highly recommend it for anyone
            looking for extra income.
          </p>
          <div className="sm:flex items-center justify-between">
            <div className="">
              <h2 className="font-bold text-2xl text-white">Lucas P</h2>
              <p className="text-white">Blogger</p>
            </div>
            <div className="">
              <img
                className="w-12 h-12 rounded-full"
                src="https://toka.peerduck.com/wp-content/uploads/2022/02/45-testimonial.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="bg-gradient-to-t from-[#10121d] to-[#10121d] px-10  rounded-xl py-10 border border-[#313843] shadow-2xl">
          <Rating style={{ maxWidth: 120 }} value={5} readOnly />
          <p className="text-white w-[80%] pt-10 pb-6">
            I was skeptical at first, but after a few months, I can confidently
            say that this platform has helped me grow my online business
            significantly!
          </p>
          <div className="sm:flex items-center justify-between">
            <div className="">
              <h2 className="font-bold text-2xl text-white">Ethan H.</h2>
              <p className="text-white">Freelancer</p>
            </div>
            <div className="">
              <img
                className="w-12 h-12 rounded-full"
                src="https://toka.peerduck.com/wp-content/uploads/2022/02/98-testimonial.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="bg-gradient-to-t from-[#10121d] to-[#10121d] px-10  rounded-xl py-10 border border-[#313843] shadow-2xl">
          <Rating style={{ maxWidth: 120 }} value={5} readOnly />
          <p className="text-white w-[80%] pt-10 pb-6">
            I was skeptical at first, but after a few months, I can confidently
            say that this platform has helped me grow my online business
            significantly
          </p>
          <div className="sm:flex items-center justify-between">
            <div className="">
              <h2 className="font-bold text-2xl text-white">Sophia W.</h2>
              <p className="text-white">Graphics Designer</p>
            </div>
            <div className="">
              <img
                className="w-12 h-12 rounded-full"
                src="https://toka.peerduck.com/wp-content/uploads/2022/02/100-testimonial.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
