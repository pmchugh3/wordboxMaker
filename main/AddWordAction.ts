/**
 * Created by pmchugh on 26/01/2017.
 */

export const ADD_WORD_ACTION: string = 'ADD_WORD';

export class AddWordActionData {
    word: string;
    wordListName: string;

    constructor(word: string, wordListName: string) {
        this.word = word;
        this.wordListName = wordListName;
    }
}

export class AddWordAction {
    type: string = ADD_WORD_ACTION;
    data: AddWordActionData;

    constructor(data: AddWordActionData) {
        this.data = data;
    }
}