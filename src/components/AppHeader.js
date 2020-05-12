import React from "react";
import Logo from '../assets/img/logo-YTS.svg';

const Header = (props) => {
  return (
    <header class="main_header">
       <div className="App-header">
        <div className="logo">
          <div>
            <img src="https://yts.mx/assets/images/website/logo-YTS.svg"  width="130"/>
          </div>
        </div>
        <div className="menu_items">
            <ul className="nav_menu">
              <li className="nav_menu_item"><a href="#">Home</a> </li>
              <li className="nav_menu_item"><a href="#">About</a> </li>
            </ul>
        </div>
      </div>
    </header>
   
  );
};

export default Header;