import { useState } from "react";

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount || !date) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
      category,
      date,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
    setCategory("Food");
    setDate("");
  };

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">Add Transaction</h3>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Description"
          className="w-full border p-2 mb-2 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount (+ income, - expense)"
          className="w-full border p-2 mb-2 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          className="w-full border p-2 mb-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Rent</option>
          <option>Shopping</option>
          <option>Others</option>
        </select>

        <input
          type="date"
          className="w-full border p-2 mb-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
