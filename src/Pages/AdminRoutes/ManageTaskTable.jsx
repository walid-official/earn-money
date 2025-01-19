import React from 'react';

const ManageTaskTable = () => {
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
        <td>{detail.slice(0, 20)}..</td>
        <td>{dateMDY}</td>
        <td>{worker}</td>
        <td>
          <div className="">
            <img
              className="h-14 w-14 rounded-full object-cover"
              src={submissionImage}
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </td>
        <td>{totalPayment}</td>
        <th>
         sdfsd;fj
        </th>
        <th>
          <button
            // onClick={() => handleDelete(_id, PaymentCoin)}
            className="py-2 px-4 rounded-xl"
          >
            delete
          </button>
        </th>
      </tr>
    );
};

export default ManageTaskTable;