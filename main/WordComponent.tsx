import React from 'react';
import Word from "./Word.ts";

interface WordProps {
    deleteWord: (word: string) => void;
}

export default class WordComponent extends React.Component<Word & WordProps, any> {
    render() {
        return (
            <div>
                <span>{this.props.word}</span>
                <button onClick={() => this.props.deleteWord(this.props.word)}>X</button>
            </div>
        )
    }
}