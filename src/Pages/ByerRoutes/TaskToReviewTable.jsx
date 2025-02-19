import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const TaskToReviewTable = ({ taskReview, handleTaskReviewModal, refetch,workerRefetch }) => {
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

  const singlePaymentCoin = PaymentCoin / payable_amount;

  const handleReviewStatus = async (status, id, title, worker, paymentCoin,buyer,route) => {
    console.log(status);
    const date = new Date()
    let message;
  
    // Determine message based on status
    if (status === "Reject") {
      message = "Sorry, You Are Rejected";
    } else if (status === "Approve") {
      message = `You have earned ${paymentCoin} coin from ${buyer?.name} for completing ${title}`;
    }

    const notificationObj = {
      status,
      message,
      email: worker?.email,
      actionRoute: route,
      time: date
    };

    console.log(notificationObj);

    console.log(PaymentCoin);
    if (status === "Approve") {
      try {
        const { data } = await axiosSecure.post("/notifications", notificationObj);
        console.log(data);
        toast.success("Successfully added notification");
      } catch (err) {
        console.log(err);
      }
      
      const approvedCoin = {
        PaymentCoin: paymentCoin,
        workerEmail: worker?.email,
      };
  
      try {
        const { data } = await axiosSecure.patch("/paymentCoin", { approvedCoin });
        console.log(data);
        workerRefetch()
      } catch (err) {
        console.log(err);
      }
    } else if (status === "Reject") {
      try {
        const { data } = await axiosSecure.post("/notifications", notificationObj);
        console.log(data);
        toast.warning("Notification for rejection added");
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
      workerRefetch()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr className="">
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
              singlePaymentCoin,
              buyer_detail,
              "/dashboard/mySubmission"
            )
          }
        >
          Approve
        </button>
      </th>
      <th>
        <button onClick={() => handleReviewStatus("Reject", _id, task_title,
              worker_detail,
              singlePaymentCoin,
              buyer_detail,
              "/dashboard/mySubmission")}>
          Reject
        </button>
      </th>
    </tr>
  );
};

export default TaskToReviewTable;
