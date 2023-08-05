import React from "react";

const TransactionHistory = ({
  transactions,
  deleteTransaction,
  setTransactions,
}) => {
  // const [transactions, setTransactions] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("transactions", JSON.stringify(transactions));
  // }, [transactions]);
  return (
    <div>
      <h3 className="text-lg font-bold mb-[10px]">Transaction History</h3>
      <div>
        <ul className="list h-[20vh] overflow-y-scroll  shadow-inner-shadow px-2 py-0 rounded-[10px]">
          {transactions.map((transaction) =>
            transaction.transactionAmount > 0 ? (
              <li
                key={transaction.id}
                className={`flex justify-between items-center mb-[10px] mt-[10px] shadow-lg p-[10px] rounded-[10px] border-l-4 border-green-500`}
              >
                {transaction.description}
                <span>${Math.abs(transaction.transactionAmount)}</span>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-lg transition-transform duration-300 transform-gpu hover:shadow-lg hover:scale-105"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  X
                </button>
              </li>
            ) : (
              <li
                key={transaction.id}
                className={`flex justify-between items-center mb-[10px] mt-[10px] shadow-lg p-[10px] rounded-[10px] border-l-4 border-red-500`}
              >
                {transaction.description}
                <span>${Math.abs(transaction.transactionAmount)}</span>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-lg transition-transform duration-300 transform-gpu hover:shadow-lg hover:scale-105"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  X
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
export default TransactionHistory;
