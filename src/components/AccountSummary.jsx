import React from "react";

const AccountSummary = ({ transactions }) => {
  const transactionAmounts = transactions.map(
    (transaction) => transaction.transactionAmount
  );

  const income = transactionAmounts
    .filter((transaction) => transaction > 0)
    .reduce((acc, transaction) => acc + transaction, 0);

  const expense = Math.abs(
    transactionAmounts
      .filter((transaction) => transaction < 0)
      .reduce((acc, transaction) => acc + transaction, 0)
  );

  return (
    <div className="flex justify-between relative">
      <div className="w-[50%] shadow-div-shadow">
        <h4 className="text-lg">Income</h4>
        <p className="text-green-500 font-bold">{income}</p>
      </div>
      <div className="w-[50%] text-right shadow-div-shadow">
        <h4 className="text-lg">Expense</h4>
        <p className="text-red-500 font-bold">{expense}</p>
      </div>
      <div className="absolute h-[50px] w-[1px] bg-gray-300 right-[50%] top-0"></div>
    </div>
  );
};
export default AccountSummary;
