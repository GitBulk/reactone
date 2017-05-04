import React from 'react';
import ReactDOM from 'react-dom';
import HelloUser from './HelloUser';
import Prop1 from './Prop1'

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: 'toan',
//     lastName: 'tran'
// };

// const element = (
//     <h1>Hello, {formatName(user)}</h1>
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
ReactDOM.render(
    <Prop1 
        img='https://avatars3.githubusercontent.com/u/11367920?v=3&s=460'
        name='Toan'
        username="Tran" />,
    document.getElementById('root')
);