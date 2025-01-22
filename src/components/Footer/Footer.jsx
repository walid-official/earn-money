import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-[#10121d] to-[#10121d] py-16 px-10">
      <div className="w-11/12 mx-auto lg:flex justify-between ">
        <div className="">
          <h2 className="font-bold text-4xl text-white">Earnify</h2>
          <p className="text-white py-3">
            Your gateway to earning <br /> more through freelancing and
            investing.
          </p>
          <div className="flex pt-4 gap-4 text-white">
            <div className="">
              <a href="" className="text-xl">
                <FaLinkedinIn></FaLinkedinIn>
              </a>
            </div>
            <div className="">
              <a href="" className="text-xl">
                <FaXTwitter></FaXTwitter>
              </a>
            </div>
            <div className="">
              <a href="" className="text-xl">
                {" "}
                <RiGithubLine></RiGithubLine>
              </a>
            </div>
          </div>
        </div>

        <nav>
          <h6 className="text-xl text-slate-600 font-bold pb-3">Services</h6>
          <a className="link link-hover block text-white">Branding</a>
          <a className="link link-hover block text-white">Design</a>
          <a className="link link-hover block text-white">Marketing</a>
          <a className="link link-hover block text-white">Advertisement</a>
        </nav>
        <nav>
          <h6 className="text-xl text-slate-600 font-bold pb-3">Company</h6>
          <a className="link link-hover block text-white">About us</a>
          <a className="link link-hover block text-white">Contact</a>
          <a className="link link-hover block text-white">Jobs</a>
          <a className="link link-hover block text-white">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-xl text-slate-600 font-bold pb-3">Legal</h6>
          <a className="link link-hover block text-white">Terms of use</a>
          <a className="link link-hover block text-white">Privacy policy</a>
          <a className="link link-hover block text-white">Cookie policy</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
