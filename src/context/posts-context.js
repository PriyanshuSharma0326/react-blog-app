import { createContext, useEffect, useState } from "react";
import { getDataFromCollections } from "../lib/utils/firebase.utils";

export const PostsContext = createContext({
    posts: [],
    setPosts: () => [],
});

export const PostsContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(()=> {
        const unsubscribe = async () => {
            const postsData = await getDataFromCollections();
            setPosts(postsData);
        }

        unsubscribe();
    }, []);

    useEffect(() => {
        const getPosts = async () => {
            const postsData = await getDataFromCollections();
            setPosts(postsData);
        }

        if(buttonClicked) {
            getPosts();
            setButtonClicked(false);
        }
    }, [buttonClicked]);

    const contextValue = {
        posts, setPosts, setButtonClicked
    };

    return (
        <PostsContext.Provider value={ contextValue }>
            { children }
        </PostsContext.Provider>
    );
}
