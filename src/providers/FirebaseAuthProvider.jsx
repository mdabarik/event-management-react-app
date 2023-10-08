import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export const FirebaseAuthContext = createContext(null);
const provider = new GoogleAuthProvider();


const FirebaseAuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [profileURL, setProfileURL] = useState(null);
    const [profileName, setProfileName] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

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
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const handleLoggedInStatus = () => {
        setLoggedIn(true);
    }


    
    const authInformation = {
        user,
        createUserNormal,
        loginNormal,
        logOut,
        setProfileURL,
        profilePhotoHandler,
        googleSignIn,
        profileURL,
        profileName,
        profileNameHandler,
        userHandler,
        loading,
        loggedIn,
        handleLoggedInStatus,
        setLoading,
        setUser
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const uid = currentUser?.uid;
            console.log("Loggedin user id", uid);

            // console.log('user in the auth state changed', currentUser);
            console.log("current use inside onAuthStateChanged", currentUser)
            console.log("registered or logged in");
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