import React, { useContext } from 'react';
import './single-blog.styles.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { PostsContext } from '../../context/posts-context';

function SingleBlog() {
    const { postID } = useParams();

    const navigate = useNavigate();

    const { posts } = useContext(PostsContext);

    const post = posts.filter(post => post.id === postID)[0];

    if(!post) {
        navigate('/error');
        return null;
    }

    return (
        <div className='blog-container'>
            <h1 className="blog-title">{post.blogTitle}</h1>

            <p className="blog-content">{post.blogContent}</p>
        </div>
    )
}

export default SingleBlog;
