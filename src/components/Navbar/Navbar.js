import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
// import globalLogo from 'assets/images/logo.png';
import logo from 'assets/images/SVG/logo.svg';
import SingleRoom from 'pages/SingleRoom';
import './styles.scss';
import indexRoutes from 'routes';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isScrollDown: false
        }
        this.handleToggle = this.handleToggle.bind(this);
        // this.handleScrollDown = this.handleScrollDown.bind(this);
    }
    handleToggle() {
        this.setState(currentState => {
            return {
                isOpen: !currentState.isOpen
            }
        })
    }

    handleScrollDown = () => {
        const navbarHeight = 80;
        if (window.scrollY > navbarHeight) {
            console.log('scrolled');
            if (this.state.isScrollDown === true) return;

            this.setState({
                isScrollDown: true
            });
            return;
        }
        if (window.scrollY <= navbarHeight) {
            console.log('unscrolled');
            if (this.state.isScrollDown === false) return;

            this.setState({
                isScrollDown: false
            });
            return;
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollDown);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollDown);
    }

    render() {
        const { isOpen, isScrollDown } = this.state;

        return (
            <nav className="navbar">
                <div className="navCenter">
                    <div className="navHeader">
                        <Link to="/">
                            <img src={logo} alt="navLogo" className="navLogo" />
                        </Link>
                        <button className="navBtn" onClick={this.handleToggle}>
                            <IoIosMenu className="navIcon" />
                        </button>
                    </div>

                    <ul className={isOpen ? "navLinks open" : "navLinks"}>
                        {indexRoutes.map((prop, key) => {
                            return prop.path && prop.component.prototype !== SingleRoom.prototype && (
                                <li key={key}>
                                    <Link
                                        to={prop.path}
                                        className={isScrollDown ? 'scrolled' : ''}
                                    >{prop.name}</Link>
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