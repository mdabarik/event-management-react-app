import { createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const FirebaseAuthContext = createContext(null);


const FirebaseAuthProvider = ({children}) => {

    const createUserNormal = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginNormal = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    
    const authInformation = {
        createUserNormal,
        loginNormal,
        
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