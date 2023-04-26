import { useEffect, useState } from "react";

function TransactionTable() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [transactions, setTransactions] = useState([]); //setting the initial state of the transactions to be an empty array

  //fetching the transactions
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Medrine-Jepkemoi/react-wk1-code-challenge/transactions")
      .then((res) => res.json())
      .then((transactions) => setTransactions(transactions));
  }, []);

  function TransactionForm(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  function handleDeleteClick(id) {
    fetch(`https://my-json-server.typicode.com/Medrine-Jepkemoi/react-wk1-code-challenge/transactions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("deleted!"));
  }

  return (
    <div className="TransTable">
      {/* <TransactionForm onAddTransaction={TransactionForm} /> */}
      <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>DATE</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>AMOUNT</th>
            <th>DELETE TRANSACTION</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(
            (transaction) => (
              <tr key={transaction.id}>
                {/* <td>{transaction.id}</td> */}
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                <button className="delete-btn" onClick={() => handleDeleteClick(transaction.id)}>
                  {" "}
                  Delete{" "}
                </button>
              </tr>
            )
            // <td>
            //   <button onClick={() => handleDeleteClick}>Delete</button>
            // </td>;
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
