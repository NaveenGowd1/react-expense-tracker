import Balance from "./Balance";
import CategorySummary from "./CategorySummary";
import CategoryChart from "./CategoryChart";
import TransactionList from "./TransactionList";

const Dashboard = ({ transactions, deleteTransaction }) => {
  return (
    <div className="w-3/4 p-4 h-screen overflow-hidden">
      {/* Top section */}
      <div className="grid grid-cols-3 gap-6">

        <Balance transactions={transactions} />
        <CategorySummary transactions={transactions} />
        <CategoryChart transactions={transactions} />
      </div>

      {/* Bottom section */}
      <div className="mt-6 h-[45%] overflow-y-auto pr-2">

        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
      </div>
    </div>
  );
};

export default Dashboard;
