import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import TaskList from "./TaskList";
import useAuth from "../../Hooks/useAuth";
import { ThemeContext } from "../../context/ThemeContext";

const TaskLists = () => {
  const { theme } = useContext(ThemeContext);
  const axiosSecure = useAxiosSecure();
  const [sortOrder, setSortOrder] = useState("");
  const { user } = useAuth();
  const {
    data: postedTasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["postedTasks",sortOrder],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`postedTasks?sort=${sortOrder}`);
      console.log(data);
      return data;
    },
  });

  console.log(postedTasks);
  console.log(sortOrder);

  return (
    <div
      className={`min-h-screen ${
        theme === "light"
          ? "bg-white text-black"
          : "dark:bg-black dark:text-white"
      }`}
    >
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
          <div className="">
            <select onChange={(e) => setSortOrder(e.target.value)} className="select select-bordered text-black">
              <option disabled selected>
                Sort By Price
              </option>
              <option>Low to heigh</option>
              <option>Heigh to low</option>
            </select>
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
