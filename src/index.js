import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
    const element = (
        <div>
            <h1>Hello world</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 100);

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)} !!!</h1>;
    }
    return <h1>Hello, Stranger</h1>;
}

const user = {
    firstName: 'toan',
    lastName: 'tran',
    avatarUrl: ''
};

const element = (
    // <h1>Hello, {formatName(user)}</h1>
    getGreeting(user)
);

const element2 = <div tabIndex="0"></div>

const element3 = <img src={user.avatarUrl} />

const element4 = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
)

// ReactDOM.render(
//     element4
//     ,document.getElementById('root')
// );