import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import TaskList from "./TaskList";
import useAuth from "../../Hooks/useAuth";
import { ThemeContext } from "../../context/ThemeContext";

const TaskLists = () => {
  const {theme} = useContext(ThemeContext)
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: postedTasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["postedTasks"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`postedTasks`);
      console.log(data);
      return data;
    },
  });

  console.log(postedTasks);

  return (
    <div  className={`min-h-screen ${
      theme === "light"
        ? "backdrop-blur-xl bg-gradient-to-r from-[#a5a5a5] to-[#f3f3f3] text-black"
        : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
    }`}>
      <div className="w-11/12 mx-auto py-10">
        <div className="pb-10">
          <div className="">
            <h2 className="font-bold text-center text-4xl">
              Task Lists Optimization
            </h2>
            <p className="text-center w-[60%] mx-auto py-3">
              Conduct a comprehensive review of task lists to enhance their
              structure, usability, and visual design. The goal is to create an
              intuitive, organized, and efficient task management system that
              improves user experience.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-4">
          {postedTasks.map((postedTask, index) => (
            <TaskList key={index} postedTask={postedTask}></TaskList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskLists;
