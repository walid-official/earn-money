import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { myInfoContext } from "../../Layouts/DashBoardLayout";

const Image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${Image_hosting_key}`;

const AddNewTasks = () => {
  const axiosSecure = useAxiosSecure();
  const {refetch} = useContext(myInfoContext)
  const { user } = useAuth();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    data: coinInfo = [],
    isLoading,
    refetch: coinFetch,
  } = useQuery({
    queryKey: ["coinInfo", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`loggedUser/${user?.email}`);
      console.log(data);
      return data;
    },
  });

  console.log(coinInfo);

  const handleAddNewTask = async (data) => {
    console.log(data);
    const taskTitle = data.taskTitle;
    const taskDetail = data.taskDetail;
    const parsePayment = parseInt(data.payableAmount);
    const parseWorker = parseInt(data.requiredWorker);


    console.log(parsePayment);
    console.log(parseWorker);
    const PaymentCoin = (parsePayment * 10) * parseWorker;
    console.log(PaymentCoin);
    const payableAmount = parsePayment * parseWorker;
    console.log(payableAmount);


    // uploading Image On ImageBB Server
    const formData1 = new FormData();
    formData1.append("image", data.submissionInfo[0]);

    const formData2 = new FormData();
    formData2.append("image", data.taskImageUrl[0]);

    try {
      // Upload the first image
      const res1 = await axios.post(image_hosting_api, formData1, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log("First image upload response:", res1.data);

      // Upload the second image
      const res2 = await axios.post(image_hosting_api, formData2, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log("Second image upload response:", res2.data);

      const addTaskInfoData = {
        title: taskTitle,
        detail: taskDetail,
        payment: parsePayment,
        worker: parseWorker,
        totalPayment: payableAmount,
        completionDate: startDate,
        submissionImage: res1.data.data.url,
        taskImage: res2.data.data.url,
        coinId: coinInfo?._id,
        PaymentCoin,
        buyerInfo: {
          name: user?.displayName,
          email: user?.email,
          photo: user?.photoURL,
        },
      };

      if (PaymentCoin > coinInfo?.coin) {
        navigate("/dashboard/purchaseCoin");
        return toast.error("Total Payment Exceeds Your Coin");
      }

      if (parsePayment <= 0 || parseWorker <= 0) {
        return toast.error("Payable amount and required workers must be greater than zero.");
      }
   
      try {
        const { data } = await axiosSecure.post("new-tasks", addTaskInfoData);
        console.log(data);
        toast.success("Successfully Added Your Task");
        coinFetch()
        refetch()
        reset()
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
        <div className="card bg-base-100 lg:w-[45%] md:w-[60%] w-[90%] mx-auto shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(handleAddNewTask)} className="card-body">
            <div className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task Title</span>
                </label>
                <input
                  type="text"
                  {...register("taskTitle", { required: true })}
                  placeholder="Task Title"
                  className="input input-bordered"
                />
                {errors.taskTitle && (
                  <span className="text-red-500">Task Title is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task Detail</span>
                </label>
                <textarea
                  {...register("taskDetail")}
                  placeholder="Task Detail"
                  className="textarea textarea-bordered textarea-md w-full max-w-xl"
                ></textarea>
              </div>

              <div className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Required Workers</span>
                  </label>
                  <input
                    type="number"
                    {...register("requiredWorker", { required: true })}
                    placeholder="Required Workers"
                    className="input input-bordered"
                  />
                  {errors.requiredWorker && (
                    <span className="text-red-500">
                      Required Workers is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Payable Amount (USD: 1$ = 10 coin)</span>
                  </label>
                  <input
                    type="number"
                    {...register("payableAmount", { required: true })}
                    placeholder="Payable Amount (USD)"
                    className="input input-bordered"
                  />
                  {errors.payableAmount && (
                    <span className="text-red-500">
                      Payable Amount is required
                    </span>
                  )}
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Payable Amount</span>
                </label>
                <div className="w-full">
                  <DatePicker
                    className="border py-3 rounded-lg px-3 w-full"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                {errors.payableAmount && (
                  <span className="text-red-500">
                    Payable Amount is required
                  </span>
                )}
              </div>

              <div className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Submission Info</span>
                  </label>
                  <input
                    type="file"
                    {...register("submissionInfo")}
                    className="file-input file-input-bordered w-full max-w-xl"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Task Image URL</span>
                  </label>
                  <input
                    type="file"
                    {...register("taskImageUrl")}
                    className="file-input file-input-bordered w-full max-w-xl"
                  />
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#2b3440] text-white">Add Task</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewTasks;
