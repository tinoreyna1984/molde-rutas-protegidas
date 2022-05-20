import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login', // nombre de la variable que impacta globalmente el app
    initialState: { // estado inicial de la variable de estado
        logged: false,
        modal: false,
    },
    reducers: {
        // proceso de login
        login: (state) => {
            state.logged = true;
        },
        logout: (state) => {
            state.logged = false;
        },
        // modal para login
        openModal : (state) => {
            state.modal = true;
        },
        closeModal : (state) => {
            state.modal = false;
        },
    }
});

// exportamos acciones y reducers
export const {login, logout, openModal, closeModal} = loginSlice.actions;
export default loginSlice.reducer;
