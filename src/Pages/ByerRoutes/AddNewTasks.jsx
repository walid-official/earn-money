import React from "react";

const AddNewTasks = () => {
  return (
    <div>
      <div className="py-8">
        <h2 className="text-center font-bold text-4xl py-3">New Task Entry</h2>
        <p className="w-[30%] mx-auto text-center">
          Quickly add new tasks and keep your projects on track with seamless
          organization.
        </p>
      </div>
      <div className="pb-16">
        <div className="card bg-base-100 w-[45%] mx-auto shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task_title</span>
                </label>
                <input
                  type="text"
                  placeholder="Task_Title"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task_detail</span>
                </label>
                <textarea
                  placeholder="Task_detail"
                  className="textarea textarea-bordered textarea-md w-full max-w-xl"
                ></textarea>
              </div>
              <div className="flex gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Required_workers</span>
                  </label>
                  <input
                    type="number"
                    placeholder="required_workers"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Payable_amount</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Payable_amount"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Submission_info</span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xl"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Task_image_url </span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xl"
                  />
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#2b3440] text-white">
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewTasks;
