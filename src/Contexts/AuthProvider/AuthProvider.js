import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config'
export const AuthContext = createContext();
export const DarkModeContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    });

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state auth', currentUser)

            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }

            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    })

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);


    const darkModeInfo = { darkMode, setDarkMode };
    const authInfo = { user, verifyEmail, setLoading, providerLogin, updateUserProfile, loading, logOut, createUser, signIn }
    return (
        <AuthContext.Provider value={authInfo}>
            <DarkModeContext.Provider value={darkModeInfo}>
                {children}
            </DarkModeContext.Provider>
        </AuthContext.Provider>
    );
};

export default AuthProvider;