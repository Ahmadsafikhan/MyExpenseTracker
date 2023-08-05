import React, { useState } from 'react';

const AddTransaction = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description || !transactionAmount) return;

    const newTransaction = {
      id: new Date().getTime(),
      description,
      transactionAmount: +transactionAmount,
    };

    addTransaction(newTransaction);
    setDescription('');
    setTransactionAmount('');
  };

  return (
    <div>
     <h3 className="text-lg font-bold mb-[10px] mt-[10px]">Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="description" className="block font-bold mt-4">Description</label>
          <input
          className='border p-2 mt-1 w-full rounded-md'
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Detail of Transaction"
            required
          />
        </div>
        <div className="form-control">
        <label htmlFor="description" className="block font-bold mt-4">Amount</label>
          <input
          className='border p-2 mt-1 w-full rounded-md'
            type="number"
            id="transactionamount"
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
            placeholder="Dollar Value of Transaction"
            required
          />
        </div>
        <button className="btn mt-4 bg-[#2196f3] text-white font-bold py-2 px-4 rounded w-full">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction