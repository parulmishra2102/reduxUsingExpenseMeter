import React from "react";

import Topfold from "../../topfold/Topfold";
import AddForm from "../../addform/AddForm"
import "./addExpense.css";


function AddExpense() {
  return (
    <div className="add_expense">
      <Topfold />
     <AddForm />
     
    </div>
  );
}

export default AddExpense;
