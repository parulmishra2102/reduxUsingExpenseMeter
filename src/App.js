import logo from "./logo.svg";
import "./App.css";

import Home from "./component/pages/home/Home";
import Header from "./component/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <div>footer</div>
    </div>
  );
}

export default App;
