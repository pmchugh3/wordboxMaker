import _ from 'lodash';
import {DELETE_WORD_ACTION} from './DeleteWordAction.ts';
import {ADD_WORD_ACTION} from "./AddWordAction.ts";
import WordList from './WordList.ts';
import {State} from "./Store.ts";

const WordReducer = function(state: State, action) {
    let newState: State;
    if (state === undefined) {
        const dwarfsAsStrings = ["SLEEPY", "DOPEY", "DOC", "BASHFUL", "SNEEZY", "GRUMPY", "HAPPY"];
        const defaultWordList = new WordList("Dwarfs", new Set([...dwarfsAsStrings]));
        newState = {
            wordLists: [defaultWordList]
        }
    }
    switch (action.type) {
        case DELETE_WORD_ACTION:
            const createWordFilter = (wordToDelete: string) => {
                const filter = (wordList) => _.filter([...wordList], word => word !== wordToDelete);
                return createWordUpdater(filter);
            };
            newState = updateState(state.wordLists, action.data.wordListName, createWordFilter(action.data.word));
            break;
        case ADD_WORD_ACTION:
            const createWordAdder = (word: string) => {
                return createWordUpdater((wordList) => [...wordList].concat(word));
            };
            newState = updateState(state.wordLists, action.data.wordListName, createWordAdder(action.data.word));
    }
    return newState;
};

const createWordUpdater = (updateFunc) => {
    return (wordList: WordList) => {
        const newWords: Set<string> = new Set<string>(updateFunc(wordList.words));
        return new WordList(wordList.name, newWords);
    }
};

const updateState = function(wordLists: WordList[], wordListName: string, updateFunc) {
    const newWordLists = wordLists.map((wordList: WordList): WordList => {
        if (wordList.name !== wordListName) {
            return wordList;
        } else {
            return updateFunc(wordList);
        }
    });
    return {
        wordLists: newWordLists
    };
};
export default WordReducer;
