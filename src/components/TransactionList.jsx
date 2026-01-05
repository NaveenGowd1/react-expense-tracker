const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div className="my-4">
      <h3 className="font-semibold mb-2">History</h3>

      {transactions.length === 0 && (
        <p className="text-gray-400 text-sm">No transactions</p>
      )}

      <ul>
        {transactions.map((t) => (
          <li
            
  key={t.id}
  className={`flex justify-between items-center p-4 mb-3 rounded-xl bg-white shadow-sm hover:shadow-md transition border-l-4 ${
    t.amount < 0 ? "border-red-500" : "border-green-500"
  }`}
    >

            <div>
              <p className="font-medium">{t.text}</p>
              <p className="text-xs text-gray-500">
                {t.category} • {t.date}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span>
                {t.amount < 0 ? "-" : "+"}₹{Math.abs(t.amount)}
              </span>

                <button className="text-gray-400 hover:text-red-500 transition">
    ✖
    </button>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
