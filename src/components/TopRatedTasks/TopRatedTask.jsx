import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";

const TopRatedTask = ({ ratedTask }) => {
  const { taskImage, title, detail, _id, payment, worker, completionDate } = ratedTask;
  const { user } = useAuth();
  const [role] = useRole();
  const navigate = useNavigate();

  // Format date for modal
  let dateFormatted = "N/A";
  if (completionDate) {
    let date = new Date(completionDate);
    dateFormatted = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }

  const handleViewDetails = (e) => {
    e.preventDefault();

    if (!user) {
      // If not logged in, redirect to details page
      document.getElementById(`task_modal_${_id}`).showModal();
    } else if (role === "Worker") {
      navigate(`/task/${_id}`);
      // If worker, show modal
    } else {
      // For other roles (Buyer, Admin), redirect to details page
      navigate(`/task/${_id}`);
    }
  };

  // Handle dashboard redirect
  const handleDashboardRedirect = () => {
    navigate("/dashboard/taskLists");
  };

  return (
    <div>
      <div className="card shadow-xl">
        <figure>
          <img
            className="h-[250px] object-cover"
            src={taskImage}
            alt="TaskImage"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-[18px]">{title}</h2>
          <p>{detail.slice(0, 40)}...</p>
          <div className="card-actions justify-start">
            <button
              onClick={handleViewDetails}
              className="btn bg-[#00d7c0] hover:bg-[#00d7c0] text-white border-none"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Task Details Modal for Workers */}
      <dialog id={`task_modal_${_id}`} className="modal">
        <form method="dialog" className="modal-box max-w-3xl">
          <h3 className="font-bold text-lg text-black">Task Details</h3>
          <div className="py-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3">
                <img
                  className="w-full h-[200px] object-cover rounded-lg"
                  src={taskImage}
                  alt={title}
                />
              </div>
              <div className="md:w-2/3 text-black">
                <h2 className="font-bold text-xl">{title}</h2>
                <p className="py-2">{detail}</p>
                <p className="py-1">
                  <span className="font-bold">Completion Date:</span> {dateFormatted}
                </p>
                <p className="py-1">
                  <span className="font-bold">Required Workers:</span> {worker}
                </p>
                <p className="py-1">
                  <span className="font-bold">Payment:</span> ${payment}.00
                </p>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <button className="btn">Close</button>
            <button
              onClick={handleDashboardRedirect}
              className="btn bg-[#00d7c0] hover:bg-[#00d7c0] text-white border-none"
            >
              Go to Task List
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default TopRatedTask;
