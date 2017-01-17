import {createStore} from 'redux';

export interface State {
    words: string[]
}

const wordReducer = function(state: State, action) {
    if (state === undefined) {
        return {
            words:["SLEEPY", "DOPEY", "DOC", "BASHFUL", "SNEEZY", "GRUMPY", "HAPPY"]
        }
    }
    if (action) {
        console.log("we have an action");
    }
    return state;
}

const store = createStore(wordReducer);
export default store;