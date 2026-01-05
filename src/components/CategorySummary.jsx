const CategorySummary = ({ transactions }) => {
  const categoryTotals = transactions.reduce((acc, curr) => {
    const category = curr.category;
    acc[category] = (acc[category] || 0) + curr.amount;
    return acc;
  }, {});

  return (
    <div className="bg-white p-4 rounded shadow h-full">

      <h3 className="font-semibold mb-2">Category Summary</h3>

      {Object.keys(categoryTotals).length === 0 && (
        <p className="text-gray-400 text-sm">No data to summarize</p>
      )}

      <ul className="space-y-2">
        {Object.entries(categoryTotals).map(([category, total]) => (
          <li
            key={category}
            className="flex justify-between bg-gray-100 p-2 rounded"
          >
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
