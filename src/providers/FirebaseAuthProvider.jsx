import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export const FirebaseAuthContext = createContext(null);
const provider = new GoogleAuthProvider();


const FirebaseAuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [profileURL, setProfileURL] = useState("");
    const [profileName, setProfileName] = useState("");

    const profilePhotoHandler = (url) => {
        setProfileURL(url);
    }

    const profileNameHandler = (name) => {
        setProfileName(name);
    }

    const userHandler = (currentUser) => {
        setUser(currentUser)
    }

    const createUserNormal = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginNormal = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    
    const authInformation = {
        user,
        createUserNormal,
        loginNormal,
        setProfileURL,
        profilePhotoHandler,
        googleSignIn,
        profileURL,
        profileName,
        profileNameHandler,
        userHandler,
        loading
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user in the auth state changed', currentUser);
            console.log("current use inside onAuthStateChanged", currentUser)
            setUser(currentUser);
            setLoading(false);
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