import React from "react";

const Balance = ({ transactions }) => {
  const balance = transactions.reduce(
    (acc, transaction) => acc + transaction.transactionAmount,
    0
  );

  return (
    <div>
      <h4 className="text-lg">Current Balance</h4>
      <h1 id="balance" className="text-3xl font-bold">
        ${balance}
      </h1>
    </div>
  );
};

export default Balance;
