import React from 'react';
import WordList from "./WordList.ts";
import WordComponent from "./WordComponent.tsx";

interface WordListProps {
    deleteWord: (wordListName: string, word: string) => void;
    addWord: (wordListName: string, word: string) => void;
}

interface WordListState {
    wordToAdd: string
}

export default class WordListComponent extends React.Component<WordList & WordListProps, WordListState> {
    constructor(props) {
        super(props);
        this.state = {
            wordToAdd: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            wordToAdd: event.target.value
        });
    };

    submitForm = (event) => {
        this.props.addWord(this.props.name, this.state.wordToAdd);
        event.preventDefault();
    };

    render() {
        const deleteWord = (word) => this.props.deleteWord(this.props.name, word);
        const words = [];
        this.props.words.forEach((word) => {
            words.push(<WordComponent word={word} deleteWord={deleteWord} key={word} />);
        });
        return (
            <div>
                <div>{words}</div>
                <form onSubmit={this.submitForm}>
                    <input type="text" value={this.state.wordToAdd} onChange={this.handleChange} /><input type="submit" value="+" />
                </form>
            </div>
        )
    };
}