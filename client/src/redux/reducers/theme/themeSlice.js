import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isBlack: false,
        style: {
            background: '#fff',
            color: '#000'
        },
        status: 'idle'
    },
    reducers: {
        toggleTheme: (state) => {
            state.isBlack = !state.isBlack;
            state.style = {
                background: !state.isBlack ? '#000' : '#fff',
                color: !state.isBlack ? '#fff' : '#000',
                border: !state.isBlack ? '2px solid #000' : '2px solid #000'
            };
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;