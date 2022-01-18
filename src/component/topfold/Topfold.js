import React, { useState } from "react";
import "./Topfold.css";
import SearchIcon from "@mui/icons-material/Search";
// import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
function Topfold() {
  const [query, setQuery] = useState("");

  const handleQuery = (x) => {
    setQuery(x.target.value);
  };

  return (
    <div className="topfold">
      {window.location.pathname !== "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <SearchIcon></SearchIcon>
            <input
              placeholder="search here"
              value={query}
              onChange={(e) => handleQuery(e)}
            ></input>
          </div>
          <div className="add-button">
            <AddCircleOutlineIcon />
            <label>Add</label>
          </div>
        </div>
      ) : (
        <div className='add-topfold'>
        <div className="add-topfold-button">
        <ArrowBackIosNewIcon />
        <label>Back</label>
        </div>
        <div className="add-topfold-button">
        <ArrowBackIosNewIcon />
        <label>Cancel</label>
        </div>
        </div>
      )}
    </div>
  );
}

export default Topfold;
