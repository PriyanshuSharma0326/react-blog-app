import React from 'react'
import PostsPage from '../../pages/posts/posts.page';
import { Route, Routes } from 'react-router-dom';

function Posts() {
    return (
        <Routes>
            <Route index element={<PostsPage />} />

            <Route path=':post' element={<>Post</>} />
        </Routes>
    );
}

export default Posts;
