import React, { Component  } from 'react';

export default class HelloUser extends Component  {
    render() {
        return (
            <div>Hello, {this.props.name}</div>
        );
    }
}