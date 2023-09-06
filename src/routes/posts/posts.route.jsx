import React from 'react'
import PostsPage from '../../pages/posts/posts.page';
import { Route, Routes } from 'react-router-dom';
import SingleBlog from '../single-blog/single-blog.route';

function Posts() {
    return (
        <Routes>
            <Route index element={<PostsPage />} />

            <Route path=':postID' element={<SingleBlog />} />
        </Routes>
    );
}

export default Posts;
