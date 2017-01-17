import React from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux';
import {State} from './Store';

interface WordsProps {
    words: string[]
}

class Words extends React.Component<WordsProps, State> {
    render() {
        const listItems = this.props.words.map((word) => this.wordRender(word));
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

const mapStateToProps: (State) => WordsProps = (state) => {
    return {
        ...state
    } as WordsProps;
};

export default connect(mapStateToProps)(Words);