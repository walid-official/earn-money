import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import TopRatedTask from "./TopRatedTask";

const TopRatedTasks = () => {
  const {
    data: topTasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["TopTasks"],
    queryFn: async () => {
      const { data } = await axios.get(`https://earn-money-platform-server.vercel.app/homePostedTasks`);
      console.log(data);
      return data;
    },
  });
  console.log(topTasks);
  return (
    <div className="w-[90%] mx-auto">
      <div className="pt-10">
        <h2 className="font-bold text-4xl text-center">Top Rated Tasks</h2>
        <p className="text-center md:w-[45%] mx-auto py-3">
        Highlight and manage your most important tasks with ease. TopRatedTasks helps you prioritize what truly matters, ensuring high-impact tasks stay front and center for maximum productivity.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 my-10">
        {topTasks.map((ratedTask, index) => (
          <TopRatedTask key={index} ratedTask={ratedTask}></TopRatedTask>
        ))}
      </div>
    </div>
  );
};

export default TopRatedTasks;
