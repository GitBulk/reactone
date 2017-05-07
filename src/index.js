import React from 'react';
import ReactDOM from 'react-dom';
import HelloUser from './HelloUser';
import Prop1 from './Prop1';
import Prop2 from './Prop2';
import Badge from './Prop3';

/*function tick() {
    const element = (
        <div>
            <h1>Hello world</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 100);
*/
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

// ReactDOM.render(
//     element
//     ,document.getElementById('root')
// );


// ReactDOM.render(
//     <HelloUser name="Toan Tran" />,
//     document.getElementById('root')
// );


// test Prop1
/*ReactDOM.render(
    <Prop1 
        img='https://s.gravatar.com/avatar/fb15c0de33b61ebfd3490df31ed0922d?s=300'
        name='Toan'
        username="Tran" />,
    document.getElementById('root')
);*/

// test Prop2
// const userProps2 = {
//     name: 'Toan Tran 2',
//     username: 'gitbulk',
//     img: 'https://s.gravatar.com/avatar/fb15c0de33b61ebfd3490df31ed0922d?s=300'
// }

// ReactDOM.render(
//     <Prop2 user={userProps2} />
//     ,document.getElementById('root')
// );


ReactDOM.render(
    <Badge user={{
        img: 'https://s.gravatar.com/avatar/fb15c0de33b61ebfd3490df31ed0922d?s=300',
        name: 'Toan Tran 3',
        username: 'gitbulk'
    }} />,
    document.getElementById('root')
); 