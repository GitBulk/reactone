import React, { Component } from 'react';

export default class Prop2 extends Component {
    render() {
        return (
            <div>
                <img src={this.props.user.img} />
                <h1>Name: {this.props.user.name}</h1>
                <h3>Username: {this.props.user.username}</h3>
            </div>
        );
    }
}