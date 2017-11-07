import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageComponent extends Component {
    render() {
        const { message } = this.props;
        return (
            <div className="message">
                from {message.from} : {message.text}
            </div>
        );
    }
}

MessageComponent.propTypes = {
    message: PropTypes.object.isRequired
}

export default MessageComponent;