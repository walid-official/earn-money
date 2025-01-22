import React from "react";
import ApprovedSubmissionTable from "./ApprovedSubmissionTable";

const ApprovedSubmissions = ({ totalApprovedData }) => {
    
  return (
    <div>
      {/* <div className="py-14">
        <h2 className="font-bold text-center text-3xl">Approval Submission</h2>
        <p className="text-center w-[45%] mx-auto py-3">
          Review and manage pending submissions awaiting approval. This feature
          allows you to evaluate, approve, or reject submissions to ensure
          quality and compliance with guidelines.
        </p>
      </div> */}
      <div className="w-[80%] mx-auto pb-20">
        <div className="overflow-x-auto">
          <table className="table text-white">
            {/* head */}
            <thead>
              <tr className="text-white">
                <th>task_title</th>
                <th>payable_amount</th>
                <th>Buyer_name</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {totalApprovedData.map((approved, index) => (
                <ApprovedSubmissionTable
                  key={index}
                  approved={approved}
                ></ApprovedSubmissionTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApprovedSubmissions;
