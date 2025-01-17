import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const TaskDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const {
    data: taskDetail = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["taskDetail"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`tasks/${id}`);
      console.log(data);
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );

  console.log(taskDetail);
  const {
    title,
    _id,
    detail,
    payment,
    worker,
    totalPayment,
    completionDate,
    submissionImage,
    taskImage,
    buyerInfo,
  } = taskDetail || {};

  let date = new Date(completionDate);

  // Array of month names
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Format the date
  let dateFormatted = `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;

  console.log(dateFormatted); // Output: January 28, 2025

  return (
    <div className="w-[90%] mx-auto">
      <div className="py-8">
        <h2 className="font-bold text-center text-3xl">
          Maximize Your Earnings: A Comprehensive Guide
        </h2>
        <p className="py-3 text-center">
          Discover effective strategies and practical tips to boost your income
          through various methods, including online opportunities, investment
          strategies, and side hustles.
        </p>
      </div>
      <div className="flex gap-4">
        <div className="card mb-10 shadow-xl duration-500 w-[60%]">
          <figure>
            <img
              className="w-full h-[350px] object-cover"
              src={taskImage}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="">
              <h2 className="font-bold text-xl">{title}</h2>
              <p className="py-2">{detail}</p>
              <p className="py-2">
                {" "}
                <span className="font-bold text-xl mr-2">
                  Completion-Date:
                </span>{" "}
                {dateFormatted}
              </p>
              <p className="py-2">
                {" "}
                <span className="font-bold text-xl">
                  Required-Workers:
                </span>{" "}
                <span className="btn ml-2">{worker}</span>{" "}
              </p>
              <p className="py-2 border-b pb-6">
                {" "}
                <span className="font-bold text-xl">Payment:</span>{" "}
                <span className="btn ml-2">{payment}.00$</span>{" "}
              </p>
            </div>

            <div className="flex justify-between">
              <div className="">
                <h2 className="font-bold my-2">{buyerInfo?.name}</h2>
                <div className="">
                  <img
                    className="w-14 h-14 rounded-full"
                    src={buyerInfo?.photo}
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <h2 className="font-bold my-2">Total-Payment</h2>
                <div className="">
                  <p className="py-2">
                    <span className="btn">{totalPayment}.00$</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] mb-10 shadow-xl">
          <div className="">
            <img className="" src={submissionImage} alt="" />
          </div>

          <div className="p-5">
            <div className="">
              <h2 className="font-bold text-xl ">
                Tailored Professional Services
              </h2>
              <p className="py-2">
                Providing a wide range of expert services designed to help you
                achieve your goals efficiently and effectively.
              </p>
              <p className="py-2">
                From web development and content creation to graphic design and
                digital marketing, I offer customized solutions that meet your
                unique requirements.
              </p>
              <p className="py-2">
                Let’s collaborate to bring your vision to life and deliver
                outstanding results.
              </p>
            </div>
            <div className="py-5">
              <textarea
                placeholder="Submission_Details"
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              ></textarea>
              <div className="mt-2">
                <button className="btn bg-accent text-white task">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
