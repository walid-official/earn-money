import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";

const Image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${Image_hosting_key}`;
const UpdateModal = ({ singleTask,refetch }) => {
  console.log(singleTask);
  const axiosSecure = useAxiosSecure();
  const { _id, title, detail,submissionImage } = singleTask || {};

  const handleUpdateTask = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const detail = form.detail.value;
    const fileInput = form.file;
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(image_hosting_api, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log("First image upload response:", res.data);
      const submissionImage = res.data.data.url;
      refetch()
      const updateTask = {
        title,
        detail,
        submissionImage,
      };
      try {
        const { data } = await axiosSecure.patch(`taskUpdate/${_id}`, updateTask);
        console.log(data);
       
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleUpdateTask} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  defaultValue={title}
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task Detail</span>
                </label>

                <input
                  defaultValue={detail}
                  type="text"
                  placeholder="Task Detail"
                  name="detail"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Submission Info</span>
                </label>
                <input
                  type="file"
                  name="file"
                  className="file-input file-input-bordered w-full max-w-xl"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-accent font-bold text-white">
                  Update
                </button>
              </div>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateModal;
