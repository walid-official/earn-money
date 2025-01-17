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
    <div className="w-11/12 mx-auto py-20">
      <div className="grid grid-cols-3 gap-4">
        {postedTasks.map((postedTask, index) => (
          <TaskList key={index} postedTask={postedTask}></TaskList>
        ))}
      </div>
    </div>
  );
};

export default TaskLists;
