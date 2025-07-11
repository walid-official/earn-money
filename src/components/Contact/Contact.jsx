import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="w-11/12 mx-auto pt-24">
      <div className=" text-center">
        <div className="">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-12 lg:p-10 p-5 rounded-xl">
            <div className="text-left flex items-center">
              <div>
                <h4 className="text-xl font-bold">Contact Us</h4>
                <h2 className="text-4xl font-bold pt-2.5 pb-6">
                  Are you interested in online Earning? Contact us
                </h2>
                <p>
                Explore a range of online earning opportunities through Earnify and start building your income from the comfort of your home. Whether you're a student, freelancer, or looking for side gigs, we connect you with real tasks that match your skills. Join now and let us guide you toward flexible, reliable ways to earn online. Reach out today to get started!
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

            <div>

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
    </div>
  );
};
export default Contact;
