import React, { Component } from 'react';
import './NavigationMemu.css';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = { focused: 0 };
    }

    menuItemClicked(index) {
        this.setState({
            focused: index
        });
    }

    render() {
        var self = this;

        return (
            <div>
                <ul>
                    {this.props.items.map(function(item, index) {
                        var style = '';
                        if (self.state.focused === index) {
                            style = 'focused';
                        }

                        return <li className={style} onClick={self.menuItemClicked.bind(self, index)}>{item}</li>
                    })}
                </ul>
                <p>Selected: {this.props.items[this.state.focused]}</p>
            </div>
        );
    }
}

export default Menu;