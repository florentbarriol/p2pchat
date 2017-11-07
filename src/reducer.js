import { createReducer } from './utils';
import { ADD_MESSAGE, ADD_PEER } from './constants';
import _ from 'lodash';

const initialState = {
    messages: [],
    peers: []
}

export const reducer = createReducer(initialState, {
    [ADD_MESSAGE](state, action) {
        return _.merge({}, state, { messages: _.concat(state.messages, action.message) });
    },
    [ADD_PEER](state, action) {
        return _.merge({}, state, { peers: _.concat(state.peers, action.peer) });
    }
});
