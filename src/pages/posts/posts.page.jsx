import React from 'react';
import './posts.styles.scss';
import posts from '../../constants/postsData';
import BlogCard from '../../components/blog-card/blog-card.component';

function PostsPage() {
    return (
        <div className='posts-page-container'>
            <h1 className="page-title">Posts</h1>

            <div className="posts-container">
                {posts.map(post => {
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

export default PostsPage;
