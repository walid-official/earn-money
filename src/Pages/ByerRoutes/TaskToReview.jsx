import React, { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TaskToReviewTable from "./TaskToReviewTable";
import TaskReviewDetailsModal from "./TaskReviewDetailsModal";
import useAuth from "../../Hooks/useAuth";

const TaskToReview = ({workerRefetch}) => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
  const [reviewDetail, setReviewDetail] = useState(null);
  const {
    data: tasksReview = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["review-tasks",user],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`api/worker/review/${user?.email}`);
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
    <div className="mb-20">
       <div className="pb-10">
        <h2 className="text-center font-bold text-4xl py-3">
          Task To Review
        </h2>
        
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr >
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
              workerRefetch={workerRefetch}
              handleTaskReviewModal={handleTaskReviewModal}
                key={index}
                taskReview={taskReview}
              ></TaskToReviewTable>
            ))}
          </tbody>
        </table>
      </div>
      <div className="">
        <TaskReviewDetailsModal  reviewDetail={reviewDetail}></TaskReviewDetailsModal>
      </div>
    </div>
  );
};

export default TaskToReview;
