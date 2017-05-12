import React, { Component } from 'react';
import axios from 'axios';
import './UserList.css';

class UserItem extends Component {

    render() {
        return (
            <li>
                <img src={this.props.img} />
                <div>{this.props.username}</div>
            </li>
        );
    }
}

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        var self = this;
        this.serverRequest = axios.get("https://randomuser.me/api/?results=10")
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    console.log(response.data.results);
                    self.setState({
                        users: response.data.results
                    });
                }
            });
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        console.log("render: ");
        console.log(this.state.users);
        const listItems = this.state.users.map(function (item, index) {
            console.log(item.picture.medium);
            return <UserItem key={index} img={item.picture.medium} username={item.name.first + ' ' + item.name.last} />
        });
        return (
            <div>
                <h1>Author</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default UserList;