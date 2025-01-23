import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import heroHand from "../../assets/hand.png";
import card from "../../assets/card.png";
import diamond1 from "../../assets/diamond1.png";
import diamond2 from "../../assets/coin90.png";
import "./hero.css";
import { motion } from "motion/react";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div className="relative pt-20">
      <div className="absolute right-0 w-[40%] top-[310px] z-10 lg:flex hidden">
        <img src={heroHand} className="" alt="" />
      </div>
      <div className="lg:h-screen w-11/12 mx-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 7000, // Set the delay time between slides (in ms)
            disableOnInteraction: false, // Allow autoplay to continue after user interaction
          }}
          rtl={true} // Enable right-to-left layout
          loop={true} // E
          speed={1000}
          freeMode={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="lg:flex justify-between">
              <div className="lg:w-[50%] md:w-[70%] w-[90%] mx-auto lg:mx-0 flex items-center">
                <div className="">
                  <p className="text-white rounded-tr-2xl  rounded-bl-2xl text-center bg-gradient-to-t from-[#27292f] to-[#10121d] py-3 px-7 lg:w-[50%] md:w-[70%] md:mx-auto lg:mx-0 w-full text-xl">
                    {" "}
                    <span className="text-[#00d7c0] font-bold">
                      Discover
                    </span>{" "}
                    how to earn more
                  </p>
                  <h1 className="font-bold lg:leading-tight text-white text-center lg:text-left text-3xl md:text-5xl lg:text-6xl py-4">
                    Make Your <span className="text-[#00d7c0]">money</span>.{" "}
                   <br /> From anywhere, anytime!
                  </h1>
                  <p className="text-white lg:text-left text-center py-3 leading-normal">
                    Make money anytime, anywhere with the freedom to work when
                    and where you want, balancing income and lifestyle
                    seamlessly.
                  </p>
                  <div className="md:flex space-y-2 md:space-y-2 gap-6 items-center justify-center lg:justify-start pt-5">
                    <div className="rounded-tr-[30px] px-7 py-4  rounded-bl-[30px] text-center bg-gradient-to-t from-[#27292f] to-[#10121d]">
                      <h2 className="text-5xl text-[#00d7c0] font-bold">
                        <CountUp end={2} />
                        M+
                      </h2>
                      <p className="text-white py-4">Profit Growth</p>
                    </div>

                    <div className="rounded-tr-[30px] px-7 py-4  rounded-bl-[30px] text-center bg-gradient-to-t from-[#27292f] to-[#10121d]">
                      <h2 className="text-5xl text-[#00d7c0] font-bold">
                        <CountUp end={90} />K
                      </h2>
                      <p className="text-white py-4">Earning Boost</p>
                    </div>
                    <div className="rounded-tr-[30px] px-7 py-4  rounded-bl-[30px] text-center bg-gradient-to-t from-[#27292f] to-[#10121d]">
                      <h2 className="text-5xl text-[#00d7c0] font-bold">
                        <CountUp end={12.5} />K
                      </h2>
                      <p className="text-white py-4">Quick Rewards</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[46%] ">
                <motion.div
                  animate={{ y: 20 }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-3/5 flex justify-end mx-auto"
                >
                   <img src={card} alt="Diamond" />
                  
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:flex justify-between">
              <div className="lg:w-[50%] md:w-[70%] w-[90%] mx-auto lg:mx-0 flex items-center">
                <div className="">
                  <p className="text-white rounded-tr-2xl  rounded-bl-2xl text-center bg-gradient-to-t from-[#27292f] to-[#10121d] py-3 px-7 lg:w-[50%] md:w-[70%] md:mx-auto lg:mx-0 w-full text-xl">
                    {" "}
                    <span className="text-[#00d7c0] font-bold">
                      Discover
                    </span>{" "}
                    how to earn more
                  </p>
                  <h1 className="font-bold lg:leading-tight text-white text-center lg:text-left text-3xl md:text-5xl lg:text-6xl py-4">
                    Grow Your <span className="text-[#00d7c0]">wealth</span>.
                    Anytime, anywhere!
                  </h1>
                  <p className="text-white lg:text-left text-center py-3 leading-normal">
                    Make money anytime, anywhere with the freedom to work when
                    and where you want, balancing income and lifestyle
                    seamlessly.
                  </p>
                  <div className="md:flex space-y-2 md:space-y-2 gap-6 items-center justify-center lg:justify-start pt-5">
                    <div className="rounded-tr-[30px] px-7 py-4  rounded-bl-[30px] text-center bg-gradient-to-t from-[#27292f] to-[#10121d]">
                      <h2 className="text-5xl text-[#00d7c0] font-bold">
                        <CountUp end={4} />
                        M+
                      </h2>
                      <p className="text-white py-4">Growth Path</p>
                    </div>

                    <div className="rounded-tr-[30px] px-7 py-4  rounded-bl-[30px] text-center bg-gradient-to-t from-[#27292f] to-[#10121d]">
                      <h2 className="text-5xl text-[#00d7c0] font-bold">
                        <CountUp end={95} />K
                      </h2>
                      <p className="text-white py-4">Success Drive</p>
                    </div>
                    <div className="rounded-tr-[30px] px-7 py-4  rounded-bl-[30px] text-center bg-gradient-to-t from-[#27292f] to-[#10121d]">
                      <h2 className="text-5xl text-[#00d7c0] font-bold">
                        <CountUp end={44.5} />K
                      </h2>
                      <p className="text-white py-4">Fast Earnings</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[43%] ">
                <motion.div
                  animate={{ y: 20 }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-[55%] flex justify-end mx-auto"
                >
                  <img src={diamond2} alt="Diamond" />
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:flex justify-between">
              <div className="lg:w-[50%] md:w-[70%] w-[90%] mx-auto lg:mx-0 flex items-center">
                <div className="">
                  <p className="text-white rounded-tr-2xl  rounded-bl-2xl text-center bg-gradient-to-t from-[#27292f] to-[#10121d] py-3 px-7 lg:w-[50%] md:w-[70%] md:mx-auto lg:mx-0 w-full text-xl">
                    {" "}
                    <span className="text-[#00d7c0] font-bold">
                      Discover
                    </span>{" "}
                    how to earn more
                  </p>
                  <h1 className="font-bold lg:leading-tight text-white text-center lg:text-left text-3xl md:text-5xl lg:text-6xl py-4">
                    Boost Your <span className="text-[#00d7c0]">skills</span>.
                    Anytime, anywhere!
                  </h1>
                  <p className="text-white lg:text-left text-center py-3 leading-normal">
                    Make money anytime, anywhere with the freedom to work when
                    and where you want, balancing income and lifestyle
                    seamlessly.
                  </p>
                  <div className="md:flex space-y-2 md:space-y-2 gap-6 items-center justify-center lg:justify-start pt-5">
                    <div className="rounded-tr-[30px] px-7 py-4  rounded-bl-[30px] text-center bg-gradient-to-t from-[#27292f] to-[#10121d]">
                      <h2 className="text-5xl text-[#00d7c0] font-bold">
                        <CountUp end={3} />
                        M+
                      </h2>
                      <p className="text-white py-4">Winning Edge</p>
                    </div>

                    <div className="rounded-tr-[30px] px-7 py-4  rounded-bl-[30px] text-center bg-gradient-to-t from-[#27292f] to-[#10121d]">
                      <h2 className="text-5xl text-[#00d7c0] font-bold">
                        <CountUp end={85} />K
                      </h2>
                      <p className="text-white py-4">Task Success</p>
                    </div>
                    <div className="rounded-tr-[30px] px-7 py-4  rounded-bl-[30px] text-center bg-gradient-to-t from-[#27292f] to-[#10121d]">
                      <h2 className="text-5xl text-[#00d7c0] font-bold">
                        <CountUp end={11} />H+
                      </h2>
                      <p className="text-white py-4">Bonus Time</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[50%] ">
                <motion.div
                  animate={{ y: 20 }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-3/5 flex justify-end mx-auto"
                >
                 <img src={diamond1} alt="Diamond" />
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
