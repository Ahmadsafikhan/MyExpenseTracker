import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import AccountSummary from "./components/AccountSummary";
import TransactionHistory from "./components/TransactionHistory";
import AddTransaction from "./components/AddTransaction";

function App() {
  const initialTransactions = JSON.parse(localStorage.getItem("transactions")) || [];

  const [transactions, setTransactions] = useState(initialTransactions);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2196f3]">
      <div className="bg-white p-8 rounded-2xl shadow-custom-shadow max-w-[400px] w-full">
        <Header />
        <div className="container">
          <Balance transactions={transactions} />
          <AccountSummary transactions={transactions} />
          <TransactionHistory
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />
          <AddTransaction addTransaction={addTransaction} />
        </div>
      </div>
    </div>
  );
}

export default App;
