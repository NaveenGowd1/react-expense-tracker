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
  <div className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
    <h4 className="text-sm text-gray-500 uppercase tracking-wide">
      Total Balance
    </h4>

    <h2 className="text-3xl font-bold mt-2 text-gray-800">
      ₹{total}
    </h2>

    <div className="flex justify-between mt-6">
      <div>
        <p className="text-xs text-gray-500">Income</p>
        <p className="text-green-600 font-semibold">₹{income}</p>
      </div>

      <div>
        <p className="text-xs text-gray-500">Expense</p>
        <p className="text-red-500 font-semibold">₹{expense}</p>
      </div>
    </div>
  </div>
);


};

export default Balance;
