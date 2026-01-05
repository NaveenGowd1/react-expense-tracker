const TransactionList = () => {
  return (
    <div className="my-4">
      <h3 className="font-semibold mb-2">History</h3>
      <ul>
        <li className="flex justify-between bg-red-100 p-2 mb-2 rounded">
          Food <span>-₹200</span>
        </li>
        <li className="flex justify-between bg-green-100 p-2 rounded">
          Salary <span>+₹5000</span>
        </li>
      </ul>
    </div>
  );
};

export default TransactionList;
