import React from "react";
import Logo from '../assets/img/logo-YTS.svg';

const Header = (props) => {
  return (
    <header class="main_header">
      <div class="nav">
        <div class="nav-header">
          <div class="nav-title">
           <img src="https://yts.mx/assets/images/website/logo-YTS.svg"  width="140px"/>
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="nav-links">
          <div className="search_wrapper">
            <div className="search_icon">

            </div>
            <div className="search_inp">
              <input type="search" />
            </div>
          </div>
        </div>
      </div>
    </header>
   
  );
};

export default Header;



