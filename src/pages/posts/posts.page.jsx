import React, { useContext } from 'react';
import './posts.styles.scss';
import BlogCard from '../../components/blog-card/blog-card.component';
import { PostsContext } from '../../context/posts-context';

function PostsPage() {
    const { posts } = useContext(PostsContext);

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
