import { useState } from 'react';
import firebaseInititalization from '../Pages/Login/Firebase/firebaseInint';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect } from 'react';

firebaseInititalization();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const createAccount = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name }
                setUser(newUser);
                savedUser(email, name);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => { })
                    .catch((error) => { });

                history.push('/');
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                const destination = location.state?.from || '/';
                history.push(destination);
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubcribe;
    }, []);

    useEffect(() => {
        fetch(`https://mighty-sea-02606.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
                setIsLoading(false)
            })
    }, [user.email])

    const logOut = () => {
        signOut(auth).then(() => {
            setAuthError('');
        }).catch((error) => {
            setAuthError(error.message);
        })
            .finally(() => setIsLoading(false));
    }

    const savedUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://mighty-sea-02606.herokuapp.com/users', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => { })
    }



    return {
        user,
        authError,
        isLoading,
        authError,
        admin,
        createAccount,
        signInUser,
        logOut
    }

}
export default useFirebase;