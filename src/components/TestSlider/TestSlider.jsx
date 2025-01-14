import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoStar } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { CgDropInvert } from "react-icons/cg";
import { MdOutlineInventory } from "react-icons/md";
import { SiSololearn } from "react-icons/si";
import { SiGreatlearning } from "react-icons/si";
import { SiFuturelearn } from "react-icons/si";
import { FaCreativeCommonsBy } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const TestSlider = () => {
  return (
    <div className="">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000, // Set the delay time between slides (in ms)
          disableOnInteraction: false, // Allow autoplay to continue after user interaction
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
        style={{ height: "500px" }}
      >
        <SwiperSlide>
          <div className="space-y-4">
            {/* Slider: 1 - One */}
            <div className="">
              <div className="flex gap-4 bg-gradient-to-t from-[#27292f] to-[#10121d] px-8 py-8 rounded-lg shadow-2xl">
                <div className="rounded-full">
                  <div className="font-bold bg-[#00d7c0] w-14 h-14 flex justify-center items-center rounded-full text-3xl text-white">
                    <IoStar></IoStar>
                  </div>
                </div>
                <div className="text-white">
                  <h2 className="font-bold text-2xl">Flexible Earnings</h2>
                  <p className="py-2">
                    Discover various ways to earn money online or offline,
                    tailored to your skills and schedule.
                  </p>
                </div>
              </div>
            </div>
            {/* Slider: 1 - two */}
            <div className="">
              <div className="flex gap-4 bg-gradient-to-t from-[#27292f] to-[#10121d] px-8 py-8 rounded-lg shadow-2xl">
                <div className="rounded-full">
                  <div className="font-bold bg-[#00d7c0] w-14 h-14 flex justify-center items-center rounded-full text-3xl text-white">
                    <FaFileInvoiceDollar></FaFileInvoiceDollar>
                  </div>
                </div>
                <div className="text-white">
                  <h2 className="font-bold text-2xl">Monetize Skills</h2>
                  <p className="py-2">
                    Learn how to turn your talents and expertise into a
                    profitable income stream. tailored to your skills and
                    schedule.
                  </p>
                </div>
              </div>
            </div>
            {/* Slider: 1 - three */}
            <div className="">
              <div className="flex gap-4 bg-gradient-to-t from-[#27292f] to-[#10121d] px-8 py-8 rounded-lg shadow-2xl">
                <div className="rounded-full">
                  <div className="font-bold bg-[#00d7c0] w-14 h-14 flex justify-center items-center rounded-full text-3xl text-white">
                    <CgDropInvert></CgDropInvert>
                  </div>
                </div>
                <div className="text-white">
                  <h2 className="font-bold text-2xl">Income Strategies</h2>
                  <p className="py-2">
                    Explore strategies for generating passive income through
                    investments, blogging, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="space-y-4">
            {/* Slider: 2 - One */}
            <div className="">
              <div className="flex gap-4 bg-gradient-to-t from-[#27292f] to-[#10121d] px-8 py-8 rounded-lg shadow-2xl">
                <div className="rounded-full">
                  <div className="font-bold bg-[#00d7c0] w-14 h-14 flex justify-center items-center rounded-full text-3xl text-white">
                    <MdOutlineInventory></MdOutlineInventory>
                  </div>
                </div>
                <div className="text-white">
                  <h2 className="font-bold text-2xl">Freelancing Made Easy</h2>
                  <p className="py-2">
                    Discover various ways to earn money online or offline,
                    tailored to your skills and schedule.
                  </p>
                </div>
              </div>
            </div>
            {/* Slider: 2 - two */}
            <div className="">
              <div className="flex gap-4 bg-gradient-to-t from-[#27292f] to-[#10121d] px-8 py-8 rounded-lg shadow-2xl">
                <div className="rounded-full">
                  <div className="font-bold bg-[#00d7c0] w-14 h-14 flex justify-center items-center rounded-full text-3xl text-white">
                    <SiSololearn></SiSololearn>
                  </div>
                </div>
                <div className="text-white">
                  <h2 className="font-bold text-2xl">Affiliate Marketing</h2>
                  <p className="py-2">
                    Master affiliate marketing to earn commissions by promoting
                    products and services you love.
                  </p>
                </div>
              </div>
            </div>
            {/* Slider: 2 - three */}
            <div className="">
              <div className="flex gap-4 bg-gradient-to-t from-[#27292f] to-[#10121d] px-8 py-8 rounded-lg shadow-2xl">
                <div className="rounded-full">
                  <div className="font-bold bg-[#00d7c0] w-14 h-14 flex justify-center items-center rounded-full text-3xl text-white">
                    <IoStar></IoStar>
                  </div>
                </div>
                <div className="text-white">
                  <h2 className="font-bold text-2xl">Financial Literacy</h2>
                  <p className="py-2">
                    Improve your financial literacy with tips on budgeting,
                    saving, and managing your earnings effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="space-y-4">
            {/* Slider: 3 - One */}
            <div className="">
              <div className="flex gap-4 bg-gradient-to-t from-[#27292f] to-[#10121d] px-8 py-8 rounded-lg shadow-2xl">
                <div className="rounded-full">
                  <div className="font-bold bg-[#00d7c0] w-14 h-14 flex justify-center items-center rounded-full text-3xl text-white">
                    <SiGreatlearning></SiGreatlearning>
                  </div>
                </div>
                <div className="text-white">
                  <h2 className="font-bold text-2xl"> Investment Guide</h2>
                  <p className="py-2">
                    Learn how to invest in real estate, from rental properties
                    to REITs, to build a solid income portfolio.
                  </p>
                </div>
              </div>
            </div>
            {/* Slider: 3 - two */}
            <div className="">
              <div className="flex gap-4 bg-gradient-to-t from-[#27292f] to-[#10121d] px-8 py-8 rounded-lg shadow-2xl">
                <div className="rounded-full">
                  <div className="font-bold bg-[#00d7c0] w-14 h-14 flex justify-center items-center rounded-full text-3xl text-white">
                    <SiFuturelearn></SiFuturelearn>
                  </div>
                </div>
                <div className="text-white">
                  <h2 className="font-bold text-2xl">Crowdfunding Campaigns</h2>
                  <p className="py-2">
                    Launch successful crowdfunding campaigns to raise funds for
                    your projects or business ideas.
                  </p>
                </div>
              </div>
            </div>
            {/* Slider: 3 - three */}
            <div className="">
              <div className="flex gap-4 bg-gradient-to-t from-[#27292f] to-[#10121d] px-8 py-8 rounded-lg shadow-2xl">
                <div className="rounded-full">
                  <div className="font-bold bg-[#00d7c0] w-14 h-14 flex justify-center items-center rounded-full text-3xl text-white">
                    <FaCreativeCommonsBy></FaCreativeCommonsBy>
                  </div>
                </div>
                <div className="text-white">
                  <h2 className="font-bold text-2xl">Media Influence</h2>
                  <p className="py-2">
                    Build your social media presence and leverage it to earn
                    through brand partnerships and sponsored content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestSlider;
