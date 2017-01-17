import {createStore} from 'redux';

const wordReducer = function(state, action) {
    if (action) {
        console.log("we have an action");
    }
    return state || ["SLEEPY", "DOPEY", "DOC", "BASHFUL", "SNEEZY", "GRUMPY", "HAPPY"];
}

const store = createStore(wordReducer);

export default store;