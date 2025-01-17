import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const TaskDetails = () => {
    const axiosSecure = useAxiosSecure()
    const {id} = useParams();
    const { data: taskDetail = [], isLoading,refetch } = useQuery({
        queryKey: ["taskDetail"],
        queryFn: async () => {
          const { data } = await axiosSecure.get(`tasks/${id}`);
          console.log(data);
          return data;
        },
      });

      console.log(taskDetail);

    return (
        <div>
            
        </div>
    );
};

export default TaskDetails;