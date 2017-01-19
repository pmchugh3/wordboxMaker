import React from 'react';
import {Link} from 'react-router'
import {connect, Dispatch} from 'react-redux';
import {State} from './Store';
import WordList from "./WordList.ts";
import WordListComponent from "./WordListComponent.tsx";
import {DeleteWordAction, DeleteActionData} from "./DeleteWordAction.ts";

interface WordListsProps {
    wordLists: WordList[]
}

interface DispatchProps {
    deleteWord: (wordListName: string, word: string) => void
}

class WordLists extends React.Component<WordListsProps & DispatchProps, State> {
    render() {
        const listItems = this.props.wordLists.map((wordList) => this.wordListRender(wordList));
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

    private wordListRender(wordList: WordList) {
        return (
            <div key={wordList.name}>
                <h3>{wordList.name}</h3>
                <WordListComponent
                    {...wordList}
                    deleteWord={this.props.deleteWord}
                />
            </div>
        )
    }
}

const mapStateToProps: (State) => WordListsProps = (state) => {
    return {
        ...state
    } as WordListsProps;
};

const mapDispatchToProps = (dispatch) => ({
   deleteWord: (wordListName: string, word: string) => {
       const data = new DeleteActionData(word, wordListName);
       const action = new DeleteWordAction(data);
       dispatch(Object.assign({}, action));
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(WordLists);

