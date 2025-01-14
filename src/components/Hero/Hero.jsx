import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import heroHand from "../../assets/hand.png";
import card from "../../assets/card.png";
import card2 from "../../assets/card2.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="relative pt-20">
      <div className="absolute right-0 w-[40%] top-[310px] z-10">
        <img src={heroHand} className="" alt="" />
      </div>
      <div className="h-screen w-11/12 mx-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000, // Set the delay time between slides (in ms)
            disableOnInteraction: false, // Allow autoplay to continue after user interaction
          }}
          rtl={true} // Enable right-to-left layout
          loop={true} // E
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-between">
              <div className="w-[50%] flex items-center">
                <div className="">
                  <h2 className="text-white text-xl">
                    {" "}
                    <span className="text-[#00d7c0] font-bold">
                      Discover
                    </span>{" "}
                    how to earn more
                  </h2>
                  <h1 className="font-bold leading-tight text-white text-6xl py-4">
                    Make Your <span className="text-[#00d7c0]">money</span>.{" "}
                    <br /> From anywhere, anytime!
                  </h1>
                  <p className="text-white py-3 leading-normal">
                    Make money anytime, anywhere with the freedom to work when
                    and where you want, balancing income and lifestyle
                    seamlessly.
                  </p>
                  <div className="flex gap-6 items-center pt-5">
                    <div className="flex gap-4 items-center">
                      <h2 className="text-5xl text-[#00d7c0] font-bold">2M+</h2>
                      <p className="text-white">Active Users</p>
                    </div>
                    <div className="">
                      <div className="w-1 h-10 bg-white"></div>
                    </div>
                    <div className="flex items-center gap-4">
                      <h2 className="text-5xl text-[#00d7c0] font-bold">4.8</h2>
                      <p className="text-white">Average</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[50%] ">
                <div className="w-[55%] flex justify-end mx-auto">
                  <img src={card} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between">
              <div className="w-[50%] flex items-center">
                <div className="">
                  <h2 className="text-white text-xl">
                    {" "}
                    <span className="text-[#00d7c0] font-bold">
                      Discover
                    </span>{" "}
                    how to earn more
                  </h2>
                  <h1 className="font-bold leading-tight text-white text-6xl py-4">
                    Make Your <span className="text-[#00d7c0]">money</span>.{" "}
                    <br /> From anywhere, anytime!
                  </h1>
                  <p className="text-white py-3 leading-normal">
                    Make money anytime, anywhere with the freedom to work when
                    and where you want, balancing income and lifestyle
                    seamlessly.
                  </p>
                  <div className="flex gap-6 items-center pt-5">
                    <div className="flex gap-4 items-center">
                      <h2 className="text-5xl text-[#00d7c0] font-bold">2M+</h2>
                      <p className="text-white">Active Users</p>
                    </div>
                    <div className="">
                      <div className="w-1 h-10 bg-white"></div>
                    </div>
                    <div className="flex items-center gap-4">
                      <h2 className="text-5xl text-[#00d7c0] font-bold">4.8</h2>
                      <p className="text-white">Average</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[50%] ">
                <div className="w-[55%] flex justify-end mx-auto">
                  <img src={card} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between">
              <div className="w-[50%] flex items-center">
                <div className="">
                  <h2 className="text-white text-xl">
                    {" "}
                    <span className="text-[#00d7c0] font-bold">
                      Discover
                    </span>{" "}
                    how to earn more
                  </h2>
                  <h1 className="font-bold leading-tight text-white text-6xl py-4">
                    Make Your <span className="text-[#00d7c0]">money</span>.{" "}
                    <br /> From anywhere, anytime!
                  </h1>
                  <p className="text-white py-3 leading-normal">
                    Make money anytime, anywhere with the freedom to work when
                    and where you want, balancing income and lifestyle
                    seamlessly.
                  </p>
                  <div className="flex gap-6 items-center pt-5">
                    <div className="flex gap-4 items-center">
                      <h2 className="text-5xl text-[#00d7c0] font-bold">2M+</h2>
                      <p className="text-white">Active Users</p>
                    </div>
                    <div className="">
                      <div className="w-1 h-10 bg-white"></div>
                    </div>
                    <div className="flex items-center gap-4">
                      <h2 className="text-5xl text-[#00d7c0] font-bold">4.8</h2>
                      <p className="text-white">Average</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[50%] ">
                <div className="w-[55%] flex justify-end mx-auto">
                  <img src={card} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
