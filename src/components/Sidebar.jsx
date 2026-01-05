import AddTransaction from "./AddTransaction";
import MonthFilter from "./MonthFilter";

const Sidebar = ({
  addTransaction,
  selectedMonth,
  setSelectedMonth,
  darkMode,
  setDarkMode,
}) => {
  return (
    <div className="w-[300px] h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200 p-6 shadow-2xl">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide text-white mb-10">
        Expense<span className="text-primary">Pro</span>
      </h1>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mb-6 w-full flex items-center justify-between px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
      >
        <span className="text-sm">Dark Mode</span>
        <span>{darkMode ? "🌙" : "☀️"}</span>
      </button>

      {/* Filter */}
      <div className="mb-8">
        <p className="text-xs uppercase text-slate-400 mb-2">
          Filter by Month
        </p>
        <MonthFilter
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
      </div>

      {/* Form */}
      <div>
        <p className="text-xs uppercase text-slate-400 mb-2">
          Add Transaction
        </p>
        <AddTransaction addTransaction={addTransaction} />
      </div>
    </div>
  );
};

export default Sidebar;
