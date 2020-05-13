import React from 'react';
import Header from "./AppHeader";


class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
           
           
        )
    }
}


export default Layout;