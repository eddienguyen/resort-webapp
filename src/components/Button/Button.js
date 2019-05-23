import React, { Component } from 'react';
import './style.scss';

class Button extends Component {
    render() {
        const { onClick, children } = this.props;
        return (
            <button onClick={onClick} className="btnPrimary">
                {children}
            </button>
        );
    }
}

export default Button;