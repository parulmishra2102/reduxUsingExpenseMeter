import React from "react";
import "./Header.css"
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GitHubIcon from '@mui/icons-material/GitHub';


export const Header = () => {
  return (
    <div className="headercontainer" >
      <div className="header">
        <div className="header-logo">
          expense
          <CreditCardIcon />
        </div>
        <div className='header-button'>
        <a href="https://github.com/" target="_blank"><GitHubIcon></GitHubIcon>star</a></div>
      </div>
    </div>
  );
};
export default Header;
