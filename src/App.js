import "./App.css";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/transactionstbl";
function App() {
  return (
    <div className="App">
      <TransactionForm />
      <TransactionTable />
    </div>
  );
}

export default App;
