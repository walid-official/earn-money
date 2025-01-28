import React from "react";
const DiamondFacility = () => {
  return (
    <div
    className="bg-no-repeat bg-center "
    style={{
      backgroundImage: `url(https://ninetheme.com/themes/cryptoland/wp-content/uploads/2018/10/data-bg.png)`,
    }}

  >
      <div className="w-11/12 mx-auto">
        <div className="py-20">
          <h2 className="md:text-4xl text-3xl text-white font-bold text-center">
            Diamond Facilities for Your Earning Journey
          </h2>
          <p className="text-center text-white md:w-[50%] mx-auto py-3">
            Unlock premium features designed to enhance your earning experience,
            including instant payouts, diverse income opportunities, and 24/7
            support, all within a secure and user-friendly platform.
          </p>
        </div>
        <div className="lg:flex gap-8 py-10">
          <div className="lg:w-[25%] space-y-4">
            {/* Card 1 */}
            <div className="bg-gradient-to-t from-[#10121d] to-[#24262c] rounded-xl p-10">
              <h2 className="font-bold text-white text-2xl text-center">
                Instant Payouts
              </h2>
              <p className="text-center text-white py-3">
                Receive your earnings quickly with our fast and reliable payout
                system.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-gradient-to-t from-[#10121d] to-[#24262c] rounded-xl p-10">
              <h2 className="font-bold text-white text-2xl text-center">
                Secure Transactions
              </h2>
              <p className="text-center text-white py-3">
                Enjoy peace of mind with our robust security measures for all
                financial activities.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-gradient-to-t from-[#10121d] to-[#24262c] rounded-xl p-10">
              <h2 className="font-bold text-white text-2xl text-center">
                24/7 Support
              </h2>
              <p className="text-center text-white py-3">
                Get assistance anytime with our dedicated customer support team.
              </p>
            </div>
          </div>
          <div className="lg:w-[30%] lg:py-0 py-10 flex justify-center items-center mx-auto">
            <img
              className="w-full"
              src="https://iko-nuxt.netlify.app/assets/img/update/normal/intro_1-1.png"
              alt=""
            />
          </div>
          <div className="lg:w-[25%] space-y-4">
            {/* Card 1 */}
            <div className="bg-gradient-to-t from-[#10121d] to-[#24262c] rounded-xl p-10">
              <h2 className="font-bold text-white text-2xl text-center">
                Diverse Earnings
              </h2>
              <p className="text-center text-white py-3">
                Explore various earning options to suit your skills and
                preferences
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-gradient-to-t from-[#10121d] to-[#24262c] rounded-xl p-10">
              <h2 className="font-bold text-white text-2xl text-center">
                Flexible Opportunities
              </h2>
              <p className="text-center text-white py-3">
                Choose from a range of tasks and projects that fit your schedule
                and lifestyle.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-gradient-to-t from-[#10121d] to-[#24262c] rounded-xl p-10">
              <h2 className="font-bold text-white text-2xl text-center">
                Learning Resources
              </h2>
              <p className="text-center text-white py-3">
                Connect with like-minded individuals to share tips, advice, and
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondFacility;
