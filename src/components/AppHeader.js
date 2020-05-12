import React from "react";
import Logo from '../assets/img/logo-YTS.svg';

const logoURl = "https://yts.mx/assets/images/website/logo-YTS.svg";

const Header = (props) => {
  return (
    <header className="main_header">
      <div className="logo_wrapper">
        <img src={logoURl} />
      </div>  
      <div className="menu_items">
        <div className="search_wrapper">
          <div className="search_icon_wrapper">
           <i class="fa fa-search search_icon" aria-hidden="true"></i>
          </div>
          <div className="search_input">
              <input type="search" placeholder="Quick Search" />
            </div>
        </div>
      </div>
    </header>
   
  );
};

export default Header;





