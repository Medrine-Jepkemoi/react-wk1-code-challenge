import { useState } from "react";

function TransactionForm() {
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

    fetch("http://localhost:4000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    })
      .then((r) => r.json())
      .then((newTransaction) => console.log(newTransaction));
  }

  return (
    <div className="App">
      <form className="NewTransaction" onSubmit={handleSubmit}>
        <label>Date</label>
        <input type="text" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <label>Description</label>
        <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <label>Category</label>
        <select type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Income">Income</option>
          <option value="Food">Food</option>
          <option value="Fashion">Fashion</option>
          <option value="Gift">Gift</option>
          <option value="Transportation">Transportation</option>
          <option value="Housing">Housing</option>
        </select>
        <label>Amount</label>
        <input type="text" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button type="submit">Add to List</button>
      </form>
    </div>
  );
}

export default TransactionForm;
