import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Worker from "./Worker";

const TopWorkers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: TopWorkers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["TopWorkers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`users/worker`);
      console.log(data);
      return data;
    },
  });

  console.log(TopWorkers);

  return (
    <div className="w-11/12 mx-auto pb-16">
      <div className="py-10 text-white">
        <h2 className="font-bold text-4xl text-center">Top Achieving Workers</h2>
        <p className="text-center md:w-[45%] mx-auto py-3">
          Discover our dedicated professionals who excel in their fields. From
          innovative blockchain architects to inspiring CEOs, our top workers
          are here to deliver excellence and drive success.
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 w-[90%] mx-auto">
        {
            TopWorkers.map((TopWorker,index) => <Worker key={index} TopWorker={TopWorker} ></Worker>)
        }
      </div>
    </div>
  );
};

export default TopWorkers;
