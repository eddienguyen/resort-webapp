import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
import globalLogo from 'assets/images/logo.png';
import SingleRoom from 'pages/SingleRoom';
import './styles.scss';
import indexRoutes from 'routes';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
        this.setState(currentState => {
            return {
                isOpen: !currentState.isOpen
            }
        })
    }

    render() {
        const { isOpen } = this.state;
        return (
            <nav className="navbar">
                <div className="navCenter">
                    <div className="navHeader">
                        <Link to="/">
                            <img src={globalLogo} alt="globalLogo" />
                        </Link>
                        <button className="navBtn" onClick={this.handleToggle}>
                            <IoIosMenu className="navIcon" />
                        </button>
                    </div>

                    <ul className={isOpen ? "navLinks open" : "navLinks"}>
                        {indexRoutes.map((prop, key) => {
                            return prop.path && prop.component.prototype !== SingleRoom.prototype && (
                                <li key={key}>
                                    <Link to={prop.path}>{prop.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;