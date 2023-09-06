import { auth, db, provider } from "../config/firebase";
import { 
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore';

import { 
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

// Method to Create User Doc to collections
const createUserDoc = async (user) => {
    if(!user) return;

    const userDocRef = doc(db, 'users', user.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = user;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch(err) {
            console.log(err);
        }
    }

    return userDocRef;
}

// Method to Create Post Doc to collections
const createPostDoc = async (post) => {
    const { blogTitle, blogContent, id } = post;

    const postDocRef = doc(db, 'posts', id);

    const createdAt = new Date();

    try {
        await setDoc(postDocRef, {
            id,
            blogTitle,
            blogContent,
            createdAt
        });
    }
    catch(err) {
        console.log(err);
    }
}

// Method to Sign User In with Google Popup
const googlePopupSignIn = () => signInWithPopup(auth, provider);

// Method to Sign User Out
const signOutUser = () => signOut(auth);

// Method to Listen to Auth State Changes
const authStateChangeListener = (callback) => {
    onAuthStateChanged(auth, callback);
}

// Method to Add Data to collections
const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field = 'title') => {
    const collectionRef = collection(db, collectionKey);

    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object[field]);

        batch.set(docRef, object);
    });

    await batch.commit();
}

// Method to Get Data from collections
const getDataFromCollections = async () => {
    const collectionRef = collection(db, 'posts');
    const querySnapshot = await getDocs(collectionRef);

    const data = querySnapshot.docs.map((doc) => {
        return doc.data();
    });

    return data;
}

export {
    googlePopupSignIn,
    createUserDoc,
    createPostDoc,
    signOutUser,
    authStateChangeListener,

    addCollectionAndDocuments,
    getDataFromCollections,
};
