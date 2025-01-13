import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import heroHand from "../../assets/hand.png"
import "./hero.css";
const Hero = () => {
  return (
    <div className="h-screen w-11/12 mx-auto">
        <div className="absolute right-0 w-[40%] bottom-0 z-10">
            <img src={heroHand} className="" alt="" />
        </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="">
            <div className="">
                <h2>Hello World</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, optio asperiores vel temporibus suscipit porro, ipsum minima facere enim tenetur dolorem, necessitatibus praesentium aperiam vitae aspernatur natus ex neque iusto.</p>
            </div>
            <div className="">
            <div className="">
                <h2>Hello World</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, optio asperiores vel temporibus suscipit porro, ipsum minima facere enim tenetur dolorem, necessitatibus praesentium aperiam vitae aspernatur natus ex neque iusto.</p>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
