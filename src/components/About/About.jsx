import React from "react";

const About = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center py-10">
        <h3 className="text-accent text-xl font-bold">Our Story</h3>
        <h2 className="text-5xl font-bold text-white">About our company</h2>
        <p className="text-white py-4 w-[60%] mx-auto">
          Micro-tasking earning platform where users can complete simple tasks
          and earn money instantly. We connect businesses with task solvers
          worldwide, offering diverse earning opportunities like data entry,
          surveys, and testing. Join us today and start earning!
        </p>
      </div>
      <div className="pb-10 text-center w-[80%] mx-auto">
        <img
          className="rounded-xl"
          src="https://toka.peerduck.com/wp-content/uploads/2022/03/businesspeople-meeting-office-working-1.png"
          alt=""
        />
      </div>
      <div className="w-[80%] mx-auto py-10">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="w-[90%]">
            <h3 className="text-accent text-xl pb-4 font-bold">Our Mission</h3>
            <h2 className="text-4xl font-bold text-white">
              We are helping people to get a success.
            </h2>
          </div>
          <div className="">
            <p className="text-white py-4 italic">
              At Micro Tasking Earning Platform, we are dedicated to helping
              people achieve success by providing opportunities to earn, grow,
              and thrive. Whether you're looking for extra income, flexible
              work, or new skills, our platform empowers you to take control of
              your financial future. Join us and start your journey to success
              today!
            </p>
          </div>
        </div>
      </div>
      {/* Card section */}
      <div className="w-[80%] mx-auto py-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="">
                <img
                  className="w-20 mx-auto"
                  src="https://toka.peerduck.com/wp-content/uploads/2022/03/cash-back.png"
                  alt=""
                />
              </div>
              <h2 className="font-bold text-2xl text-center py-4">
                Transparency
              </h2>
              <p className="text-center">
                We ensure honesty, fair payments, clear guidelines, and no
                hidden fees for a trustworthy earning experience.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="">
                <img
                  className="w-20 mx-auto"
                  src="https://toka.peerduck.com/wp-content/uploads/2022/03/rating.png"
                  alt=""
                />
              </div>
              <h2 className="font-bold text-2xl text-center py-4">
                Experienced Team
              </h2>
              <p className="text-center">
                Our expert team brings years of experience in technology and
                business, ensuring a seamless, secure, and user-friendly
                micro-tasking platform.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="">
                <img
                  className="w-20 mx-auto"
                  src="https://toka.peerduck.com/wp-content/uploads/2022/03/protection.png"
                  alt=""
                />
              </div>
              <h2 className="font-bold text-2xl text-center py-4">
                Security Guarantee
              </h2>
              <p className="text-center">
                We ensure secure transactions, data protection, and a fraud-free
                environment, keeping your earnings and information safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
