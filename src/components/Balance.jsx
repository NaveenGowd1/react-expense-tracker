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
  <div className="bg-white dark:bg-cardDark rounded-2xl shadow-lg p-6 text-center">
    <p className="text-xs uppercase tracking-wide text-gray-400">
      Total Balance
    </p>

    <h2 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
      ₹{total}
    </h2>

    <div className="flex justify-between mt-6">
      <div>
        <p className="text-xs text-gray-400">Income</p>
        <p className="text-secondary font-semibold">₹{income}</p>
      </div>
      <div>
        <p className="text-xs text-gray-400">Expense</p>
        <p className="text-danger font-semibold">₹{expense}</p>
      </div>
    </div>
  </div>
);


};

export default Balance;
