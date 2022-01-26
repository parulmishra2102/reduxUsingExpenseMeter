import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { categories } from "../../constants/expenseCategory";
function AddForm() {
  const cat = categories;
  const [categoryBoxOpen, setCategoryBoxOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  //when category selected among all others category then we need to set what category we selected
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAmountValueChange = (e) => {
    const value = parseFloat(e.target.value);
    //   debugger
    if (isNaN(value)) {
      setAmount("");
      return;
    }
    setAmount(value);
  };

 const  handleSetCategory = (categ) =>{
   
  setCategory(categ)
  setCategoryBoxOpen(false)

 }
  return (
    <div className="add-form">
      <div className="form-item">
        <label>Title : </label>
        <input
          type="text"
          placeholder="Give your expenditure name"
          value={title}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div className="form-item">
        <label>Amount ₹ : </label>
        <input
          className="input-amount"
          type="text"
          placeholder="enter the amount"
          value={amount}
          onChange={(e) => handleAmountValueChange(e)}
        />
        <div className="category-container-parent">
          <div className="category">
            <div className="category-dropdown" onClick={()=>setCategoryBoxOpen(!categoryBoxOpen) }>
              <label>Category :</label>
              <ArrowDropDownIcon />
            </div>
            {categoryBoxOpen && (
              <div className="category-container">
                {cat.map((categ) => (
                  <div
                    className="category-item"
                    key={cat.id}
                    onClick={() => handleSetCategory(categ)}
                  >
                    <label>{categ.title}</label>
                    <img src={categ.icon.default} alt={categ.title} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddForm;
