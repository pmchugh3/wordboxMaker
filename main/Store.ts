import {createStore} from 'redux';
import WordList from './WordList.ts';
import WordReducer from './WordReducer.ts';

export interface State {
    wordLists: WordList[]
}

const store = createStore(WordReducer);

export default store;