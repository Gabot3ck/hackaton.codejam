import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      status: 'not-authenticated',
      uid: null,
      errorMessage: null,
      name: null,
      lastName: null,
    },
    reducers: {
      login: ( state, { payload } ) => {
        state.status = 'authenticated';
        state.uid = payload.uid;
        state.email = payload.email;
        state.name = payload.name;
        state.lastName = payload.lastName;
        state.errorMessage = null;
      },
      logout: ( state, { payload } ) => {
        state.status = 'not-authenticated';
        state.uid = null;
        state.email = null;
        state.name = null;
        state.lastName = null;
        state.errorMessage = payload?.errorMessage;
      },
      checkingCredentials: (state) => {
        state.status = 'checking';
      }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;