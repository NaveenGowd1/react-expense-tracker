const CategorySummary = ({ transactions }) => {
  const categoryTotals = transactions.reduce((acc, curr) => {
    const category = curr.category;
    acc[category] = (acc[category] || 0) + curr.amount;
    return acc;
  }, {});

  return (
   <div className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">


      <h3 className="font-semibold mb-2">Category Summary</h3>

      {Object.keys(categoryTotals).length === 0 && (
        <p className="text-gray-400 text-sm">No data to summarize</p>
      )}

      <ul className="space-y-2">
        {Object.entries(categoryTotals).map(([category, total]) => (
          <li className="flex justify-between items-center bg-white rounded-xl px-4 py-2 shadow-sm">

            <span>{category}</span>
            <span
              className={`font-semibold ${
                total < 0 ? "text-red-500" : "text-green-600"
              }`}
            >
              {total < 0 ? "-" : "+"}₹{Math.abs(total)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySummary;
