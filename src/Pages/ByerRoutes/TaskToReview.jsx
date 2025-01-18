import React, { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TaskToReviewTable from "./TaskToReviewTable";
import TaskReviewDetailsModal from "./TaskReviewDetailsModal";

const TaskToReview = () => {
  const axiosSecure = useAxiosSecure();
  const [reviewDetail, setReviewDetail] = useState(null);
  const {
    data: tasksReview = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["review-tasks"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`review-tasks`);
      console.log(data);
      return data;
    },
  });

  console.log(tasksReview);

  const handleTaskReviewModal = (reviewDetail) => {
    document.getElementById("my_modal_1").showModal();
    setReviewDetail(reviewDetail);
  };

  return (
    <div className="w-[90%] mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Worker Name</th>
              <th>Task Title</th>
              <th>Payable Amount</th>
              <th>Status</th>
              <th>Submission Detail</th>
              <th>Approval</th>
              <th>Rejection</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tasksReview.map((taskReview, index) => (
              <TaskToReviewTable
              refetch={refetch}
              handleTaskReviewModal={handleTaskReviewModal}
                key={index}
                taskReview={taskReview}
              ></TaskToReviewTable>
            ))}
          </tbody>
        </table>
      </div>
      <div className="">
        <TaskReviewDetailsModal reviewDetail={reviewDetail}></TaskReviewDetailsModal>
      </div>
    </div>
  );
};

export default TaskToReview;
