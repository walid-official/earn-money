import React from "react";

const WithdrawalRequestTable = ({ requests,handleApproval }) => {
  const {
    accountNumber,
    _id,
    name,
    email,
    paymentMethod,
    convertedUsd,
    withdrawCoin,
    withdrawalDate,
    status
  } = requests || {};

  let date = new Date(withdrawalDate);
  /* Date format you have */
  let dateMDY = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  console.log(dateMDY);



  return (
    <tr className="text-white">
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{withdrawCoin}</td>
      <td>{convertedUsd}$</td>
      <td>
        {" "}
        <div className="badge badge-accent text-white">{status}</div>
      </td>

      <td>{accountNumber}</td>
      <td>{paymentMethod}</td>
      <td>{dateMDY}</td>
      <td>
        <button onClick={() => handleApproval("Approved",withdrawCoin,email,convertedUsd,"/dashboard/withdrawals",_id)} className="bg-slate-700 rounded-full text-white px-4 py-2">
          Payment
        </button>
      </td>
    </tr>
  );
};

export default WithdrawalRequestTable;
