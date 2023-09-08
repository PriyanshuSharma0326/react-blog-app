import React, { useContext, useEffect, useRef, useState } from 'react';
import './blog-form.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { v4 as uuidv4 } from 'uuid';
import { createPostDoc } from '../../lib/utils/firebase.utils';
import { FormContext } from '../../context/form-context';
import { PostsContext } from '../../context/posts-context';

function useOutsideAlerter(ref) {
    const { setShowForm } = useContext(FormContext);

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowForm(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

function BlogForm() {
    const { setShowForm } = useContext(FormContext);

    const { setButtonClicked } = useContext(PostsContext);

    const defaultFormFields = {
        blogTitle: '',
        blogContent: ''
    };

    const [formInputs, setFormInputs] = useState(defaultFormFields);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormInputs({...formInputs, [name]: value});
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const post = {...formInputs, id: uuidv4()};
        await createPostDoc(post);
        setButtonClicked(true);
        setShowForm(false);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <form className='blog-form-container' onSubmit={submitHandler} ref={wrapperRef}>
            <FormInput 
                labelText='Title' 
                inputType=''
                inputOptions={{
                    placeholder: 'Write your post title',
                    type: 'text',
                    required: true,
                    id: 'blogTitle',
                    name: 'blogTitle',
                    onChange: changeHandler,
                    value: formInputs.blogTitle
                }}
            />

            <FormInput 
                labelText='Body' 
                inputType='textarea' 
                inputOptions={{
                    placeholder: 'What\'s on your mind?',
                    type: 'text',
                    required: true,
                    id: 'blogContent',
                    name: 'blogContent',
                    cols: '30',
                    rows: '10',
                    onChange: changeHandler,
                    value: formInputs.blogContent
                }}
            />

            <Button 
                buttonText='Publish Post' 
                type='submit' 
                onClick={submitHandler} 
            />
        </form>
    )
}

export default BlogForm;
