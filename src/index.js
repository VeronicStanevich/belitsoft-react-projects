import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from "react-redux";
import store from './store';
import {Teams} from "./components/teams/teams";
import './teams.css';

const App = () => {
    return (
        <Provider store={store}>
            <Teams/>
        </Provider>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
