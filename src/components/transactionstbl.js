import { useEffect, useState } from "react";

function TransactionTable() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [transactions, setTransactions] = useState([]);

  //fetching the transactions
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((transactions) => console.log(transactions));
  }, []);
}

export default TransactionTable;
