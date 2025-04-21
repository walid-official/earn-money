import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="w-11/12 mx-auto pt-24">
      <div className=" text-center">
        <div className="w-11/12 mx-auto pt-14">
          <div className="grid lg:grid-cols-2 gap-12 p-10 rounded-xl">
            <div className="text-left flex items-center">
              <div>
                <h4 className="text-xl font-bold">Contact Us</h4>
                <h2 className="text-4xl font-bold pt-2.5 pb-6">
                  Are you interested in online scholarship? Contact us
                </h2>
                <p>
                  Discover a variety of online scholarship opportunities
                  designed to help you achieve your academic goals. Whether
                  you’re pursuing undergraduate, graduate, or specialized
                  programs, we’re here to guide you through the process and
                  provide the support you need to apply. Reach out today for
                  more information and expert assistance!
                </p>

                <div className="pt-12">
                  <img
                    src="https://edify-official.vercel.app/assets/sign.svg"
                    alt=""
                  />
                </div>
                <h2 className="font-bold text-xl pb-1.5">Brayden Backham</h2>
                <p>DIRECTOR</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="card bg-white w-full shadow-2xl ">
                <form className="card-body py-16">
                  <div
                  
                  >
                    <h2 className="text-4xl font-bold text-left text-black">
                      Fill out for contact
                    </h2>
                    <p className="text-left pb-5 text-black">
                      We are here to help with any questions or details you
                      need. Reach out today!
                    </p>
                  </div>
                  <div className="form-control pb-2">
                    <input
                      type="name"
                      placeholder="Name"
                      name="from_name"
                      className="border  p-4 rounded-md"
                      required
                    />
                  </div>
                  <div className="form-control  pb-2">
                    <input
                      type="email"
                      name="from_name"
                      placeholder="Email"
                      className="border  p-4 rounded-md"
                      required
                    />
                  </div>
                  <div className="form-control  pb-2">
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Message"
                      className="border  p-6 pb-14 rounded-md"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="md:w-[45%] bg-accent font-bold text-white px-10 py-4 rounded-xl shadow-lg border">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
