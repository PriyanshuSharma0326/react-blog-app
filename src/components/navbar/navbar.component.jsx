import React from 'react';
import './navbar.styles.scss';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar-container'>
            <div className="navbar-title">
                <Link to='/' className="navbar-link">BlogDaily</Link>
            </div>

            <ul className="navbar-links">
                <Link to='/' className="navbar-link">Home</Link>
                <Link to='/login' className="navbar-link">Login</Link>
            </ul>
        </nav>
    );
}

export default Navbar;
