import React from "react";

const Header = (props) => {
    return (
        <header class="app-header">
            {props.text}
        </header>
    )
}

export default Header;