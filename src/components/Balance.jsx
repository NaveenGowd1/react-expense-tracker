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
  <div className="bg-white p-4 rounded shadow text-center">
    <h4 className="text-gray-500">Balance</h4>
    <h2 className="text-2xl font-bold">₹{total}</h2>

    <div className="flex justify-between mt-3">
      <span className="text-green-600">+₹{income}</span>
      <span className="text-red-500">-₹{expense}</span>
    </div>
  </div>
);

};

export default Balance;
