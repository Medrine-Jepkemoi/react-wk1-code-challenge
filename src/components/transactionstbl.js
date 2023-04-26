import { useEffect, useState } from "react";

function TransactionTable() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [transactions, setTransactions] = useState([]); //setting the initial state of the transactions to be an empty array

  //fetching the transactions
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((transactions) => setTransactions(transactions));
  }, []);

  function TransactionForm(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  function handleDeleteClick({ id }) {
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("deleted!"));
  }

  return (
    <div className="TransTable">
      <TransactionForm onAddTransaction={TransactionForm} />
      <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>DATE</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                {/* <td>{transaction.id}</td> */}
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                <td>
                  <button onClick={() => handleDeleteClick(transaction.id)}> Delete </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
