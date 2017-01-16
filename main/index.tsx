import React from 'react';
import ReactDOM from "react-dom";
import {Router, Route} from "react-router";
import Words from "./Words.tsx";
import Home from "./Home.tsx";

ReactDOM.render(
    <Router>
        <Route path="/words" component={Words} />
        <Route path="/" component={Home} />
    </Router>,
    document.getElementById('root')
);