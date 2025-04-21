import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Faq = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <div className={`w-11/12 mx-auto p-8 rounded-lg  ${
        theme === "light"
          ? "bg-[#eaeaea] text-black"
          : "bg-gradient-to-t from-[#27292f] to-[#10121d] text-white"
      }`}>
        <div>
            <div className='py-6'>
                <h2 className="text-4xl font-bold text-center">Frequently Asked Questions</h2>
                <p className="text-center  md:w-[50%] mx-auto py-3">
                Find answers to common questions about our platform and services.</p>
            </div>
        </div>
            <div className={`collapse collapse-plus bg-base-100 border border-base-300 ${
        theme === "light"
          ? "bg-[#eaeaea] text-black"
          : "bg-gradient-to-t from-[#27292f] to-[#10121d] text-white"
      }`}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">How Can I Earn Money As A Worker?</div>
            <div className="collapse-content text-sm">First of All Sign Up as a Worker.Then go to your dashboard and click on tasks list and bit your task as an instruction given. if your task is approved then you will get your coin as a payment then you can convert it to USD. so let's get started</div>
            </div>
            <div className={`collapse collapse-plus bg-base-100 border my-4 border-base-300 ${
        theme === "light"
          ? "bg-[#eaeaea] text-black"
          : "bg-gradient-to-t from-[#27292f] to-[#10121d] text-white"
      }`}>
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">How can I get my task done as a buyer?</div>
            <div className="collapse-content text-sm"> First of All Sign Up as a Buyer.Then go to your dashboard and click on add new task and add your task as an instruction given. and after that as a worker will bit your task and if all okey then approve the task. so let's get started</div>
            </div>
            <div className={`collapse collapse-plus bg-base-100 border border-base-300 ${
                 theme === "light"
                ? "bg-[#eaeaea] text-black"
                : "bg-gradient-to-t from-[#27292f] to-[#10121d] text-white"
            }`}>
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">How can I get more coin for post as a Buyer ?</div>
            <div className="collapse-content text-sm">Go to Purchase Coin and purchase your coin as an instruction given.</div>
            </div>
            <div className={`collapse collapse-plus bg-base-100 border border-base-300 ${
                 theme === "light"
                ? "bg-[#eaeaea] text-black"
                : "bg-gradient-to-t from-[#27292f] to-[#10121d] text-white"
            }`}>
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">How can I Withdraw my Payment ?</div>
            <div className="collapse-content text-sm">As a worker go to your dashboard and click on Withdrawals and fill up the form and submit it.</div>
            </div>
        </div>
    );
};

export default Faq;