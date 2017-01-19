/**
 * Created by pmchugh on 18/01/2017.
 */
import Word from './Word.ts';

export default class WordList {
    name: string;
    words: Word[];

    constructor(name: string, words: Word[]) {
        this.name = name;
        this.words = words;
    }
}