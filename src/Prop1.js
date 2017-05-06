import React, { Component } from 'react';

export default class Prop1 extends Component {
    render() {
        return (
            <div>
                <img src={this.props.img}/>
                <h1>Name: {this.props.name}</h1>
                <h2>Username: {this.props.username}</h2>
            </div>
        );
    }
}