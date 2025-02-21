import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

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
        <div>
            
        </div>
    );
};

export default TopRatedTasks;