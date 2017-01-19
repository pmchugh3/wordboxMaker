import React from 'react';
import WordList from "./WordList.ts";
import WordComponent from "./WordComponent.tsx";

interface WordListProps {
    deleteWord: (wordListName: string, word: string) => void;
}

export default class WordListComponent extends React.Component<WordList & WordListProps, any> {
    render() {
        const deleteWord = (word) => this.props.deleteWord(this.props.name, word);
        const words = this.props.words.map((word) => <WordComponent {...word} deleteWord={deleteWord} key={word.id} />);
        return (
            <div>{words}</div>
        )
    };
}