import React from 'react';
import './blog-card.styles.scss';

function BlogCard({ postTitle, postText }) {
    return (
        <div className='blog-card-container'>
            <h1 className='blog-title'>{postTitle}</h1>

            <p className="blog-content">
                {postText}
            </p>
        </div>
    )
}

export default BlogCard;
