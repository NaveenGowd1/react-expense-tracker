import Balance from "./Balance";
import CategorySummary from "./CategorySummary";
import CategoryChart from "./CategoryChart";
import TransactionList from "./TransactionList";

const Dashboard = ({ transactions, deleteTransaction }) => {
  return (
    <div className="flex-1 p-8 space-y-6 overflow-hidden">
  
  {/* Top analytics */}
  <div className="grid grid-cols-3 gap-6">
    <Balance transactions={transactions} />
    <CategorySummary transactions={transactions} />
    <CategoryChart transactions={transactions} />
  </div>

  {/* Transactions */}
  <div className="bg-white dark:bg-cardDark rounded-2xl shadow-lg p-6 h-[40%] overflow-y-auto">
   <TransactionList
  transactions={transactions}
  deleteTransaction={deleteTransaction}
/>

  </div>
</div>

  );
};

export default Dashboard;
