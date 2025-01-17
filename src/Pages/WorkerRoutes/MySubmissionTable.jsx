import React from "react";

const MySubmissionTable = ({ mySubmit }) => {
  console.log(mySubmit);
  const {
    task_title,
    submission_detail,
    status,
    current_date,
    payable_amount,
    buyer_detail,
  } = mySubmit || {};

  let date = new Date(current_date);
  /* Date format you have */
  let dateMDY = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  console.log(dateMDY);

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{task_title}</div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>
      <td>{submission_detail.slice(0, 20)}..</td>
      <td>{dateMDY}</td>
      <td>{payable_amount}.00$</td>
      <td> <div className="badge badge-accent text-white">{status}</div></td>

      <th>{buyer_detail.name}</th>
      <th>{buyer_detail.email}</th>
    </tr>
  );
};

export default MySubmissionTable;
