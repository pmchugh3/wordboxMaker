import React from 'react';
import ReactDOM from "react-dom";
//import {Router, Route} from "react-router";
import WordLists from "./WordListsComponent.tsx";
//import Home from "./Home.tsx";
import {Provider} from 'react-redux';
import Store from './Store.ts';

ReactDOM.render(
    <Provider store={Store}>
        <WordLists />
    </Provider>,
    document.getElementById('root')
);