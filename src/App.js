import { useState, useEffect } from "react";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import MonthFilter from "./components/MonthFilter";
import CategorySummary from "./components/CategorySummary";
import CategoryChart from "./components/CategoryChart";


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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">
          Expense Tracker
        </h1>

        <MonthFilter
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />

        <Balance transactions={filteredTransactions} />

        <TransactionList
          transactions={filteredTransactions}
          deleteTransaction={deleteTransaction}
        />

        <AddTransaction addTransaction={addTransaction} />
        <Balance transactions={filteredTransactions} />

        <CategorySummary transactions={filteredTransactions} />

        <TransactionList
          transactions={filteredTransactions}
          deleteTransaction={deleteTransaction}
        />
        <CategorySummary transactions={filteredTransactions} />

        <CategoryChart transactions={filteredTransactions} />

        <TransactionList
          transactions={filteredTransactions}
          deleteTransaction={deleteTransaction}
        />

      </div>
    </div>
  );
}

export default App;
