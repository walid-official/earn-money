import React from "react";

const ApprovedSubmissionTable = ({ approved }) => {
  const { task_title, buyer_detail, PaymentCoin,status } = approved || {};
  return (
    <tr className="">
      <td>{task_title}</td>
      <td>{PaymentCoin} coin</td>
      <td>{buyer_detail?.name}</td>
      <td ><div className="badge badge-accent text-white">{status}</div></td>
    </tr>
  );
};

export default ApprovedSubmissionTable;
