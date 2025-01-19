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

  const itemsPerPage = 6;


  const numberOfPages = Math.ceil(mySubmissions.length / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  console.log(pages);


  return (
    <div className="w-[90%] mx-auto">
      <div className="py-8">
        <h2 className="font-bold text-4xl text-center">My Submission</h2>
        <p className="w-[50%] mx-auto py-3 text-center">Stay informed about the status of your submissions. Receive timely notifications for every task submitted, reviewed, or approved, keeping you connected with your workflow.</p>
      </div>
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
