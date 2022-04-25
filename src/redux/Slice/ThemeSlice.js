import { createSlice } from "@reduxjs/toolkit";
import { lightTheme } from "../../Theme/ThemeColors";

const themeSlice = createSlice({
    name : 'bookmark list',
    initialState : {
        currentTheme : lightTheme
    },
    reducers : {
        setTheme : (state, actions) => {
            state.currentTheme = actions.payload
        }
    }
})

export const {setTheme} = themeSlice.actions
export default themeSlice.reducer