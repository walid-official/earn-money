import React from "react";

const PaymentHistoryTable = ({ history }) => {
  const { id, status, amount, email, coin, date, currency } = history || {};
  const mainAmount = amount / 100;
  let transactionDate = new Date(date);
  /* Date format you have */
  let dateMDY = `${transactionDate.getDate()}-${
    transactionDate.getMonth() + 1
  }-${transactionDate.getFullYear()}`;
  console.log(dateMDY);
  return (
    <tr className="text-white">
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{id}</div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{mainAmount}$</td>
      <td>{status}</td>
      <td>{currency}</td>
      <td>{coin}</td>
      <td>{dateMDY}</td>
    </tr>
  );
};

export default PaymentHistoryTable;
