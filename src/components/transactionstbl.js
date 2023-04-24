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

  return (
    <div className="App">
      <table>
        <tr>
          {/* <th>ID</th> */}
          <th>DATE</th>
          <th>DESCRIPTION</th>
          <th>CATEGORY</th>
          <th>AMOUNT</th>
        </tr>
        {transactions.map((val, key) => {
          return (
            <tr key={key}>
              {/* <td>{val.id}</td> */}
              <td>{val.date}</td>
              <td>{val.description}</td>
              <td>{val.category}</td>
              <td>{val.amount}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default TransactionTable;
