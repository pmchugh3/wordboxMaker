import {createStore, bindActionCreators} from 'redux';
import _ from 'lodash';
import WordList from './WordList.ts';
import Word from './Word.ts';
import {DELETE_WORD_ACTION} from './DeleteWordAction.ts';

export interface State {
    wordLists: WordList[]
}

const deleteWordReducer = function(state: State, action) {
    let newState: State;
    if (state === undefined) {
        const sevenDwarfs = ["SLEEPY", "DOPEY", "DOC", "BASHFUL", "SNEEZY", "GRUMPY", "HAPPY"];
        const defaultWordList = new WordList("Dwarfs", sevenDwarfs.map((word, i) => new Word(word, i)));
        newState = {
            wordLists: [defaultWordList]
        }
    }
    if (action.type === DELETE_WORD_ACTION) {
        debugger;
        const wordListRemover = (wordList: WordList): WordList => {
            if (wordList.name !== action.data.wordListName) {
                return wordList;
            }
            const newWords: Word[] = _.filter(wordList.words, (word) => word.word !== action.data.word);
            return new WordList(wordList.name, newWords);
        }
        newState = {
            wordLists: state.wordLists.map(wordListRemover)
        };
    }
    return newState;
};

const store = createStore(deleteWordReducer);

export default store;