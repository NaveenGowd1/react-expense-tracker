import AddTransaction from "./AddTransaction";
import MonthFilter from "./MonthFilter";

const Sidebar = ({ addTransaction, selectedMonth, setSelectedMonth }) => {
  return (
    <div className="w-[280px] bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 h-screen shadow-2xl">
      <h2 className="text-2xl font-bold mb-8 tracking-wide text-center">
        💰 ExpensePro
      </h2>

      <div className="mb-6">
        <p className="text-xs uppercase text-gray-400 mb-2">
          Filter by Month
        </p>
        <MonthFilter
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
      </div>

      <div className="mt-8">
        <p className="text-xs uppercase text-gray-400 mb-2">
          New Transaction
        </p>
        <AddTransaction addTransaction={addTransaction} />
      </div>
    </div>
  );
};

export default Sidebar;
