import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from './redux/store/expenses'
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store= {store}>
    <App />
  </Provider>,
  //provider give access of store to all componenet which are used inside <provider></provider>
  //so all component inside app having access of store
  document.getElementById("root")
);

reportWebVitals();
