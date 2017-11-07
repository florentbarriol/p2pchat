import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions';

class InputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    onChangeMessage = (event) => this.setState({ message: event.target.value });

    onSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(sendMessage(this.state.message));
        this.setState({ message: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label htmlFor="message">Saisir votre message : </label>
                <input
                    type="text"
                    name="message"
                    onChange={this.onChangeMessage.bind(this)}
                    value={this.state.message}
                />
                <button type="submit">Send</button>
            </form>
        );
    }
}

export default connect()(InputComponent);