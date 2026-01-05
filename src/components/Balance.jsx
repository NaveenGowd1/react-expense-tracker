const Balance = ({ transactions }) => {
  const amounts = transactions.map((t) => t.amount);

  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);
  const income = amounts
    .filter((a) => a > 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);
  const expense = (
    amounts
      .filter((a) => a < 0)
      .reduce((acc, val) => acc + val, 0) * -1
  ).toFixed(2);

  return (
    <>
      <div className="text-center my-4">
        <h4 className="text-gray-500">Your Balance</h4>
        <h2 className="text-2xl font-semibold">₹{total}</h2>
      </div>

      <div className="flex justify-between bg-gray-100 p-4 rounded mb-4">
        <div>
          <h4 className="text-sm">Income</h4>
          <p className="text-green-600 font-semibold">₹{income}</p>
        </div>
        <div>
          <h4 className="text-sm">Expense</h4>
          <p className="text-red-600 font-semibold">₹{expense}</p>
        </div>
      </div>
    </>
  );
};

export default Balance;
