const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div>
      {transactions.length === 0 && (
        <p className="text-textMuted text-sm">
          No transactions
        </p>
      )}

      <ul>
        {transactions.map((t) => (
          <li
            key={t.id}
            className={`flex justify-between items-center p-4 mb-3 rounded-xl
            bg-white dark:bg-cardDark shadow-sm border-l-4
            ${t.amount < 0 ? "border-danger" : "border-success"}`}
          >
            <div>
              <p className="font-medium">{t.text}</p>
              <p className="text-xs text-textMuted">
                {t.category} • {t.date}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-semibold">
                {t.amount < 0 ? "-" : "+"}₹{Math.abs(t.amount)}
              </span>

              <button
                onClick={() => deleteTransaction(t.id)}
                className="text-textMuted hover:text-danger transition"
                title="Delete"
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
