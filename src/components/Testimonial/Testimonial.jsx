import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
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
      <div className="flex gap-6">
        <div className="w-[50%]">
          <div className="bg-gradient-to-t from-[#10121d] to-[#27292f] px-20 py-10 rounded-tr-[80px]  rounded-bl-[80px] shadow-2xl">
            <Rating style={{ maxWidth: 120 }} value={5} readOnly />
            <p className="text-white w-[80%] pt-6 pb-4">This platform has truly changed my financial journey. The opportunities are endless, and I love the flexibility of earning at my own pace!</p>
            <div className="flex items-center justify-between">
                <div className="">
                    <h2 className="font-bold text-2xl text-white">Nick Green</h2>
                    <p className="text-white">Developer</p>
                </div>
                <div className="">
                    <img className="w-12 h-12 rounded-full" src="https://toka.peerduck.com/wp-content/uploads/2022/02/98-testimonial.png" alt="" />
                </div>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <h2 className="font-bold text-5xl leading-normal text-white">
           <span>5000+</span> <br></br>  happy clients <br></br> all around the world
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
