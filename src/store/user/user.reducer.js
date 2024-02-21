import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    currentUser: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser(state, action) { //the same as if we wrote setCurrentUser: () => { }
            state.currentUser = action.payload //although it looks mutable, in fact under the hood redux toolkit makes it immutable (creates new object with states like we did in the reducer manuallt before)
        }
    }
});

export const { setCurrentUser } = userSlice.actions; //.actions returns all the actions from the Slice created instead of reducers property
export const userReducer = userSlice.reducer; //this exports reducer from the slice so that we could use it in the root reducer

// import { USER_ACTION_TYPES } from "./user.types";

// const INITIAL_STATE = {
//     currentUser: null
// };

// export const userReducer = (state = INITIAL_STATE, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case USER_ACTION_TYPES.SET_CURRENT_USER:
//             return { ...state, currentUser: payload };
//         default:
//             return state;
//     }
// };