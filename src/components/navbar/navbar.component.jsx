import React from 'react';
import './navbar.styles.scss';

function Navbar() {
    return (
        <nav className='navbar-container'>
            <div className="navbar-title">
                <li className="navbar-link">BlogDaily</li>
            </div>

            <ul className="navbar-links">
                <li className="navbar-link">Home</li>
                <li className="navbar-link">Login</li>
            </ul>
        </nav>
    );
}

export default Navbar;
