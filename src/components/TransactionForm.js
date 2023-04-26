import { useState } from "react";

function TransactionForm({ onAddTransaction }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Income");
  const [amount, setAmount] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    const transactionData = {
      date: date,
      description: description,
      category: category,
      amount: amount,
    };

    console.log(transactionData);

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    })
      .then((r) => r.json())
      .then((newTransaction) => onAddTransaction(newTransaction));
  }

  return (
    <div className="TransForm">
      <p>Please fill in the form to add a transaction</p>
      <form className="NewTransaction" onSubmit={handleSubmit}>
        <label>Date</label>
        <br />
        <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <br />
        <label>Description</label>
        <br />
        <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <label>Category</label>
        <br />
        <select type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Income">Income</option>
          <option value="Food">Food</option>
          <option value="Fashion">Fashion</option>
          <option value="Gift">Gift</option>
          <option value="Transportation">Transportation</option>
          <option value="Housing">Housing</option>
        </select>
        <br />
        <label>Amount</label>
        <br />
        <input type="text" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TransactionForm;
