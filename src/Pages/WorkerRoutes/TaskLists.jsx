import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import TaskList from "./TaskList";

const TaskLists = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: postedTasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myTasks"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`postedTasks`);
      console.log(data);
      return data;
    },
  });

  console.log(postedTasks);

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="pb-10">
        <div className="">
          <h2 className="font-bold text-center text-4xl">
            Task Lists Optimization
          </h2>
          <p className="text-center w-[60%] mx-auto py-3">Conduct a comprehensive review of task lists to enhance their structure, usability, and visual design. The goal is to create an intuitive, organized, and efficient task management system that improves user experience.</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-4">
        {postedTasks.map((postedTask, index) => (
          <TaskList key={index} postedTask={postedTask}></TaskList>
        ))}
      </div>
    </div>
  );
};

export default TaskLists;
