import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>HOME</h1>
                <Link to="/words">Words</Link>
            </div>
        );
    }
}