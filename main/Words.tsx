import React from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux';

class Words extends React.Component<{ words: string[]}, string[]> {
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

    public static mapStateToProps(state) {
        return {
            words: state
        };
    }
}

export default connect(Words.mapStateToProps)(Words);