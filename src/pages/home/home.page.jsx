import React, { useContext } from 'react';
import './home.styles.scss';
import Button from '../../components/button/button.component';
import BlogCard from '../../components/blog-card/blog-card.component';
import { PostsContext } from '../../context/posts-context';
import { UserContext } from '../../context/user-context';
import BlogForm from '../../components/blog-form/blog-form.component';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../../context/form-context';

function Home() {
    const { posts } = useContext(PostsContext);

    console.log(posts);

    const { currentUser } = useContext(UserContext);

    const navigate = useNavigate();

    const { showForm, setShowForm } = useContext(FormContext);

    const handlePostFormOnScreen = () => {
        if(!currentUser) {
            navigate('/login');
            return;
        }
        setShowForm(true);
    }

    return (
        <div className='homepage-container'>
            <div className="home-head">
                <h1 className="home-title">Popular posts from BlogDaily</h1>

                <div className="create-button-container">
                    <Button 
                        buttonText='Create New Post' 
                        type='button' 
                        onClick={handlePostFormOnScreen} 
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

            {showForm && <BlogForm />}
        </div>
    )
}

export default Home;
