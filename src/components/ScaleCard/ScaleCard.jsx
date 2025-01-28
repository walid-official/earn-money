import React, { useState } from "react";

const ScaleCard = () => {
  const [range, setRange] = useState(false);
  return (
    <div className="" >
      <div className="md:w-[80%] w-[90%] mx-auto pb-14">
        <div className="pt-10 pb-20">
          <h2 className="text-4xl text-white font-bold text-center">
            Transforming Dreams into Reality
          </h2>
          <p className="text-center text-white md:w-[60%] mx-auto py-3">
            With over 2 million active users, we’re turning earning
            opportunities into a global movement. Join us in reaching new
            milestones every day.
          </p>
        </div>

        <div className="bg-[#10121d] rounded-xl px-8 md:px-14 py-10 w-full  z-10 text-white shadow-2xl" >
          <div className="md:pb-16 md:pt-10 py-10">
            <h2 className="font-bold text-3xl text-center">
              Real-Time Earnings Tracker
            </h2>
            <p className="text-center py-4">
              Track your earnings in real time and stay on top of your financial
              goals.
            </p>
            <div className="">
              {/* <progress className="progress w-56" value="70" max="100"></progress> */}
              <input
                type="range"
                min={0}
                max="100"
                value="90"
                className="range range-accent  range-md"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="">
              <h2 className="font-bold text-2xl text-left">
                Real-Time Earnings Tracker
              </h2>
              <p className="text-left py-4">
                Track your earnings in real time and stay on top of your
                financial goals.
              </p>
              <div className="">
                {/* <progress className="progress w-56" value="70" max="100"></progress> */}
                <input
                  type="range"
                  min={0}
                  max="100"
                  value="80"
                  className="range  range-md"
                />
              </div>
            </div>

            <div className="">
              <h2 className="font-bold text-2xl text-left">
                Earn Globally, Work Locally
              </h2>
              <p className="text-left py-4">
                Reach users around the world and earn money from the comfort of
                your home.
              </p>
              <div className="">
                {/* <progress className="progress w-56" value="70" max="100"></progress> */}
                <input
                  type="range"
                  min={0}
                  max="100"
                  value="90"
                  className="range  range-md"
                />
              </div>
            </div>
            <div className="">
              <h2 className="font-bold text-2xl text-left">
                Safe & Secure Platform
              </h2>
              <p className="text-left py-4">
                Our platform ensures the security of your personal information
                and earnings.
              </p>
              <div className="">
                {/* <progress className="progress w-56" value="70" max="100"></progress> */}
                <input
                  type="range"
                  min={0}
                  max="100"
                  value="85"
                  className="range  range-md"
                />
              </div>
            </div>
            <div className="">
              <h2 className="font-bold text-2xl text-left">
                Growth in Last Quarter
              </h2>
              <p className="text-left py-4">
                Witnessing continuous growth with new opportunities for all
                users.
              </p>
              <div className="">
                {/* <progress className="progress w-56" value="70" max="100"></progress> */}
                <input
                  type="range"
                  min={0}
                  max="100"
                  value="90"
                  className="range  range-md"
                />
              </div>
            </div>

            <div className="">
              <h2 className="font-bold text-2xl text-left">
                Redefining the Future of Earning
              </h2>
              <p className="text-left py-4">
                Discover how we make earning limitless for everyone, anytime,
                anywhere.
              </p>
              <div className="">
                {/* <progress className="progress w-56" value="70" max="100"></progress> */}
                <input
                  type="range"
                  min={0}
                  max="100"
                  value="75"
                  className="range  range-md"
                />
              </div>
            </div>

            <div className="">
              <h2 className="font-bold text-2xl text-left">
                A Community of Growth and Success
              </h2>
              <p className="text-left py-4">
                Our platform's growth mirrors users' global success in earning
                with ease and security.
              </p>
              <div className="">
                {/* <progress className="progress w-56" value="70" max="100"></progress> */}
                <input
                  type="range"
                  min={0}
                  max="100"
                  value="80"
                  className="range  range-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScaleCard;
