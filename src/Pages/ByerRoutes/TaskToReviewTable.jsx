import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const TaskToReviewTable = ({ taskReview, handleTaskReviewModal, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const {
    task_title,
    _id,
    task_id,
    status,
    payable_amount,
    worker_detail,
    buyer_detail,
    PaymentCoin,
  } = taskReview || {};

  const handleReviewStatus = async (status, id, title, worker, paymentCoin,buyer,route) => {
    console.log(status);
    const date = new Date()
    const notificationObj = {
      status,
      message: `you have earned ${paymentCoin} coin from ${buyer?.name} for completing ${title}
`,
      email: worker?.email,
      actionRoute: route,
      time: date
    };

    console.log(notificationObj);

    console.log(PaymentCoin);
    const approvedCoin = {
      PaymentCoin: PaymentCoin,
      workerEmail: worker_detail?.email,
    };
    if (status === "Approve") {
      try{
        const {data} = await axiosSecure.post("notifications",notificationObj);
        console.log(data);
        toast.success("successfully Added Notification")
      }catch(err){
        console.log(err);
      }
      try {
        const { data } = await axiosSecure.patch("/paymentCoin", {
          approvedCoin,
        });
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    const reviewInfo = {
      status: status,
      taskId: task_id,
    };
    try {
      const { data } = await axiosSecure.patch(`submissionStatus/${id}`, {
        reviewInfo,
      });
      console.log(data);
      toast.success("Successfully Updated Status");
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

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
      <td>{payable_amount}.00$</td>
      <td>{status}</td>
      <th>
        <button
          onClick={() => handleTaskReviewModal(taskReview)}
          className="py-2 px-4 rounded-xl"
        >
          Detail
        </button>
      </th>
      <th>
        <button
          onClick={() =>
            handleReviewStatus(
              "Approve",
              _id,
              task_title,
              worker_detail,
              PaymentCoin,
              buyer_detail,
              "/dashboard/mySubmission"
            )
          }
        >
          Approve
        </button>
      </th>
      <th>
        <button onClick={() => handleReviewStatus("Reject", _id)}>
          Reject
        </button>
      </th>
    </tr>
  );
};

export default TaskToReviewTable;
