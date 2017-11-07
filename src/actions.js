import { makeActionCreator } from './utils';
import { ADD_MESSAGE, ADD_PEER, FREE_HAND_SHAKE_SERVER } from './constants';
import Peer from 'simple-peer';
import randombytes from 'randombytes';
import signalhub from 'signalhub';

const addMessage = makeActionCreator(ADD_MESSAGE, 'message');
const addPeer = makeActionCreator(ADD_PEER, 'peer');

const localPeerId = randombytes(8).toString('hex');
const hub = signalhub('p2pchat', [FREE_HAND_SHAKE_SERVER]);

export const initLocalPeer = () => {
    return dispatch => {
        hub.broadcast('hello', localPeerId);
        hub.subscribe('hello').on('data', (peerId) => {
            const peer = new Peer();
            peer.on('signal', (signal) => {
                hub.broadcast(peerId, signal);
            });
            dispatch(addPeer(peer));
            dispatch(sendMessage('Please welcome a new member ' + peer._id));
        });
        hub.subscribe(localPeerId, (signal => {
            console.log(signal);
            const peer = new Peer();
            peer.signal(signal);
        }));
        // receive a broadcast message
        hub.subscribe('chat').on('data', (message) => {
            dispatch(addMessage(message));
        });
    }
}

export const sendMessage = (text) => {
    return (dispatch, getState) => {
        // send the message in broadcast mode
        hub.broadcast('chat', createMessage(localPeerId, text));
        return;
    }
}

const createMessage = (peerId, text) => {
    return { from: peerId, text: text };
}

