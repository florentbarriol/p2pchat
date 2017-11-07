import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageComponent from './MessageComponent';
import { connect } from 'react-redux';

class ListMessageComponent extends Component {
    render() {
        const { messages } = this.props;
        return (
            <div className="messages">
                {messages.map((message, index) => {
                    return <MessageComponent
                        key={index}
                        message={message}
                    />
                })}
            </div>
        );
    }
}

ListMessageComponent.propTypes = {
    messages: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(ListMessageComponent);