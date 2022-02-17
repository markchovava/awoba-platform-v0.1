import React, { createContext, useContext, useState, useEffect} from 'react';
import { auth } from '../firebase/firebase';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
    // todo: track and set user sign in status
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    // todo: create user with email and password, then return a promise
    const signUp = (email, password) => (
        auth.createUserWithEmailAndPassword(email, password)
    );

    // todo: sign in user to existing account
    const signIn =  (email, password) => (
        auth.signInWithEmailAndPassword(email, password)
    );

    // todo: sign out a user
    const signOut = () => (
        auth.signOut()
    );

    useEffect(() => {
        // todo: check user sign in status
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setUser(authUser);
            setLoading(false);
        });

        // todo: perform clean up
        return unsubscribe;
    }, [])

    // todo: pass values
    const value = { user, signUp, signIn, signOut };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
};