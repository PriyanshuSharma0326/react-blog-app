import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContextProvider } from './context/user-context';
import { PostsContextProvider } from './context/posts-context';
import { FormContextProvider } from './context/form-context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <UserContextProvider>
                <PostsContextProvider>
                    <FormContextProvider>
                        <App />
                    </FormContextProvider>
                </PostsContextProvider>
            </UserContextProvider>
        </Router>
    </React.StrictMode>
);
