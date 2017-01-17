import React from 'react';
import ReactDOM from "react-dom";
//import {Router, Route} from "react-router";
import Words from "./Words.tsx";
//import Home from "./Home.tsx";
import {Provider} from 'react-redux';
import Store from './Store.ts';

ReactDOM.render(
    <Provider store={Store}>
        <Words />
    </Provider>,
    document.getElementById('root')
);