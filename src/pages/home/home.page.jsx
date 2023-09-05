import React from 'react';
import './home.styles.scss';
import { Button } from '../../constants';

function Home() {
    return (
        <div className='homepage-container'>
            <div className="home-head">
                <h1 className="home-title">Popular posts from BlogDaily</h1>

                <div className="create-button-container">
                    <Button 
                        buttonText='Create New Post' 
                        type='button' 
                        buttonType='inverted'
                    />
                </div>
            </div>

            <div className="popular-posts-container"></div>
        </div>
    )
}

export default Home;
