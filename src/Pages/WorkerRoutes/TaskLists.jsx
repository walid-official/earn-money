import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import TaskList from './TaskList';

const TaskLists = () => {
const axiosSecure = useAxiosSecure()
    const { data: postedTasks = [], isLoading,refetch } = useQuery({
        queryKey: ["myTasks"],
        queryFn: async () => {
          const { data } = await axiosSecure.get(`postedTasks`);
          console.log(data);
          return data;
        },
      });

console.log(postedTasks);


    return (
        <div>
            {
                postedTasks.map((postedTask,index) => <TaskList key={index} postedTask={postedTask}></TaskList>)
            }
        </div>
    );
};

export default TaskLists;