import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const Withdrawals = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [withdrawCoin, setWithDrawCoin] = useState(null);
  const [convertedUsd, setConvertedUsd] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const {
    data: amountInfo = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["amountCoin", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`loggedUser/${user?.email}`);
      console.log(data);

      return data;
    },
  });

  const handleWithdrawCoin = (e) => {
    const withdrawCoin = parseInt(e.target.value);
    setWithDrawCoin(withdrawCoin);
    setConvertedUsd(withdrawCoin / 20);
  };

  const handleWithdrawSubmit = async (data) => {
    console.log(data);

    console.log(withdrawCoin);
    // Perform withdrawal logic
    const date = new Date();

    if(amountInfo?.coin < withdrawCoin){
        return toast.error("Withdrawal coin exceeds Your total coin")
    }

    const WithdrawalInfo = {
      ...data,
      withdrawCoin: withdrawCoin,
      convertedUsd: convertedUsd,
      name: amountInfo.name,
      email: amountInfo.email,
      withdrawalDate: date,
      status: "pending",
    };
    console.log(WithdrawalInfo);
    try{
        const {data} = await axiosSecure.post(`withdrawals/${user?.email}`,WithdrawalInfo);
        console.log(data);
        toast.success("Withdraw Request is Successful!!!")
        reset()
        refetch()
        setConvertedUsd(null)
    }catch(err){
        console.log(err);
    }
  };

  return (
    <div>
      <div className="py-8">
        <h2 className="text-center font-bold text-4xl py-3">
          Effortless Withdrawals Hub
        </h2>
        <p className="w-[40%] mx-auto text-center">
          Effortless Withdrawals Hub offers fast and secure financial withdrawal
          services, ensuring smooth and reliable transactions for all users.
        </p>

        <h2 className="font-bold text-3xl text-center py-4 mt-6">
          Your Total Earning: {amountInfo.coin / 20}.00$
        </h2>
      </div>
      <div className="w-[50%] mx-auto pb-20">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form
            onSubmit={handleSubmit(handleWithdrawSubmit)}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Coin To Withdraw</span>
              </label>
              <input
                type="number"
                // {...register("coin")}
                onChange={handleWithdrawCoin}
                placeholder="Coin To Withdraw"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Withdraw amount</span>
              </label>
              <input
                type="number"
                defaultValue={convertedUsd}
                placeholder="Withdraw amount"
                className="input input-bordered"
                required
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Account Number</span>
              </label>
              <input
                type="number"
                {...register("accountNumber")}
                placeholder="Account Number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Payment Method</span>
              </label>
              <select
                {...register("paymentMethod")}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Select Payment Method
                </option>
                <option value="bkash">bkash</option>
                <option value="Nagad">Nagad</option>
                <option value="Rocket">Rocket</option>
              </select>
            </div>
            <div className="form-control mt-6">
              {amountInfo.coin <= 200 ? (
                <h2 className="text-red-500 font-bold text-xl text-center">
                  Insufficient coin
                </h2>
              ) : (
                <button className="btn bg-accent hover:bg-accent text-white font-bold">
                  Withdraw
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Withdrawals;
