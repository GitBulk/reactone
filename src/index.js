import React from 'react';
import ReactDOM from 'react-dom';
import HelloUser from './HelloUser';
import Prop1 from './Prop1';
import Prop2 from './Prop2';
import Badge from './Prop3';
import AllFriends from './AllFriends';
import FriendList from './FriendList';
import Comment from './FunctionalComponent';
import Clock from './AboutState';
//import Menu from './NavigationMenu';
import Toggle from './Toggle';
import NumberList from './Keys';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import Calculator from './Calculator';
import UserList from './FetchingSamples/UserList';
import Tictactoe from './tictactoe/Game';

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

// test Prop3
/*ReactDOM.render(
    <Badge user={{
        img: 'https://s.gravatar.com/avatar/fb15c0de33b61ebfd3490df31ed0922d?s=300',
        name: 'Toan Tran 3',
        username: 'gitbulk'
    }} />,
    document.getElementById('root')
); */


// ReactDOM.render(
//     <AllFriends />,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <FriendList />
//     ,document.getElementById('root')
// );


// test function component
/*const commentData = {
    date: new Date(),
    text: 'Learning React',
    author: {
        name: 'Gitbulk',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

ReactDOM.render(
    <Comment
        date={commentData.date}
        text={commentData.text}
        author={commentData.author} />
    , document.getElementById('root')
);*/


// test state sample
// ReactDOM.render(
//     <Clock />
//     ,document.getElementById('root')
// );

// test navigation menu
// ReactDOM.render(
//     <Menu items={ ['Home', 'Services', 'About', 'Contact us'] }/>
//     ,document.getElementById('root')
// );

// ReactDOM.render(
//     <Toggle />
//     ,document.getElementById('root')
// );


// const numbers = [1, 2, 3, 2, 4];
// ReactDOM.render(
//     <NumberList numbers={numbers} />
//     , document.getElementById('root')
// );


// ReactDOM.render(
//     <EssayForm />
//     ,document.getElementById('root')
// );

// ReactDOM.render(
//     <Calculator />
//     ,document.getElementById('root')
// );

// ReactDOM.render(
//     <UserList />,
//     document.getElementById('root')
// );


ReactDOM.render(
    <Tictactoe />,
    document.getElementById('root')
);