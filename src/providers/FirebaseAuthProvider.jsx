import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const FirebaseAuthContext = createContext(null);


const FirebaseAuthProvider = ({children}) => {
    const [profileURL, setProfileURL] = useState("");

    const profilePhotoHandler = (url) => {
        setProfileURL(url);
    }

    const createUserNormal = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginNormal = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    
    const authInformation = {
        createUserNormal,
        loginNormal,
        setProfileURL,
        profilePhotoHandler,
        profileURL
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            // onAuthStateChanged
        })
        return () => unsubscribe();
    }, [])

    return (
        <FirebaseAuthContext.Provider value={authInformation}>
            {children}
        </FirebaseAuthContext.Provider>
    );
};

export default FirebaseAuthProvider;