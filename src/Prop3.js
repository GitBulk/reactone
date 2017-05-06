import React, { Component } from 'react';

class Avatar extends Component {
    render() {
        return (
            <img src={this.props.imgUrl} />
        );
    }
}

class DisplayName extends Component {
    render() {
        return (
            <h1>Name: {this.props.name}</h1>
        );
    }
}

class UserName extends Component {
    render() {
        return (
            <h3>Username: {this.props.username}</h3>
        );
    }
}

export default class Kaka extends Component {
    render() {
        return (
            <div>
                <Avatar imgUrl={this.props.user.img} />
                <DisplayName name={this.props.user.name} />
                <UserName username={this.props.user.username} />
            </div>
        );
    }
}

// multi export stackoverflow.com/questions/37773775/react-js-importing-multiple-component-from-a-single-jsx-file+&cd=1&hl=vi&ct=clnk&gl=vn
