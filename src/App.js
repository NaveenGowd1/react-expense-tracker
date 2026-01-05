import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedMonth, setSelectedMonth] = useState("all");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const filteredTransactions =
    selectedMonth === "all"
      ? transactions
      : transactions.filter(
        (t) => new Date(t.date).getMonth().toString() === selectedMonth
      );

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar
        addTransaction={addTransaction}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />

      <Dashboard
        transactions={filteredTransactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;
