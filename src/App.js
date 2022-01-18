import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddExpense from "./component/pages/add_Expense/AddExpense";
import Home from "./component/pages/home/Home";
import Header from "./component/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="add/" element={<AddExpense />} />
      </Routes>

      <div>footer</div>
    </Router>
  );
}

export default App;
