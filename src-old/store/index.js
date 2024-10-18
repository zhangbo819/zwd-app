import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function reducer() {
    return {}
}
export const store = createStore(
    combineReducers({ reducer }),
    applyMiddleware(thunk)
);