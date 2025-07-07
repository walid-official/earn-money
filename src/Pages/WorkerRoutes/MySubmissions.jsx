import React, { useContext, useState } from "react";
import MySubmissionTable from "./MySubmissionTable";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import "./Pagination.css";
import { ThemeContext } from "../../context/ThemeContext";
const MySubmissions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(0);
  const { theme } = useContext(ThemeContext);
  const itemsPerPage = 6;

  const {
    data: { result: mySubmissions = [], total = 0 } = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["mySubmission", user?.email, currentPage, itemsPerPage],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `api/worker/submissions/${user?.email}?page=${currentPage}&size=${itemsPerPage}`
      );
      console.log(data);
      return data;
    },
  });
  //

  console.log(mySubmissions);

  const numberOfPages = Math.ceil(total / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  console.log(pages);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div
    className={`min-h-screen ${
      theme === "light"
        ? "bg-[#f9fafc] text-black"
        : "dark:bg-black dark:text-white"
    }`}
    >
      <div className="w-[90%] mx-auto">
        <div className="py-8">
          <h2 className="font-bold text-3xl md:text-4xl text-center">
            My Submission
          </h2>
          <p className="md:w-[50%] mx-auto py-3 text-center">
            Stay informed about the status of your submissions. Receive timely
            notifications for every task submitted, reviewed, or approved,
            keeping you connected with your workflow.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr
                className={` ${
                  theme === "light" ? " text-black" : " dark:text-white"
                }`}
              >
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
        <div className="flex justify-center py-10">
          <button onClick={handlePrev} className="btn mr-2">
            Prev
          </button>
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={`btn mx-2 px-6 ${
                currentPage === page ? "selected" : ""
              }`}
            >
              {page + 1}
            </button>
          ))}
          <button onClick={handleNext} className="btn ml-2">
            Next
          </button>
          {/* <select onChange={handleItemsPerPage} name="" id="">
          <option value="select">Select</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select> */}
        </div>
      </div>
    </div>
  );
};

export default MySubmissions;
