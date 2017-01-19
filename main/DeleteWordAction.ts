/**
 * Created by pmchugh on 19/01/2017.
 */

export const DELETE_WORD_ACTION: string = 'DELETE_WORD';

export class DeleteActionData {
    word: string;
    wordListName: string;

    constructor(word: string, wordListName: string) {
        this.word = word;
        this.wordListName = wordListName;
    }
}

export class DeleteWordAction {
    type: string = DELETE_WORD_ACTION;
    data: DeleteActionData;

    constructor(data: DeleteActionData) {
        this.data = data;
    }
}