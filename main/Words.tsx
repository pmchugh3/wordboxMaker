import React from 'react';
import {Link} from 'react-router'

export default class Words extends React.Component<any, any> {
    render() {
        const words: string[] = ["SLEEPY", "DOPEY", "DOC", "BASHFUL", "SNEEZY", "GRUMPY", "HAPPY"];
        const listItems = words.map((word) => this.wordRender(word));
        return (
            <div>
                <h2>WORDS!</h2>
                <Link to="/">Home</Link>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }

    private wordRender(word: string) {
        return (
            <li>{word}</li>
        );
    }
}