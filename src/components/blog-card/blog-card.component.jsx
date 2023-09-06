import React from 'react';
import './blog-card.styles.scss';
import { useNavigate } from 'react-router-dom';

function BlogCard({ blogTitle, blogContent, id }) {
    const navigate = useNavigate();

    const routeHandler = (postID) => {
        navigate(`/posts/${postID}`);
    }

    return (
        <div className='blog-card-container' onClick={() => routeHandler(id)}>
            <h1 className='blog-title'>{blogTitle}</h1>

            <p className="blog-content">
                {blogContent?.length > 220 ? blogContent.substr(0, 220) + '...' : blogContent}
            </p>
        </div>
    )
}

export default BlogCard;
