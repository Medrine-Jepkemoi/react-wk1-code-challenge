import "./App.css";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/transactionstbl";
function App() {
  return (
    <div className="App">
      <h1> BANK OF FLATIRON</h1>
      <TransactionForm />
      <TransactionTable />
    </div>
  );
}

export default App;
