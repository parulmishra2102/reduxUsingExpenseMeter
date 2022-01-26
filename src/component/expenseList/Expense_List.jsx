import React from "react";
import Card from "./Card";
import "./expenseList.css";

function Expense_List() {
  const list = [
    {
      title: "purchase grocery",
      logo: "gh",
      createdAt: Date.now(),
      aunt: 1000,
    },
    {
      title: "purchase movieticket",
      logo: "ghff",
      createdAt: Date.now(),
      aunt: 1500,
    },
  ];

  return (
    <div>
      {list.length ? list.map((item) => <Card item={item}></Card>) : null}
    </div>
  );
}

export default Expense_List;
