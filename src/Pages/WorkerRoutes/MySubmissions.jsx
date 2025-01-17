import React from "react";
import MySubmissionTable from "./MySubmissionTable";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const MySubmissions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: mySubmissions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["mySubmission", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`mySubmissions/${user?.email}`);
      console.log(data);
      return data;
    },
  });

  console.log(mySubmissions);

  return (
    <div className="w-[90%] mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Detail</th>
              <th>Date</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Buyer Name</th>
              <th>Buyer Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {mySubmissions.map((mySubmit, index) => (
              <MySubmissionTable
                key={index}
                mySubmit={mySubmit}
              ></MySubmissionTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySubmissions;
