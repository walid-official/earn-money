import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
import heroHand from "../../assets/hand.png";
import card from "../../assets/card.png";

import "./hero.css";
const Hero = () => {
  return (
    <div className="relative pb-20">
      <div className="absolute right-0 w-[38%] top-[290px] z-10">
        <img src={heroHand} className="" alt="" />
      </div>
      <div className="h-screen w-11/12 mx-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
        //   modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-between">
              <div className="">
                <h2>Hello World</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  optio asperiores vel temporibus suscipit porro, ipsum minima
                  facere enim tenetur dolorem, necessitatibus praesentium
                  aperiam vitae aspernatur natus ex neque iusto.
                </p>
              </div>
              <div className="">
                <div className="w-[75%] mx-auto">
                  <img src={card} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
