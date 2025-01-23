import React, { useState } from "react";

const MyTaskTable = ({ myTask, handleUpdate, handleDelete }) => {
  const {
    _id,
    taskImage,
    title,
    detail,
    worker,
    totalPayment,
    PaymentCoin,
    submissionImage,
    completionDate,
  } = myTask || {};

  console.log(completionDate);

  const perWorker = totalPayment / worker;

  let date = new Date(completionDate);
  /* Date format you have */
  let dateMDY = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  console.log(dateMDY);
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={taskImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>
      <td>{detail.slice(0, 10)}..</td>
      <td>{dateMDY}</td>
      <td>{worker}</td>
      <td>{perWorker}$</td>
      <td>{PaymentCoin}</td>
      <td>
        <div className="">
          <img
            className="h-14 w-14 rounded-full object-cover"
            src={submissionImage}
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </td>
      <td>{totalPayment}$</td>
      <th>
        <button
          onClick={() => handleUpdate(_id)}
          className="py-2 px-4 rounded-xl"
        >
          Update
        </button>
      </th>
      <th>
        <button
          onClick={() => handleDelete(_id, PaymentCoin)}
          className="py-2 px-4 rounded-xl"
        >
          delete
        </button>
      </th>
    </tr>
  );
};

export default MyTaskTable;
