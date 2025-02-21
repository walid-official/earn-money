import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ScaleCard = () => {
  const [range, setRange] = useState(false);
  const {theme} = useContext(ThemeContext)
  return (
    <div className="" >
      <div className="w-[90%] mx-auto pb-14">
        {/* <div className="pt-10 pb-20">
          <h2 className="text-4xl  font-bold text-center">
            Transforming Dreams into Reality
          </h2>
          <p className="text-center md:w-[60%] mx-auto py-3">
            With over 2 million active users, we’re turning earning
            opportunities into a global movement. Join us in reaching new
            milestones every day.
          </p>
        </div> */}

        <div  className={`rounded-xl px-8 md:px-14 py-10 w-full shadow-2xl ${
        theme === "light"
          ? "bg-[#eaeaea] text-black"
          : "bg-gradient-to-t from-[#27292f] to-[#10121d] text-white"
      }`}>
          <div className="md:pb-16 md:pt-10 py-10">
            <h2 className="font-bold text-4xl text-center">
            Empower Your Earnings, Anywhere, Anytime
            </h2>
            <p className="text-center pt-4 pb-6 w-[70%] mx-auto">
            Unlock your earning potential with our secure, global platform. Track income in real time, access worldwide opportunities, and achieve your goals from home. Join a community of growth and success.
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
              Global Earning, Local Living
              </h2>
              <p className="text-left py-4">
              Earn worldwide, work from home, and grow with a secure, thriving community.
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
