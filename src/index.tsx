import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from "react-redux";
import store from './store';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Teams} from "./components/teams/teams";

import './teams.css';
import {User} from "./components/user/user";
import {Squad} from "./components/squad";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Teams</Link>
                        </li>
                        <li>
                            <Link to="/user">User</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/squad/:id">
                        <Squad />
                    </Route>
                    <Route path="/user">
                        <User/>
                    </Route>
                    <Route path="/">
                        <Teams/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
