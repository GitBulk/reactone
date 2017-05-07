import React, { Component } from 'react';

export default class AllFriends extends Component {
    render() {
        const name = 'Toan Tran';
        const friends = ['Ronaldo', 'Messi', 'Maradona'];
        return (
            <div>
                <h3>Name: {name}</h3>
                <h3>Friends</h3>
                <ul>
                    {friends.map(function(item) {
                        return <li>{item}</li>
                    })}
                </ul>
            </div>
        );
    }
}