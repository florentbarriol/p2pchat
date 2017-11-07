import React, { Component } from 'react';
import ListMessageComponent from './ListMessageComponent';
import InputComponent from './InputComponent';
import { initLocalPeer } from '../actions';
import { connect } from 'react-redux';

class ChatComponent extends Component {

    componentWillMount() {
        this.props.dispatch(initLocalPeer());
    }

    render() {
        return (
            <div className="chat">
                <ListMessageComponent />
                <InputComponent />
            </div>
        );
    }
}

export default connect()(ChatComponent);