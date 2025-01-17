import React from "react";

const TaskToReviewTable = ({ taskReview,handleTaskReviewModal }) => {
    const {task_title,submission_detail,status,payable_amount,worker_detail} = taskReview || {}
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
        
          <div>
            <div className="font-bold">{worker_detail?.name}</div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>

      <td>{task_title}</td>
      <td>
       {payable_amount}.00$
      </td>
      <td>{status}</td>
      <th>
      <button onClick={() => handleTaskReviewModal(taskReview)} className="py-2 px-4 rounded-xl">Detail</button>
      </th>
      <th>
        
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Action
          </option>
          <option>Approve</option>
          <option>Reject</option>
        </select>
      </th>
    </tr>
  );
};

export default TaskToReviewTable;
