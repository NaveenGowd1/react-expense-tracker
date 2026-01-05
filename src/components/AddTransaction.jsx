const AddTransaction = () => {
  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">Add Transaction</h3>
      <form>
        <input
          type="text"
          placeholder="Description"
          className="w-full border p-2 mb-2 rounded"
        />
        <input
          type="number"
          placeholder="Amount (+ income, - expense)"
          className="w-full border p-2 mb-2 rounded"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
