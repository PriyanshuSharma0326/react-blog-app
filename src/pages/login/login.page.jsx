import React from 'react';
import './login.styles.scss';
import Button from '../../components/button/button.component';

import { createUserDoc, googlePopupSignIn } from '../../lib/utils/firebase.utils';

function Login() {
    const googleSignInHandler = async () => {
        const { user } = await googlePopupSignIn()
        .catch((error) => {
            alert(error.message);
        });

        await createUserDoc(user);
    }

    return (
        <div className='login-page-container'>
            <h1 className="login-page-title">Blog Daily Login</h1>

            <h2 className="login-desc">
                To keep connected with us please login with your personal info with google
            </h2>

            <Button 
                buttonText='Login With Google' 
                type='button' 
                onClick={googleSignInHandler} 
            />
        </div>
    )
}

export default Login;
