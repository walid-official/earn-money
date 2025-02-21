import React, { useContext } from "react";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ThemeContext } from "../../context/ThemeContext";

const TestimonialSlider = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="">
        <div  className={`px-10  rounded-xl py-10 border   shadow-2xl ${
                  theme === "light"
                    ? "bg-gradient-to-r from-[#d7d7d7] to-[#eaeaea] text-black"
                    : "bg-gradient-to-t from-[#27292f] to-[#10121d] text-white border-[#313843]"
                }`}>
          <Rating style={{ maxWidth: 120 }} value={5} readOnly />
          <p className=" w-[80%] pt-10 pb-6">
            This platform has truly changed my financial journey. The
            opportunities are endless, and I love the flexibility of earning at
            my own pace!
          </p>
          <div className="sm:flex items-center justify-between">
            <div className="">
              <h2 className="font-bold text-2xl">Nick Green</h2>
              <p className="">Developer</p>
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
        <div className={`px-10  rounded-xl py-10 border   shadow-2xl ${
                  theme === "light"
                    ? "bg-gradient-to-r from-[#d7d7d7] to-[#eaeaea] text-black"
                    : "bg-gradient-to-t from-[#27292f] to-[#10121d] text-white border-[#313843]"
                }`}>
          <Rating style={{ maxWidth: 120 }} value={5} readOnly />
          <p className=" w-[80%] pt-10 pb-6">
            I started earning from home with ease thanks to the tools and
            resources available on this platform. Highly recommend it for anyone
            looking for extra income.
          </p>
          <div className="sm:flex items-center justify-between">
            <div className="">
              <h2 className="font-bold text-2xl">Lucas P</h2>
              <p className="">Blogger</p>
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
        <div className={`px-10  rounded-xl py-10 border   shadow-2xl ${
                  theme === "light"
                    ? "bg-gradient-to-r from-[#d7d7d7] to-[#eaeaea] text-black"
                    : "bg-gradient-to-t from-[#27292f] to-[#10121d] text-white border-[#313843]"
                }`}>
          <Rating style={{ maxWidth: 120 }} value={5} readOnly />
          <p className=" w-[80%] pt-10 pb-6">
            I was skeptical at first, but after a few months, I can confidently
            say that this platform has helped me grow my online business
            significantly!
          </p>
          <div className="sm:flex items-center justify-between">
            <div className="">
              <h2 className="font-bold text-2xl">Ethan H.</h2>
              <p className="">Freelancer</p>
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
        <div className={`px-10  rounded-xl py-10 border   shadow-2xl ${
                  theme === "light"
                    ? "bg-gradient-to-r from-[#d7d7d7] to-[#eaeaea] text-black"
                    : "bg-gradient-to-t from-[#27292f] to-[#10121d] text-white border-[#313843]"
                }`}>
          <Rating style={{ maxWidth: 120 }} value={5} readOnly />
          <p className=" w-[80%] pt-10 pb-6">
            I was skeptical at first, but after a few months, I can confidently
            say that this platform has helped me grow my online business
            significantly
          </p>
          <div className="sm:flex items-center justify-between">
            <div className="">
              <h2 className="font-bold text-2xl">Sophia W.</h2>
              <p className="">Graphics Designer</p>
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
