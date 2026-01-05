import AddTransaction from "./AddTransaction";
import MonthFilter from "./MonthFilter";

const Sidebar = ({ addTransaction, selectedMonth, setSelectedMonth }) => {
  return (
    <div className="w-1/4 bg-gray-900 text-white p-4 h-screen">
      <h2 className="text-xl font-bold mb-6 text-center">
        Expense Tracker
      </h2>

      <MonthFilter
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />

      <AddTransaction addTransaction={addTransaction} />
    </div>
  );
};

export default Sidebar;
