import { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { onAuthStateChangedListener, createUserDocumentFromAuthIfDoesNotExist } from '../utils/firebase/firebase.utils';


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            // if (user) { //if we signed in with google popup, auth gets the user and we create the doc in the DB from this component
            //     createUserDocumentFromAuthIfDoesNotExist(user);
            // }
            setCurrentUser(user); //we are setting the user context depending on auth change from this class and will use the currentUser info anywhere it is needed
            console.log(user);
        });

        //in useEffect, whatever is returned is being ran when the component unMounts
        return unsubscribe;
    })

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};