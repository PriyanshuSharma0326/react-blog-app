import React, { useContext } from 'react';
import './navbar.styles.scss';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user-context';
import { signOutUser } from '../../lib/utils/firebase.utils';
import Button from '../button/button.component';

function Navbar() {
    const navigate = useNavigate();

    const { currentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
        navigate('/');
    }

    return (
        <nav className='navbar-container'>
            <div className="navbar-title">
                <Link to='/' className="navbar-link">BlogDaily</Link>
            </div>

            <ul className="navbar-links">
                <Link to='/' className="navbar-link">Home</Link>

                {currentUser && <Link to='/posts' className="navbar-link">Posts</Link>}

                {!currentUser ? 
                    <Link to='/login' className="navbar-link">Login</Link> : 

                    <Button 
                        buttonText='Logout' 
                        type='button' 
                        onClick={signOutHandler} 
                    />
                }
            </ul>
        </nav>
    );
}

export default Navbar;
