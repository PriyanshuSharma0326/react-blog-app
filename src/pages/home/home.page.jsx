import React from 'react';
import './home.styles.scss';
import Button from '../../components/button/button.component';
import posts from '../../constants/postsData';
import BlogCard from '../../components/blog-card/blog-card.component';

function Home() {
    return (
        <div className='homepage-container'>
            <div className="home-head">
                <h1 className="home-title">Popular posts from BlogDaily</h1>

                <div className="create-button-container">
                    <Button 
                        buttonText='Create New Post' 
                        type='button' 
                    />
                </div>
            </div>

            <div className="popular-posts-container">
                {posts.slice(0, 6).map(post => {
                    return (
                        <BlogCard 
                            key={post.id} 
                            {...post} 
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Home;
