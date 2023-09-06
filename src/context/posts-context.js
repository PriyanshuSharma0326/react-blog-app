import { createContext, useEffect, useState } from "react";
import { getDataFromCollections } from "../lib/utils/firebase.utils";

export const PostsContext = createContext({
    posts: [],
    setPosts: () => [],
});

export const PostsContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        const unsubscribe = async () => {
            const postsData = await getDataFromCollections();
            setPosts(postsData);
        }

        return unsubscribe;
    }, []);

    const contextValue = {
        posts, setPosts
    };

    return (
        <PostsContext.Provider value={ contextValue }>
            { children }
        </PostsContext.Provider>
    );
}
