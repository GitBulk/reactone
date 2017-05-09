import React from 'react';

function ActionLink() {

    function handleClick(e) {
        e.preventDefault();
        alert('The link was clicked');
    }

    return (
        <a href="#" onClick={handleClick}>Click me</a>
    );
}