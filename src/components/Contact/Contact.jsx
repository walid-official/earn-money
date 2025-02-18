import React from "react";

const Contact = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center pt-10">
        <h3 className="text-accent text-xl font-bold">Get In Touch</h3>
        <h2 className="text-5xl font-bold text-white pt-3">
          Contact information
        </h2>
        <p className="text-white py-4 w-[30%] mx-auto">
          Our company was founded in 2020. We work daily to become better and we
          are ready to share best practices.
        </p>
      </div>
      <div className="pb-10 text-center">
        <div className="w-11/12 mx-auto py-14">
          <div className="lg:flex gap-4 bg-white p-10 rounded-xl">
            <div className="lg:w-[50%]">
              <div className="">
                <img
                  className="rounded-xl w-full  object-cover"
                  src="https://img.freepik.com/premium-photo/there-is-envelope-with-phone-attached-email-address_444198-43783.jpg?ga=GA1.1.2036279539.1736789910&semt=ais_hybrid"
                  alt=""
                />
              </div>
            </div>
            <div className="lg:w-[50%] flex items-center">
              <div className="card w-full shadow-2xl ">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black">Name</span>
                    </label>
                    <input
                      type="name"
                      placeholder="Name"
                      name="from_name"
                      className="border  p-4 rounded-md"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black">Email</span>
                    </label>
                    <input
                      type="email"
                      name="from_name"
                      placeholder="Email"
                      className="border  p-4 rounded-md"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black">Message</span>
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Message"
                      className="border  p-6 pb-14 rounded-md"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="md:w-[40%] bg-accent font-bold text-white px-10 py-4 rounded-full shadow-lg border">
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
