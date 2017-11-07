import { reducer } from './reducer';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
    let middlewares = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewares = [...middlewares, logger];
    }

    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(...middlewares)
    );

    return store;

}
