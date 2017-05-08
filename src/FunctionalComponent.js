import React from 'react';

function formatDate(date) {
    return date.toLocaleDateString();                
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}  />
            <div className="Comment-Text">
                {props.text}
	        </div>
            <div className="Comment-Date">
                {formatDate(props.date)}
	        </div>
        </div>
    );
}

function Avartar(props) {
    return (
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avartar user={props.user} />
            <div className="UserInfo-Name">
                {props.user.name}
            </div>
        </div>
    );
}

export default Comment;