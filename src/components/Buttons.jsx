import React, { Component } from 'react';

export default class Buttons extends Component {
    render() {
        return (
            <button type="submit" id="btn" onClick={this.props.fun}>
                {this.props.type}
            </button>
        );
    }
}
