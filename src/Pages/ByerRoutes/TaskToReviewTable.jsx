import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const TaskToReviewTable = ({ taskReview,handleTaskReviewModal,refetch }) => {
    const axiosSecure = useAxiosSecure();
    const {task_title,_id,status,payable_amount,worker_detail} = taskReview || {}

    const handleReviewStatus = async (e,id) => {
        const status = e.target.value;
        console.log(status);

        try{
            const {data} = await axiosSecure.patch(`submissionStatus/${id}`,{status})
            console.log(data);
            toast.success("Successfully Updated Status")
            refetch()
        }catch(err){
            console.log(err);
        }

    }

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
        
        <select onChange={(e)=>handleReviewStatus(e,_id)} className="select select-bordered w-full max-w-xs">
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
