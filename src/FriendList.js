import React from 'react';

class FriendItem extends React.Component {
    render() {
        return (
            <div>
                <h3>Friends</h3>
                <ul>
                    {this.props.names.map(function(item, index) {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default class FriendList extends React.Component {
    render() {
        const name = 'Gitbulk';
        const friends = ['abc', 'Kaka', 'Lasthulk', 'Kaka', 'Sieu Nhan Gao'];
        return (
            <div>
                <h3>Name: {name}</h3>
                <FriendItem names={friends} />
            </div>
        );
    }
}
