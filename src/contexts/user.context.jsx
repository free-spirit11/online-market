// import { createContext, useState, useEffect, useReducer } from 'react';
// // import { onAuthStateChanged } from 'firebase/auth';
// import { onAuthStateChangedListener, createUserDocumentFromAuthIfDoesNotExist } from '../utils/firebase/firebase.utils';


// export const UserContext = createContext({
//     currentUser: null,
//     setCurrentUser: () => null
// });

// export const USER_ACTION_TYPES = {
//     SET_CURRENT_USER: 'SET_CURRENT_USER'
// }

// const userReducer = (state, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case USER_ACTION_TYPES.SET_CURRENT_USER:
//             return {
//                 ...state,
//                 currentUser: payload
//             }
//         default:
//             throw new Error(`Unandled type ${type} in userReducer`);
//     }
// }

// const INITIAL_STATE = {
//     currentUser: null
// }

// export const UserProvider = ({ children }) => {
//     // const [currentUser, setCurrentUser] = useState(null);
//     const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
//     const { currentUser } = state;

//     const setCurrentUser = (user) => {
//         dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
//     }

//     const value = { currentUser, setCurrentUser };

//     useEffect(() => {
//         const unsubscribe = onAuthStateChangedListener((user) => {
//             // if (user) { //if we signed in with google popup, auth gets the user and we create the doc in the DB from this component
//             //     createUserDocumentFromAuthIfDoesNotExist(user);
//             // }
//             setCurrentUser(user); //we are setting the user context depending on auth change from this class and will use the currentUser info anywhere it is needed
//         });

//         //in useEffect, whatever is returned is being ran when the component unMounts
//         return unsubscribe;
//     }, [])

//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// };