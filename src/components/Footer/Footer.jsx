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
              <a
                href="www.linkedin.com/in/walidhasan87"
                target="_blank"
                className="text-xl"
              >
                <FaLinkedinIn></FaLinkedinIn>
              </a>
            </div>
            <div className="">
              <a href="https://x.com/WalidHasan17083" target="_blank" className="text-xl">
                <FaXTwitter></FaXTwitter>
              </a>
            </div>
            <div className="">
              <a href="https://github.com/walid-official" target="_blank" className="text-xl">
                {" "}
                <RiGithubLine></RiGithubLine>
              </a>
            </div>
          </div>
        </div>

        <nav>
          <h6 className="text-xl text-white font-bold pb-3">Services</h6>
          <a href="https://www.brandingmag.com/2015/10/14/what-is-branding-and-why-is-it-important-for-your-business/" target="_blank" className="link link-hover block text-white">Branding</a>
          <a href="https://www.design.com/" target="_blank" className="link link-hover block text-white">Design</a>
          <a href="https://dictionary.cambridge.org/dictionary/norwegian-english/markering" target="_blank" className="link link-hover block text-white">Marketing</a>
          <a href="https://dictionary.cambridge.org/dictionary/english/advertisement" target="_blank" className="link link-hover block text-white">Advertisement</a>
        </nav>
        <nav>
          <h6 className="text-xl text-white font-bold pb-3">Company</h6>
          <a href="https://bloggers.feedspot.com/coin_blogs/" target="_blank" className="link link-hover block text-white">About us</a>
          <a href="https://bloggers.feedspot.com/coin_blogs/" target="_blank" className="link link-hover block text-white">Contact</a>
          <a href="https://wordpress.org/plugins/contact-form-7/" target="_blank" className="link link-hover block text-white">Jobs</a>
          <a   href="https://www.shopify.com/blog/44447941-how-to-create-a-press-kit-that-gets-publicity-for-your-business" target="_blank" className="link link-hover block text-white">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-xl text-white font-bold pb-3">Legal</h6>
          <a  href="https://termly.io/resources/templates/terms-of-use-template/" target="_blank" className="link link-hover block text-white">Terms of use</a>
          <a  href="https://policies.google.com/privacy?hl=en-US" target="_blank" className="link link-hover block text-white">Privacy policy</a>
          <a  href="https://www.cookiebot.com/en/cookie-policy/" target="_blank" className="link link-hover block text-white">Cookie policy</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
