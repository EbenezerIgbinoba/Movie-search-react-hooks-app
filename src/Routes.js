import {Route, Switch} from 'react-router-dom';
import App from './App';
import React from 'react';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </div>
    )
}

export default  Routes;