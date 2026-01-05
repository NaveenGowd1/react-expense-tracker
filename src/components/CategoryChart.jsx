import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const CategoryChart = ({ transactions }) => {
  // Convert transactions → chart data
  const dataMap = transactions.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  const chartData = Object.keys(dataMap).map((key) => ({
    category: key,
    amount: Math.abs(dataMap[key]), // show positive bars
  }));

  if (chartData.length === 0) {
    return (
      <p className="text-gray-400 text-sm text-center mt-4">
        No data for chart
      </p>
    );
  }

  return (
   <div className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">


      <h3 className="font-semibold mb-2 text-center">
        Category-wise Expense Chart
      </h3>

   <div className="w-full h-52">


        <ResponsiveContainer>
          <BarChart data={chartData}>
  <XAxis dataKey="category" stroke="#9CA3AF" fontSize={12} />
  <YAxis stroke="#9CA3AF" fontSize={12} />
  <Tooltip
    contentStyle={{
      backgroundColor: "#111827",
      border: "1px solid #1F2937",
      color: "#E5E7EB",
    }}
  />
  <Bar
    dataKey="amount"
    fill="#6366F1"
    radius={[6, 6, 0, 0]}
  />
</BarChart>

        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CategoryChart;
