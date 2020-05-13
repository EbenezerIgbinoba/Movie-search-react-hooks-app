import React from 'react';
import Header from "./AppHeader";
import Footer from  "./AppFooter"

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

 
    searchEvent(event) {
        console.log(event.target.value);
        this.props.filtertext(event.target.value);
    }

    render() {
        const updateChildrenWithProps = React.Children.map(this.props.children, (child, i) => {
              return React.cloneElement(child, {
                fil: this.filterText
              });
            }
          );
        return (
            <div>
                <Header inputChange={(event) => this.searchEvent(event)} />
                    {this.props.children}
                <Footer />
            </div>
        )
    }
}


export default Layout;