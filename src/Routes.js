import {Route, Switch} from 'react-router-dom';
import App from './App';
import React from 'react';
import Layout from './Components/AppLayout'


class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textToBeFiltered: ''
        };
    }
    filterMovies = (filtertext) => {
        this.setState({textToBeFiltered: filtertext});
    }

    render() {
        return (
            <Layout filtertext={(filtertext) => this.filterMovies(filtertext)}>
                <Switch>
                    <Route exact path="/"  render={(props) => (<App  filerText={this.state.textToBeFiltered} /> )} />
                    <Route exact path="/movies/details"   />
                </Switch>
            </Layout>
        )
    }
 
}

export default  Routes;